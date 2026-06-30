#!/usr/bin/env node
/**
 * Link checker for docs.capillarytech.com
 * Checks every URL below and reports which fail and why.
 *
 * Run:  node check-links.js
 * Needs Node 18+ (uses global fetch).
 *
 * Tabs included: "API Reference" + "User Documentation"
 * Tab excluded:  "v1 API Reference"
 */

const URLS = [
  "https://docs.capillarytech.com/reference/loyalty-promotions",
  "https://docs.capillarytech.com/reference/create-a-loyalty-promotion",
  "https://docs.capillarytech.com/reference/submit-promotion-for-approval",
  "https://docs.capillarytech.com/reference/review-loyalty-promotion",
  "https://docs.capillarytech.com/reference/enrol-loyalty-promotion",
  "https://docs.capillarytech.com/reference/update-loyalty-promotion",
  "https://docs.capillarytech.com/reference/get-loyalty-promotion-id",
  "https://docs.capillarytech.com/reference/get-loyalty-promotion-all",
  "https://docs.capillarytech.com/reference/list-member-promotions",
  "https://docs.capillarytech.com/reference/list-member-promotions-explode",
  "https://docs.capillarytech.com/reference/get-customer-promotion-details",
  "https://docs.capillarytech.com/reference/revoke-a-loyalty-promotion",
  "https://docs.capillarytech.com/svg-all-links",
  "https://docs.capillarytech.com/svg",
  "https://docs.capillarytech.com/docs/Home",
  "https://docs.capillarytech.com/dimensions-tables",
  "https://docs.capillarytech.com/fact-tables",
  "https://docs.capillarytech.com/docs/bill-line-items-fact-table",
  "https://docs.capillarytech.com/docs/daily-till-summary-fact-table",
  "https://docs.capillarytech.com/docs/payment-details-fact",
  "https://docs.capillarytech.com/docs/return-bill-line-item-fact-table",
  "https://docs.capillarytech.com/docs/customer-summary-members-fact-table",
  "https://docs.capillarytech.com/docs/profile-users-fact-table",
  "https://docs.capillarytech.com/docs/fact_registration-event",
  "https://docs.capillarytech.com/docs/nsadmin-messages-fact-table",
  "https://docs.capillarytech.com/docs/goodwill-requests-fact-table",
  "https://docs.capillarytech.com/docs/points-fact-table",
  "https://docs.capillarytech.com/docs/coupons-fact-table",
  "https://docs.capillarytech.com/docs/badges-fact-table",
  "https://docs.capillarytech.com/docs/fact_streaks",
  "https://docs.capillarytech.com/docs/journeys-fact-table",
  "https://docs.capillarytech.com/docs/fact_milestones",
  "https://docs.capillarytech.com/docs/rewards-fact-table",
  "https://docs.capillarytech.com/docs/invitation-sent-fact-table",
  "https://docs.capillarytech.com/docs/referrals-fact-table",
  "https://docs.capillarytech.com/docs/referrers-fact-table",
  "https://docs.capillarytech.com/docs/contact-info-fact-table",
  "https://docs.capillarytech.com/docs/response-info-fact-table",
  "https://docs.capillarytech.com/docs/communication-credits-log-fact-table",
  "https://docs.capillarytech.com/docs/email-click-stats-fact-table",
  "https://docs.capillarytech.com/docs/custom-field-data-fact-table",
  "https://docs.capillarytech.com/docs/customer-merge-log-fact-table",
  "https://docs.capillarytech.com/docs/customer-notes-fact-table",
  "https://docs.capillarytech.com/docs/issue-tracker-fact-table",
  "https://docs.capillarytech.com/docs/call-task-customer-status-fact-table",
  "https://docs.capillarytech.com/docs/slab-change-log-fact-table",
  "https://docs.capillarytech.com/docs/earned-promotions-fact",
  "https://docs.capillarytech.com/docs/issued-promotions-fact-table",
  "https://docs.capillarytech.com/docs/partner-program-enrollment-fact-table",
  "https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table",
  "https://docs.capillarytech.com/docs/external-partner-program-table",
  "https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table-1",
  "https://docs.capillarytech.com/docs/supplementary-partner-program-fact-table",
  "https://docs.capillarytech.com/docs/link",
  "https://docs.capillarytech.com/docs/event-schema-payload",
  "https://docs.capillarytech.com/docs/event-schema-customer",
  "https://docs.capillarytech.com/docs/event-schema-rewards",
  "https://docs.capillarytech.com/docs/event-schema-loyalty",
  "https://docs.capillarytech.com/docs/event-schema-loyalty-and-cart-promotions",
  "https://docs.capillarytech.com/docs/event-schema-tier",
  "https://docs.capillarytech.com/docs/event-schema-partner-program",
  "https://docs.capillarytech.com/docs/event-schema-incentives",
  "https://docs.capillarytech.com/docs/event-schema-cards",
  "https://docs.capillarytech.com/docs/event-schema-request-updated",
  "https://docs.capillarytech.com/docs/event-schema-advanced-request-workflows",
];

const CONCURRENCY = 2;       // keep low to avoid 429 rate-limiting
const MAX_RETRIES = 8;       // retries on 429 / network error
const REQUEST_TIMEOUT = 20000;
const THROTTLE_MS = 300;     // small pause before each request

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function checkUrl(url) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    await sleep(THROTTLE_MS);
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT);
    try {
      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "User-Agent": "Mozilla/5.0 (link-check)" },
        signal: ctrl.signal,
      });
      clearTimeout(t);
      if (res.status === 429) {
        await sleep(2000 * (attempt + 1)); // back off and retry
        continue;
      }
      return { url, status: res.status, ok: res.status === 200, reason: res.statusText };
    } catch (err) {
      clearTimeout(t);
      if (attempt === MAX_RETRIES - 1) {
        return { url, status: "ERR", ok: false, reason: err.message };
      }
      await sleep(1000);
    }
  }
  return { url, status: 429, ok: false, reason: "Too Many Requests (rate limited)" };
}

async function run() {
  console.log(`Checking ${URLS.length} URLs (concurrency ${CONCURRENCY})...\n`);
  const results = [];
  let idx = 0;
  let done = 0;

  async function worker() {
    while (idx < URLS.length) {
      const myUrl = URLS[idx++];
      const r = await checkUrl(myUrl);
      results.push(r);
      done++;
      process.stdout.write(`\r  progress: ${done}/${URLS.length}`);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log("\n");

  const fails = results.filter((r) => !r.ok).sort((a, b) => String(a.status).localeCompare(String(b.status)));
  const oks = results.filter((r) => r.ok);

  console.log("=".repeat(70));
  console.log(`TOTAL: ${results.length}   OK (200): ${oks.length}   FAILING: ${fails.length}`);
  console.log("=".repeat(70));

  if (fails.length) {
    console.log("\nFAILING URLS:\n");
    for (const f of fails) {
      console.log(`  [${f.status}] ${f.url}\n        reason: ${f.reason}`);
    }
  } else {
    console.log("\nAll URLs returned 200 OK.");
  }
}

run();
