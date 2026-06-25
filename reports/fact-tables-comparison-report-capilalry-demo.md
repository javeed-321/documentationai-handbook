# Documentation Audit Report

**Date:** 2026-06-25
**Audited By:** Automated comparison agent (Claude Sonnet 4.6)
**Live Site:** https://capilalry-demo.documentationai.com
**Local Source:** /home/javeed/Documents/Starter-Kit/capillary/documentationai-handbook/docs/
**Scope:** 37 documentation pages (fact tables)

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total pages audited | 37 |
| Matches (no differences) | 22 |
| Mismatches (differences found) | 15 |
| Missing (not found) | 0 |
| Errors | 0 |

**Match rate:** 59.5% (22/37)

---

## All Pages — Status Overview

| # | Page Slug | Status | Summary |
|---|-----------|--------|---------|
| 1 | `bill-line-items-fact-table` | ✅ | Functionally identical; whitespace-only differences collapse on render |
| 2 | `daily-till-summary-fact-table` | ✅ | All 30 rows, headings, and links match exactly |
| 3 | `payment-details-fact` | ✅ | All 28 rows, intro, headings, and export markers match |
| 4 | `return-bill-line-item-fact-table` | ⚠️ | Missing spaces in 5th column header, bold text vs H2 headings, absolute vs relative links |
| 5 | `customer-summary-members-fact-table` | ✅ | All 70 rows, 5 columns, and links match exactly |
| 6 | `profile-users-fact-table` | ⚠️ | Typo in 5th column header: "in theProfilesTemplate" missing spaces |
| 7 | `fact_registration-event` | ✅ | All 15 rows, headers, export markers, and links match |
| 8 | `nsadmin-messages-fact-table` | ⚠️ | Intro paragraph wording, last column header concatenation artifact, capitalization diff |
| 9 | `goodwill-requests-fact-table` | ✅ | All 28 rows, section headings, and links match exactly |
| 10 | `points-fact-table` | ✅ | All three sub-tables match completely |
| 11 | `coupons-fact-table` | ⚠️ | Double space in title, stale "Description New" header, extra content in multiple descriptions |
| 12 | `badges-fact-table` | ⚠️ | Section headings H3 vs H2, all links point to staging domain instead of live domain |
| 13 | `fact_streaks` | ⚠️ | Bold text vs H2 headings, first column header casing difference |
| 14 | `journeys-fact-table` | ✅ | All 21 rows, headings, and links match exactly |
| 15 | `fact_milestones` | ✅ | All 9 rows, headings, and links match exactly |
| 16 | `rewards-fact-table` | ✅ | All five sub-tables match completely |
| 17 | `invitation-sent-fact-table` | ✅ | All 15 rows, headers, export markers, and links match |
| 18 | `referrals-fact-table` | ⚠️ | Truncated intro paragraph on live; all 13 column descriptions shortened on live |
| 19 | `referrers-fact-table` | ✅ | All 10 rows, intro, and links match exactly |
| 20 | `contact-info-fact-table` | ⚠️ | Column header typo, bold vs H2 headings, missing Legend section, malformed link format |
| 21 | `response-info-fact-table` | ⚠️ | Intro paragraph grammatical error, column header typo, export names with extra ">" suffixes, linked table name spacing |
| 22 | `communication-credits-log-fact-table` | ✅ | All 14 rows and links match exactly |
| 23 | `email-click-stats-fact-table` | ✅ | All 13 rows, ERD heading, and links match exactly |
| 24 | `custom-field-data-fact-table` | ✅ | All 11 columns, table name, and links match exactly |
| 25 | `customer-merge-log-fact-table` | ✅ | All 15 rows and links match exactly |
| 26 | `customer-notes-fact-table` | ⚠️ | Bold vs H2 heading, missing Legend section, external vs relative links |
| 27 | `issue-tracker-fact-table` | ✅ | All 20 rows match (known typos are consistent on both sides) |
| 28 | `call-task-customer-status-fact-table` | ⚠️ | Column header missing spaces, bold vs H2 headings, double space in frontmatter title |
| 29 | `slab-change-log-fact-table` | ✅ | All 21 rows match; column header whitespace collapses identically on render |
| 30 | `earned-promotions-fact` | ✅ | All 21 rows, headings, and links match exactly |
| 31 | `issued-promotions-fact-table` | ✅ | All 16 rows, headings, and links match exactly |
| 32 | `partner-program-enrollment-fact-table` | ⚠️ | Doubly-nested bracket syntax in 2 Linked Table cells produces broken links |
| 33 | `partner-program-slab-history-fact-table` | ⚠️ | Empty href for `year` row, malformed nested markdown link for `dim_partner_program_id` |
| 34 | `external-partner-program-table` | ⚠️ | Empty href for `is_active`, doubly-nested links in 7 rows, double space in one description |
| 35 | `partner-program-slab-history-fact-table-1` | ⚠️ | Empty href `[date]()` in `year` row renders as self-referential link on live |
| 36 | `supplementary-partner-program-fact-table` | ⚠️ | Doubly-nested bracket syntax in 7 of 10 rows produces broken links on live |
| 37 | `link` | ⚠️ | Empty href for `partner_programs` in `value` row |

---

## Detailed Mismatch Breakdown

Mismatches are grouped by severity: **Structural** (heading levels, missing sections) > **Content** (text, descriptions, wording) > **Links** (broken, malformed, wrong domain) > **Styling** (spacing, casing, formatting artifacts).

---

### STRUCTURAL ISSUES

Structural issues affect document hierarchy and rendered layout.

---

#### `return-bill-line-item-fact-table`

| Field | Local | Live |
|-------|-------|------|
| ERD section heading level/style | `**Return Bill Line item - Entity Relationship Diagram (ERD)**` (bold paragraph text) | H2: Return Bill Line item - Entity Relationship Diagram (ERD) |
| Table section heading level/style | `**Return Bill Line item Fact Table**` (bold paragraph text) | H2: Return Bill Line item Fact Table |
| 5th column header text | `Availability for Export in theReturn TransactionsTemplate` | `Availability for Export in the Return Transactions Template` |
| Dimension table links (outlier_status, date, time, users, zone till, item, return_type, membership_type) | `https://docs.capillarytech.com/docs/dimension-tables#...` (absolute external URL) | `/docs/dimension-tables#...` (relative URL) |

---

#### `badges-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Heading: Badges - Earn (badges_earn) | `###` (H3) | `##` (H2) |
| Heading: Badges - Issue (badges_issue) | `###` (H3) | `##` (H2) |
| Heading: Badges - Earned Benefits (badges_earned_benefits) | `###` (H3) | `##` (H2) |
| Intro paragraph link to Badges Documentation | `https://capillary--dafiniti-javeed.documentationai.com/docs/introduction-to-badges` (staging domain) | `https://capilalry-demo.documentationai.com/docs/introduction-to-badges` (live domain) |
| All dimension table hrefs (~20 rows across all three tables) | `https://capillary--dafiniti-javeed.documentationai.com/docs/dimension-tables#...` (staging domain) | `https://capilalry-demo.documentationai.com/docs/dimension-tables#...` (live domain) |

---

#### `fact_streaks`

| Field | Local | Live |
|-------|-------|------|
| Section heading: User Streak Fact - ERD | `**User Streak Fact - Entity Relationship Diagram (ERD)**` (bold text) | H2: User Streak Fact - Entity Relationship Diagram (ERD) |
| Section heading: User Streak Fact Table | `**User Streak Fact Table**` (bold text) | H2: User Streak Fact Table |
| Table column header (first column) | `Column name` (lowercase 'n') | `Column Name` (uppercase 'N') |

---

#### `contact-info-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Section heading: ERD | `**Contact Info - Entity Relationship Diagram (ERD)**` (bold text, not a heading) | H2: Contact Info - Entity Relationship Diagram (ERD) |
| Section heading: Table | `**Contact Info Fact Table**` (bold text, not a heading) | H2: Contact Info Fact Table |
| Legend section | Not present | H2 Legend section present |
| 5th column header | `Availability for Export in theContactedTemplate` | `Availability for Export in the Contacted Template` |
| Linked Table cell: `dim_campaign_delivery_status_id` | `campaign_delivery_status [Link](https://docs.capillarytech.com/docs/dimension-tables#campaign-delivery-status)` | `campaign_delivery_status` (linked inline) |
| Linked Table cell: `dim_communication_channel_id` | `communication_channel [Link](https://docs.capillarytech.com/docs/dimension-tables#communication-channel)` | `communication_channel` (linked inline) |
| Linked Table cell: `dim_unsubscription_status_id` | `unsubscription_status [Link](https://docs.capillarytech.com/docs/dimension-tables#unsubscription-status)` | `unsubscription_status` (linked inline) |
| Linked Table cell: `dim_communication_type_id` | `communication_type [Link](https://docs.capillarytech.com/docs/dimension-tables#communication-type)` | `communication_type` (linked inline) |

---

#### `customer-notes-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Section heading: Table | `**Customer Notes Fact Table**` (bold text, not a heading) | H2: Customer Notes Fact Table |
| Legend section | Missing — no Legend section exists in local file | H2 "Legend" section present (PK = Primary Key, LK = Linking Key) |
| Link: `dim_event_date_id` | `https://docs.capillarytech.com/docs/dimension-tables#date` | `/docs/dimension-tables#date` |
| Link: `dim_event_time_id` | `https://docs.capillarytech.com/docs/dimension-tables#time` | `/docs/dimension-tables#time` |
| Link: `dim_event_user_id` | `https://docs.capillarytech.com/docs/dimension-tables#users-users` | `/docs/dimension-tables#users-users` |
| Link: `dim_event_zone_till_id` | `https://docs.capillarytech.com/docs/dimension-tables#zone-till` | `/docs/dimension-tables#zone-till` |
| Link: `dim_latest_updated_date_id` | `https://docs.capillarytech.com/docs/dimension-tables#date` | `/docs/dimension-tables#date` |
| Link: `dim_latest_updated_time_id` | `https://docs.capillarytech.com/docs/dimension-tables#time` | `/docs/dimension-tables#time` |

---

#### `call-task-customer-status-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Frontmatter title | `Call Task  Customer Status Fact Table` (double space) | `Call Task Customer Status Fact Table` (single space) |
| Export column header | `Availability for Export in theCall TasksTemplate` | `Availability for Export in the Call Tasks Template` |
| Section heading: ERD | `**Call Task Customer Status Fact - Entity Relationship Diagram (ERD)**` (bold text) | `## Call Task Customer Status Fact - Entity Relationship Diagram (ERD)` (H2) |
| Section heading: Table | `**Call Task Customer Status Fact Table**` (bold text) | `## Call Task Customer Status Fact Table` (H2) |

---

### CONTENT ISSUES

Content issues affect the accuracy of text displayed to users.

---

#### `nsadmin-messages-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Intro paragraph | `It lets you access both, transaction and campaign messages together.` | `providing access to both transactional and campaign messages together.` |
| Last column header | `Availability for Export in theMessagesTemplate` | `Export Availability` |
| `dim_communication_channel_id` description — channel name | `Wechat` | `WeChat` |

---

#### `coupons-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Frontmatter title | `Coupons  Fact Table` (double space) | `Coupons Fact Table` (single space) |
| Table column header: column 3 | `Description New` | `Description` |
| Table column header: column 5 | `Availability for Export in theCoupons template` | `Export Available` |
| `dim_coupon_issual_type_id` description | Contains extra sentences: "Single: A single coupon is issued in response to a specific event. Bulk: Multiple coupons are issued simultaneously." | `Identifier of the type of coupon issued. Possible values are - Single, and Bulk.` |
| `dim_event_date_id` description | `Date when the coupon issual or redemption has occurred.` | `Date when the coupon issual or redemption occurred` |
| `dim_event_time_id` description | `Time when the coupon issual or redeemed.` | `Time when the coupon was issued or redeemed` |
| `dim_event_zone_till_id` description | Includes extra sentence: "It distinguishes one checkout location from another within the same store." | Ends at: `...where the coupon was issued/redeemed.` |
| `dim_issual_zone_till_id` description | Includes extra sentence: "It distinguishes one checkout location from another within the same store." | Ends at: `...where the coupon was issued.` |

---

#### `referrals-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Intro paragraph | Full 4-sentence paragraph including referral event details | Truncated to 2 sentences; missing "This fact table captures all the information surrounding the referral event..." |
| `auto_update_time` description | `Date and time when the corresponding table available at the source was last updated. It is in the Unix timestamp format.` | `Unix timestamp of last source update` |
| `context_id` description | `Identifier for the context in which the action occurred, such as a specific campaign or promotion context.` | `Identifier for action context` |
| `dim_campaign_id` description | `Identifier for the campaign associated with the referral action.` | `Campaign identifier` |
| `dim_event_date_id` description | `Date when the referral action occurred.` | `Referral action date` |
| `dim_event_time_id` description | `Time when the referral action occurred.` | `Referral action time` |
| `dim_event_user_id` description | `Identifier for the customer associated with the referral action.` | `Customer identifier` |
| `dim_event_zone_till_id` description | Full sentence including "It distinguishes one checkout location from another within the same store." | `POS terminal identifier within store` |
| `dim_latest_updated_date_id` description | `Date when the data corresponding to this event/row is changed in the source table.` | `Data change date in source` |
| `dim_latest_updated_time_id` description | `Time when the data corresponding to this event/row is changed in the source table.` | `Data change time in source` |
| `dim_referred_to_user_id` description | `Identifier for the customer who was referred (referee).` | `Referee customer identifier` |
| `event_type` description | Full values: `"Referral Registration" ... or "Referral Transaction" ...` | `"Referral Registration" or "Referral Transaction"` |
| `referee_id` description | `Unique identifier for the referee (the customer who was referred). It is the primary key of the table.` | `Primary key; unique referee identifier` |
| `year` description | `Year of the referral.` | `Referral year` |

---

#### `response-info-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Intro paragraph | `This table captures the transaction data of customers who have responded to outbound campaigns, among those contacted during the campaign duration. The captures fields such as the bill amount, bill number, campaign details, and customer loyalty status.` (grammatical error: "The captures fields") | `The table captures transaction data of customers who responded to outbound campaigns, among those contacted during the campaign duration, including bill amounts, numbers, campaign details, and loyalty status.` |
| Column header 5 | `Availability for Export in theRespondersTemplate` | `Export Available` |
| `dim_campaign_delivery_status_id` export name | `Campaign Delivery Status > Status Id` | `Campaign Delivery Status` |
| `dim_campaign_schedule_date_id` export name | `Campaign Schedule Date > Date Id` | `Campaign Schedule Date` |
| `dim_campaign_schedule_time_id` export name | `Campaign Schedule Time > Time Id` | `Campaign Schedule Time` |
| `dim_latest_updated_date_id` export name | `Latest Updated Date > Date` | `Latest Updated Date` |
| `dim_latest_updated_time_id` export name | `Latest Updated Time > Time` | `Latest Updated Time` |
| `dim_event_zone_till_id` linked table name | `zone tills` (space) | `zone_tills` (underscore) |

---

### LINK ISSUES

Link issues result in broken or incorrect navigation for users.

---

#### `profile-users-fact-table`

| Field | Local | Live |
|-------|-------|------|
| Table column header (5th column) | `Availability for Export in theProfilesTemplate` | `Availability for Export in the Profiles Template` |

---

#### `partner-program-enrollment-fact-table`

| Field | Local | Live |
|-------|-------|------|
| `dim_external_partner_program_id` — Linked Table href | `[partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs))` (doubly-nested markdown) | `[partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)` |
| `dim_partner_program_id` — Linked Table href | `[partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs))` (doubly-nested markdown) | `[partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)` |

---

#### `partner-program-slab-history-fact-table`

| Field | Local | Live |
|-------|-------|------|
| `year` — Linked Table href | `[date]()` — empty href (broken link) | Resolves to self-referential URL: `https://capilalry-demo.documentationai.com/docs/partner-program-slab-history-fact-table` |
| `dim_partner_program_id` — Linked Table href | `[partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs))` (malformed nested markdown) | Live URL-encodes inner markdown as path, producing a broken link to a non-existent page |

---

#### `external-partner-program-table`

| Field | Local | Live |
|-------|-------|------|
| `is_active` — Linked Table href | `[partner_programs]()` — empty href | Renders as self-referential link: `https://capilalry-demo.documentationai.com/docs/external-partner-program-table` |
| `description`, `partner_program_name`, `is_tier_based`, `points_exchange_ratio`, `external_partner_program_id`, `partner_program_type`, `partner_program_identifier` — Linked Table href | `[partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs))` (malformed nested markdown) | Renders as URL-encoded broken path on live domain |
| `is_tier_based` description whitespace | `...the partner program is  tier-based program.` (double space) | `...the partner program is tier-based program.` (single space) |

---

#### `partner-program-slab-history-fact-table-1`

| Field | Local | Live |
|-------|-------|------|
| `year` — Linked Table href | `[date]()` — empty href (broken link) | Renders as self-referential link: `https://capilalry-demo.documentationai.com/docs/partner-program-slab-history-fact-table-1` |

---

#### `supplementary-partner-program-fact-table`

| Field | Local | Live |
|-------|-------|------|
| `partner_program_name` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `points_exchange_ratio` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `description` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `partner_program_type` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `is_active` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `loyalty_program_id` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |
| `partner_program_identifier` — Linked Table href | `[partner_programs]([partner_programs](...))` (doubly-nested) | Broken URL-encoded path on live domain |

---

#### `link`

| Field | Local | Live |
|-------|-------|------|
| `value` row — Linked Table href for `partner_programs` | `` [`partner_programs`]() `` — empty href | Resolves to `https://capilalry-demo.documentationai.com/docs/link` (self-referential) |

---

## Previously Known Issues — Resolution Status

The following five issue categories were identified in prior review cycles. Their current status is assessed based on this audit.

---

### 1. Column Header Missing-Space Concatenation Artifacts (e.g., "in theXTemplate")

**Status: STILL PRESENT — widespread, not fully resolved**

This issue affects multiple pages where two spaces are missing in the 5th column header, causing words to concatenate (e.g., `in theReturn TransactionsTemplate` instead of `in the Return Transactions Template`).

Pages still affected:
- `return-bill-line-item-fact-table`: `in theReturn TransactionsTemplate`
- `profile-users-fact-table`: `in theProfilesTemplate`
- `nsadmin-messages-fact-table`: `in theMessagesTemplate`
- `coupons-fact-table`: `in theCoupons template`
- `contact-info-fact-table`: `in theContactedTemplate`
- `response-info-fact-table`: `in theRespondersTemplate`
- `call-task-customer-status-fact-table`: `in theCall TasksTemplate`

Note: `issue-tracker-fact-table` has `theIssue` artifact but it is consistent on both local and live, so it is flagged as a known issue without a live divergence. `slab-change-log-fact-table` also has the artifact but HTML rendering collapses it identically.

---

### 2. Bold Text Used Instead of H2/H3 Section Headings

**Status: STILL PRESENT — affects multiple pages**

Several local MDX files use bold paragraph text (`**Heading Text**`) where the live rendered page shows proper H2 (`##`) headings. This is a source formatting defect that may or may not affect SEO and accessibility.

Pages still affected:
- `return-bill-line-item-fact-table`: ERD and Table section headings
- `fact_streaks`: ERD and Table section headings
- `contact-info-fact-table`: ERD and Table section headings
- `customer-notes-fact-table`: Table section heading
- `call-task-customer-status-fact-table`: ERD and Table section headings

Pages where bold headings are consistent on both sides (not a divergence):
- `fact_milestones`, `goodwill-requests-fact-table`

---

### 3. Staging Domain Links Published to Live

**Status: STILL PRESENT — isolated to `badges-fact-table`**

The `badges-fact-table` page contains approximately 20+ dimension table links and one intro paragraph link pointing to `capillary--dafiniti-javeed.documentationai.com` (the staging/preview domain) instead of `capilalry-demo.documentationai.com` (the live domain). All other pages have been cleared of this issue.

---

### 4. Malformed Nested/Doubly-Nested Markdown Link Syntax

**Status: STILL PRESENT — affects partner program pages**

Several partner program pages have links where the href is itself a markdown link expression: `[text]([text](url))`. This causes the live site to URL-encode the inner markdown syntax as the path, producing broken links.

Pages affected:
- `partner-program-enrollment-fact-table` (2 rows)
- `partner-program-slab-history-fact-table` (1 row)
- `external-partner-program-table` (7 rows)
- `supplementary-partner-program-fact-table` (7 rows)

Additionally, multiple rows across partner program pages have empty hrefs `[text]()` that resolve to self-referential links:
- `partner-program-slab-history-fact-table` (`year` row)
- `external-partner-program-table` (`is_active` row)
- `partner-program-slab-history-fact-table-1` (`year` row)
- `link` (`value` row)

---

### 5. Stale or Diverged Column Descriptions (Local Longer Than Live)

**Status: STILL PRESENT — worsened on `referrals-fact-table`**

The `coupons-fact-table` has a stale column header (`Description New` vs `Description`) and several descriptions with extra trailing sentences not present on the live page.

The `referrals-fact-table` represents the most severe instance of this issue: the live page has significantly shortened all 13 column descriptions to 3-5 word summaries (e.g., `Campaign identifier`, `Referral action date`), while the local file retains the full original prose. The intro paragraph is also truncated on live. This may indicate the live page was edited independently after the local source was last synced, or that the live page content was replaced by an abbreviated version. The local source should be treated as authoritative unless the abbreviated descriptions were intentional.

The `response-info-fact-table` additionally has export dimension names with trailing `> Suffix` qualifiers in local (e.g., `Campaign Delivery Status > Status Id`) that are absent on live.