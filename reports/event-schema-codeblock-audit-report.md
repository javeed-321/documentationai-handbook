# Event Schema — Code Block & Tab Grouping Audit Report

**Date:** 2026-06-25
**Pages checked:** 11
**Source (live):** https://capilalry-demo.documentationai.com
**Local source:** `capillary/documentationai-handbook/docs/event-schema-*.mdx`
**Focus:** Code block grouping & tab name conventions (Webhook payload vs Non webhook payload)

---

## Summary

| Metric | Count |
|--------|-------|
| Total pages checked | 11 |
| Pages with no issues | 1 (navigation stub) |
| Pages where tabs render correctly | 1 (`event-schema-loyalty`) |
| Pages where tabs do NOT render (blocks ungrouped) | 9 |
| Pages that could not be fully audited | 1 (`event-schema-rewards` — file too large) |

---

## Summary Table

| # | Page | Local code blocks | Live site | Tabs rendered? | Issues |
|---|------|-------------------|-----------|----------------|--------|
| 1 | event-schema-payload | 0 | None | N/A | Navigation stub only — no issue |
| 2 | event-schema-advanced-request-workflows | 13 | 8 ungrouped | ❌ No | Non-standard tab names: `Pending`, `Failed`, `Approved`, `Rejected` |
| 3 | event-schema-request-updated | 4 | 3 ungrouped | ❌ No | Two blocks both named `Webhook payload` in PII section |
| 4 | event-schema-cards | 2 | 2 ungrouped | ❌ No | Correct names, not rendered as tabs |
| 5 | event-schema-incentives | 20+ | 27 ungrouped | ❌ No | Correct names, not rendered as tabs |
| 6 | event-schema-partner-program | 9 | 8 ungrouped | ❌ No | `PP_EXPIRY_JOB` block has no language tag or tab name |
| 7 | event-schema-tier | 8 | 8 ungrouped | ❌ No | Correct names, not rendered as tabs |
| 8 | event-schema-loyalty-and-cart-promotions | 22+ | ~15 ungrouped | ⚠️ Partial | Hardcoded `<CodeGroup>` with verbose tab names; `Text` lang tag; invalid JSON |
| 9 | event-schema-loyalty | 30 | 30 (tabbed) | ✅ Likely yes | Only page that may render tabs correctly |
| 10 | event-schema-rewards | Too large to read | 8 ungrouped | ❌ No | File >256KB — could not fully audit |
| 11 | event-schema-customer | 10 | 8 ungrouped | ❌ No | 6 sections missing `Webhook payload` counterpart |

---

## Root Issue — Platform Not Rendering Consecutive Blocks as Tabs

The standard pattern used across every file is two consecutive fenced blocks:

````
```json Webhook payload
{ ... }
```
```json Non webhook payload
{ ... }
```
````

This **should** produce a tabbed CodeGroup with two tabs labeled **Webhook payload** and **Non webhook payload**. Instead, on **9 of 10 content pages** the live site renders them as two separate, unlabeled, ungrouped code blocks — the tab labels are discarded.

Only `event-schema-loyalty` appears to group blocks into tabs on the live site. This points to a **platform rendering / configuration issue**, not purely a content issue: the consecutive-fence → CodeGroup conversion is not firing consistently.

---

## Per-Page Detail

### 1. event-schema-payload
- **Local:** Only the text "Browse the pages in this section using the sidebar navigation." — 0 code blocks.
- **Live:** Same navigation stub.
- **Status:** ✅ No issue.

---

### 2. event-schema-advanced-request-workflows
State-based tab names instead of the standard convention:

| Subsection | Local tab names | Count |
|---|---|---|
| Points redemption | `Pending`, `Failed`, `Approved`, `Rejected` | 4 |
| Customer Status change | `Pending`, `Failed`, `Approved` | 3 |
| Goodwill point request | `Pending`, `Approved` | 2 |
| Earn badge | `Pending`, `Failed` | 2 |
| Issue badge | `Pending`, `Failed` | 2 |

- **Live:** 13 blocks render as separate ungrouped blocks; state labels not shown.
- **Issue:** Tab names use workflow states, not `Webhook payload` / `Non webhook payload`. May be intentional — **decision needed**.

---

### 3. event-schema-request-updated

| Section | Tab name | Notes |
|---|---|---|
| Transaction request update | `Webhook payload` | OK |
| Transaction request update | `Non webhook payload` | OK |
| PII deletion Scenario 1 | `Webhook payload` | Duplicate label |
| PII deletion Scenario 2 | `Webhook payload` | Duplicate label — no `Non webhook payload` pair |

- **Live:** 3 ungrouped blocks; PII scenarios collapsed.
- **Issue:** Two blocks both labeled `Webhook payload`. Differentiate as `Scenario 1` / `Scenario 2`.

---

### 4. event-schema-cards
- **Local:** ` ```json Webhook payload ` + ` ```json Non webhook payload ` (correct convention).
- **Live:** 2 ungrouped blocks, no tabs.
- **Issue:** Names correct; not rendered as a CodeGroup.

---

### 5. event-schema-incentives
- **Local:** Repeated `Webhook payload` / `Non webhook payload` across `rewardCreated`, `rewardIssued`, `rewardUpdated`, `issueRewardFailure`, `rewardExpiryReminder`, `updateRewardTransaction`, `CouponIssue` (×3), `CouponRedeem`. Note: `rewardUpdated` and `rewardExpiryReminder` have only `Non webhook payload`.
- **Live:** 27 ungrouped blocks.
- **Issue:** Names correct; not rendered as tabs.

---

### 6. event-schema-partner-program

| Section | Tab 1 | Tab 2 |
|---|---|---|
| partnerProgramLinked | `Webhook payload` | `Non webhook payload` |
| partnerProgramUpdated | `Webhook payload` | `Non webhook payload` |
| partnerProgramDelinked | `Webhook payload` | `Non webhook payload` |
| supplementaryMembershipExpiryReminder | `Webhook payload` | `Non webhook payload` |
| PP_EXPIRY_JOB | _(no language tag, no tab name)_ | _(no pair)_ |

- **Live:** 8 ungrouped blocks.
- **Issues:** Tabs not rendered; `PP_EXPIRY_JOB` uses a bare ` ``` ` fence with no language tag and no tab name.

---

### 7. event-schema-tier
- **Local:** `tierUpgraded`, `tierRenewed`, `tierDowngraded`, `tierDowngradeReminder` — each with `Webhook payload` + `Non webhook payload` (8 blocks).
- **Live:** 8 ungrouped blocks.
- **Issue:** Names correct; not rendered as tabs.

---

### 8. event-schema-loyalty-and-cart-promotions
The `promotionCreated` section uses a hardcoded `<CodeGroup>` with verbose, non-standard tab labels:

```mdx
<CodeGroup tabs="Webhook payload-For Transaction Events, with custom fields,For Generic Events, (event name and id would be of generic event),For Target completed event, there will be xtra field named linkedTargetGroupVsTargetRuleIdMap,Non webhook payload">
```

Resulting tabs:
- `Webhook payload-For Transaction Events, with custom fields`
- `For Generic Events, (event name and id would be of generic event)`
- `For Target completed event, there will be xtra field named linkedTargetGroupVsTargetRuleIdMap`
- `Non webhook payload`

Other sections (`promotionUpdated`, `promotionIssued`, `promotionEarned`, `revokeIssuedPromotion`, `revokeEarnedPromotion`, `cartPromotionIssued`, `cartPromotionRedeemed`, `cartPromotionRevoked`, `cartPromotionEarned`) use the standard `Webhook payload` / `Non webhook payload` pattern.

- **Live:** ~15 ungrouped blocks; the CodeGroup collapses.
- **Issues:**
  1. Verbose comma-separated tab names break convention.
  2. ` ```Text ` used as language tag for two blocks — should be ` ```json `.
  3. `revokeIssuedPromotion` and `revokeEarnedPromotion` webhook blocks have invalid JSON (missing comma after `"eventName"`).
  4. Cart promotion events have only `Non webhook payload` (may be correct — no webhook variant).

---

### 9. event-schema-loyalty
- **Local:** 30 blocks, consistent `Webhook payload` / `Non webhook payload`.
- **Live:** 30 blocks rendered in 15 grouped sections — **the only page where tab grouping appears to work**. Tab label strings could not be confirmed by the scraper.
- **Issue:** Verify the live tab labels read `Webhook payload` / `Non webhook payload` and not something else.

---

### 10. event-schema-rewards
- **Local:** File >256KB — could not be fully read. Likely follows the same `Webhook payload` / `Non webhook payload` pattern.
- **Live:** 8 ungrouped blocks.
- **Issue:** Cannot fully audit locally; file must be read in chunks.

---

### 11. event-schema-customer

| Section | Tab 1 | Tab 2 |
|---|---|---|
| customerAdded | `Webhook payload` | `Non webhook payload` |
| customerUpdated | `Webhook payload` | `Non webhook payload` |
| PII deletion Customer update | `Webhook payload` | _(no pair)_ |
| customerSubscription | _(none)_ | `Non webhook payload` only |
| groupCreated | _(none)_ | `Non webhook payload` only |
| groupUpdated | _(none)_ | `Non webhook payload` only |
| groupMemberRemoved | _(none)_ | `Non webhook payload` only |
| groupMemberAdded | _(none)_ | `Non webhook payload` only |
| pointsContributionToGroup | _(none)_ | `Non webhook payload` only |

- **Live:** 8 ungrouped blocks.
- **Issue:** 6 group/subscription events have only `Non webhook payload` — add `Webhook payload` blocks or confirm no webhook variant exists.

---

## Action Items

| Priority | File | Action |
|----------|------|--------|
| 🔴 High | *(platform)* | Investigate why consecutive `Webhook payload` / `Non webhook payload` fences are not rendering as a tabbed CodeGroup on 9/10 pages |
| 🔴 High | `event-schema-loyalty-and-cart-promotions.mdx` | Replace verbose `<CodeGroup tabs="...">` with standard `Webhook payload` / `Non webhook payload` fences |
| 🔴 High | `event-schema-loyalty-and-cart-promotions.mdx` | Change ` ```Text ` → ` ```json ` on two code blocks |
| 🔴 High | `event-schema-loyalty-and-cart-promotions.mdx` | Fix missing comma after `"eventName"` in `revokeIssuedPromotion` and `revokeEarnedPromotion` |
| 🟡 Medium | `event-schema-advanced-request-workflows.mdx` | Decide: keep state-based names (`Pending`/`Failed`/`Approved`/`Rejected`) or convert to standard convention |
| 🟡 Medium | `event-schema-request-updated.mdx` | Rename duplicate `Webhook payload` labels in PII deletion to `Scenario 1` / `Scenario 2` |
| 🟡 Medium | `event-schema-partner-program.mdx` | Add ` ```json Non webhook payload ` to the `PP_EXPIRY_JOB` bare fence |
| 🟢 Low | `event-schema-customer.mdx` | 6 group/subscription events only have `Non webhook payload` — add `Webhook payload` or confirm none exists |
| 🟢 Low | `event-schema-rewards.mdx` | Read file in chunks and audit tab names |
| 🟢 Low | `event-schema-loyalty.mdx` | Confirm live tab labels read `Webhook payload` / `Non webhook payload` |

---

## Standard Capillary Tab Name Convention

| Tab name | When to use |
|---|---|
| `Webhook payload` | The webhook event payload format |
| `Non webhook payload` | The non-webhook (internal event log) payload format |

These are the only two standard tab names. All deviations — state names, verbose descriptions, `Text` language tags, missing/blank tags — should be corrected to this convention unless a documented exception is approved.
