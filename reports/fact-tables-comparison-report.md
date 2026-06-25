# Fact Tables — Remote vs Local Comparison Report

**Date:** 2026-06-25
**Pages checked:** 37
**Source:** https://docs.capillarytech.com

---

## Summary

| Metric | Count |
|--------|-------|
| Total pages checked | 37 |
| Pages matching | 30 |
| Pages with mismatches or issues | **7** |

**Breakdown of issues:**
- Content mismatch (local vs remote differ): 6
- No local file mapped (remote-only page): 1

---

## Pages With Issues

---

### 1. Registration Event Fact Table

**Remote URL:** https://docs.capillarytech.com/docs/fact_registration-event
**Local file:** `docs/fact_registration-event.mdx`
**Status:** `mismatch`

#### Table Structure

| Version | Columns |
|---------|---------|
| Remote | 3 columns: Column Name, Data Type, Description |
| Local | 5 columns: Column Name, Data Type, Description, Linked Table, Availability for Export |

#### Column Descriptions That Differ

| Column | Remote | Local |
|--------|--------|-------|
| `reference_id` | "Request ID from the API call that created the entity" | Full description with primary key note: "Represents the request_id of the API call that resulted in the creation of this entity..." |
| `dim_state_id` | "Registration status (Completed, failed, queued, etc.)" | Full value list: "Completed, executing, int_wait, failed, queued, temporary failure, and ext_wait." |
| `registration_event_rank` | "Computed ranking field" | "This field is computed on the Enhanced Insights side." |
| `dim_event_user_id` | "Internally assigned customer identifier" | "Identifier of the customer who has registered. It is an internally assigned value by Capillary for user identification." |
| `dim_event_zone_till_id` | "POS terminal identifier within store" | More detailed description distinguishing checkout locations |
| `dim_latest_updated_date_id` | "Date when record was last modified" | "Date when the data corresponding to this event/row is changed in the source table." |
| `dim_latest_updated_time_id` | "Time when record was last modified" | "Time when the data corresponding to this event/row is changed in the source table." |

#### Intro Text

| Version | Text |
|---------|------|
| Remote | "This table records essential details including the registration channel, entity type, timestamp, and store location information." |
| Local | "It captures information like the channel where the profile was created; the type of entity registered; date and time of the registration; and the store identifier for the registration." |

#### Export Availability

| Version | Format |
|---------|--------|
| Remote | Single footer note: "All columns are available for export in the Registration Event Log standard export template." |
| Local | Per-row export availability with specific measure/dimension names |

#### Local-only items
- "Linked Table" column with dimension table references (channel_account, entity_type, date, time, users, zone till, state)
- Per-row "Availability for Export" column with specific measure/dimension names
- Full ERD (Entity Relationship Diagram) SVG

> **Note:** All 15 column names and data types match between remote and local.

---

### 2. Badges Fact Table

**Remote URL:** https://docs.capillarytech.com/docs/badges-fact-table
**Local file:** `docs/badges-fact-table.mdx`
**Status:** `mismatch`

> All table data (columns, data types, descriptions) matches exactly. Differences are structural only.

#### Intro Paragraph Structure

| Version | Structure |
|---------|-----------|
| Remote | "The fact tables store the details..." is a **standalone 4th paragraph** |
| Local | That same sentence is **merged into the 3rd paragraph** (appended after "...based on star schema.") |

#### Section Heading Levels

| Version | Heading level |
|---------|--------------|
| Remote | `##` (H2) for all three sub-tables: Badges - Earn, Badges - Issue, Badges - Earned Benefits |
| Local | `###` (H3) for all three sub-tables |

#### ERD Legend

| Version | Legend location |
|---------|----------------|
| Remote | Explicit rendered text block outside diagram: "PK Primary Key \| LK Linking Key \| Fact Table \| Dimension Table" |
| Local | Embedded inside the SVG `dangerouslySetInnerHTML` — not present as standalone text |

#### Internal Links

| Version | Domain |
|---------|--------|
| Remote | `https://docs.capillarytech.com/docs/...` (production) |
| Local | `https://capillary--dafiniti-javeed.documentationai.com/docs/...` (staging) |

---

### 3. Issue Tracker Fact Table

**Remote URL:** https://docs.capillarytech.com/docs/issue-tracker-fact-table
**Local file:** `docs/issue-tracker-fact-table.mdx`
**Status:** `mismatch` — **typo in column name**

#### Typo

| Field | Remote | Local |
|-------|--------|-------|
| Column name (row 8 of 20) | `issue_department` ✓ | `issue_depearment` ✗ |

> All other 19 column names, data types, descriptions, linked tables, intro text, Databricks table name, and export availability are identical.

---

### 4. Issued Promotions Fact Table

**Remote URL:** https://docs.capillarytech.com/docs/issued-promotions-fact-table
**Local file:** `docs/issued-promotions-fact-table.mdx`
**Status:** `mismatch`

#### Export Availability Column — 12 rows affected

The local file marks these rows `*` (available for export), while the remote page leaves them empty:

| Column | Remote | Local |
|--------|--------|-------|
| `dim_customer_enrollment_date_id` | empty | `*` |
| `dim_customer_enrollment_time_id` | empty | `*` |
| `dim_event_date_id` | empty | `*` |
| `dim_event_time_id` | empty | `*` |
| `dim_issued_expiry_date_id` | empty | `*` |
| `dim_issued_expiry_time_id` | empty | `*` |
| `dim_issued_promotion_active_id` | empty | `*` |
| `dim_latest_updated_date_id` | empty | `*` |
| `dim_promotion_id` | empty | `*` |
| `event_log_id` | empty | `*` |
| `id` | empty | `*` |
| `year` | empty | `*` |

> All 16 column names, data types, descriptions, and linked tables are identical.

---

### 5. Partner Program Slab History Fact Table

**Remote URL:** https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table
**Local file:** `docs/partner-program-slab-history-fact-table.mdx`
**Status:** `mismatch`

#### Linked Table column — `year` row

| Version | Value |
|---------|-------|
| Remote | `[date](https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table)` *(self-referential link — likely authoring error)* |
| Local | `[date]()` *(empty href)* |

> All 14 rows, column names, data types, and descriptions are otherwise identical.

---

### 6. Partner Program Slab History Fact Table (variant 2)

**Remote URL:** https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table-1
**Local file:** `docs/partner-program-slab-history-fact-table-1.mdx`
**Status:** `mismatch`

#### Linked Table(s) column — `year` row

| Version | Value |
|---------|-------|
| Remote | `[date](https://docs.capillarytech.com/docs/partner-program-slab-history-fact-table-1)` *(self-referential link — likely authoring error)* |
| Local | `[date]()` *(empty href)* |

> All 16 rows, column names, data types, and descriptions are otherwise identical.

---

### 7. Partner Program Linking Fact Table — `/docs/link`

**Remote URL:** https://docs.capillarytech.com/docs/link
**Local file:** **none — file does not exist**
**Status:** `no_local_mapped`

The remote page describes the Databricks table `partner_program_is_linked` with two columns:

| Column | Data Type | Description |
|--------|-----------|-------------|
| `id` | bigint | Unique primary key identifier; linked to the `partner_programs` dimension table |
| `value` | string | Indicates whether a partner program is linked; references the `partner_programs` dimension table |

> **Action required:** A new local MDX file must be created for this page.

---

## All Matched Pages (30)

| # | Local file |
|---|-----------|
| 1 | `docs/bill-line-items-fact-table.mdx` |
| 2 | `docs/daily-till-summary-fact-table.mdx` |
| 3 | `docs/payment-details-fact.mdx` |
| 4 | `docs/return-bill-line-item-fact-table.mdx` |
| 5 | `docs/customer-summary-members-fact-table.mdx` |
| 6 | `docs/profile-users-fact-table.mdx` |
| 7 | `docs/nsadmin-messages-fact-table.mdx` |
| 8 | `docs/goodwill-requests-fact-table.mdx` |
| 9 | `docs/points-fact-table.mdx` |
| 10 | `docs/coupons-fact-table.mdx` |
| 11 | `docs/fact_streaks.mdx` |
| 12 | `docs/journeys-fact-table.mdx` |
| 13 | `docs/fact_milestones.mdx` |
| 14 | `docs/rewards-fact-table.mdx` |
| 15 | `docs/invitation-sent-fact-table.mdx` |
| 16 | `docs/referrals-fact-table.mdx` |
| 17 | `docs/referrers-fact-table.mdx` |
| 18 | `docs/contact-info-fact-table.mdx` |
| 19 | `docs/response-info-fact-table.mdx` |
| 20 | `docs/communication-credits-log-fact-table.mdx` |
| 21 | `docs/email-click-stats-fact-table.mdx` |
| 22 | `docs/custom-field-data-fact-table.mdx` |
| 23 | `docs/customer-merge-log-fact-table.mdx` |
| 24 | `docs/customer-notes-fact-table.mdx` |
| 25 | `docs/call-task-customer-status-fact-table.mdx` |
| 26 | `docs/slab-change-log-fact-table.mdx` |
| 27 | `docs/earned-promotions-fact.mdx` |
| 28 | `docs/partner-program-enrollment-fact-table.mdx` |
| 29 | `docs/external-partner-program-table.mdx` |
| 30 | `docs/supplementary-partner-program-fact-table.mdx` |

---

## Action Items

| Priority | File | Action |
|----------|------|--------|
| 🔴 High | `docs/issue-tracker-fact-table.mdx` | Fix typo: `issue_depearment` → `issue_department` |
| 🔴 High | *(missing)* | Create local MDX file for `partner_program_is_linked` table (remote: `/docs/link`) |
| 🟡 Medium | `docs/issued-promotions-fact-table.mdx` | Verify whether the 12 `*` export markers in local are correct — remote has them empty |
| 🟡 Medium | `docs/partner-program-slab-history-fact-table.mdx` | Fix empty `[date]()` href for `year` row's Linked Table |
| 🟡 Medium | `docs/partner-program-slab-history-fact-table-1.mdx` | Fix empty `[date]()` href for `year` row's Linked Table |
| 🟢 Low | `docs/badges-fact-table.mdx` | Fix heading levels (H3 → H2), add standalone intro paragraph, add text legend outside SVG, update staging links to production |
| 🟢 Low | `docs/fact_registration-event.mdx` | Local has more content than remote (ERD, linked tables, detailed descriptions) — likely intentional; confirm if remote needs updating |
