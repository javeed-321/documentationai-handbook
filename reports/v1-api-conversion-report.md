# V1 API Reference Conversion Quality Report

**Date:** 2026-06-25
**Analyst:** Claude Code (Judge Mode)
**Scope:** RTF → JSON → YAML → MDX pipeline for Capillary v1 API Reference

---

## Pipeline Overview

```
v1json (1).rtf        →     v1_clean.json      →    api-reference/v1-*.yaml    →    reference/v1-*.mdx
(RTF, 4.2 MB)              (JSON, 4 MB)               (192 YAML files)               (192 MDX stubs)
  Source document         Cleaned OpenAPI spec       One file per endpoint        One page per endpoint
```

The conversion is performed by `split_v1_to_yamls.py`. It:
1. Extracts the embedded OpenAPI JSON from the RTF file
2. Saves it as `v1_clean.json` (single OpenAPI spec with all 179 paths / 192 operations)
3. Splits each operation into an individual self-contained YAML file
4. Generates a corresponding MDX stub page for each YAML
5. Updates `documentation.json` to wire all pages into the navigation

---

## Source File Stats

| File | Size | Contents |
|------|------|----------|
| `v1json (1).rtf` | 4.2 MB | Original RTF document with embedded OpenAPI JSON |
| `v1_clean.json` | 4.0 MB | Extracted OpenAPI 3.1.0 spec — 179 paths, 192 operations |
| `output.json` | 9.2 MB | Raw RTF-to-text extraction (67,164 paragraph strings) |

---

## Output Stats

| Output | Count |
|--------|-------|
| v1 YAML files generated (`api-reference/v1-*.yaml`) | 192 |
| v1 MDX stub files generated (`reference/v1-*.mdx`) | 192 |
| Navigation groups in `documentation.json` | 15 |
| Total pages wired in navigation | 192 |

---

## Navigation Groups

| Group | In `documentation.json` | Rendered on docs.ai platform |
|-------|------------------------|------------------------------|
| Authentication | 24 | 24 |
| Badges | 28 | 28 |
| Rewards | 51 | **44** ⚠️ |
| Promotions | 23 | 23 |
| Connected Orgs & Ledger | 13 | 13 |
| Search & Cortex | 11 | 11 |
| Coupons | 11 | 11 |
| Points & Loyalty | 8 | 8 |
| Transactions | 6 | 6 |
| Audit & Workflows | 4 | 4 |
| Customers | 4 | 4 |
| Loyalty | 3 | 3 |
| Recommendations | 3 | 3 |
| Leaderboards | 2 | 2 |
| DAS | 1 | 1 |
| **Total** | **192** | **185** |

> **Note on the 192 vs 185 discrepancy:** Both the local file and `origin/main` remote consistently contain 192 entries — verified across every git commit. The documentation.ai platform renders only 185, with 7 pages silently dropped from the Rewards group. No version in git history shows 185. The 7 missing Rewards pages are most likely the endpoints whose source paths contained spaces in path parameters (e.g., `{reward Id}`, `{brand name}`, `{Brand ID}`) — even after camelCase normalization in the YAML output, the platform may be rejecting those files due to subtle parse issues (malformed param names like `yYYY-MM-DDTHH:MMZ`, multiple JSON-body code samples, etc.). To confirm exactly which 7 are silently dropped, compare the rendered Rewards section on the live site against the 51 entries in `documentation.json`.

---

## Scorecard

| Dimension | Score | Result |
|-----------|-------|--------|
| Coverage — all source endpoints present in output | 10/10 | PASS |
| Navigation wiring — all pages in `documentation.json` | 10/10 | PASS |
| YAML parse validity — zero syntax errors | 10/10 | PASS |
| OpenAPI version consistency (all `3.1.0`) | 10/10 | PASS |
| Path parameter `required: true` enforcement | 10/10 | PASS |
| Path accuracy — URL correctness | 7/10 | ISSUES |
| Field fidelity — request body property names | 8/10 | ISSUES |
| Parameter accuracy — query/path params | 8/10 | ISSUES |
| Code sample quality | 8/10 | ISSUES |
| Response code coverage | 8/10 | ISSUES |
| Description completeness | 4/10 | FAIL |
| MDX content depth | 3/10 | STUBS ONLY |
| **Overall** | **~7.6/10** | |

---

## PASS: What Worked Correctly

### 1. Full Endpoint Coverage
All **192 operations** across 179 source paths are present in the YAML output. No endpoints were dropped during the split.

### 2. Navigation Wiring
`documentation.json` was correctly updated. All 192 pages have a valid `openapi:` field pointing to the right YAML file + HTTP method + path. Example:
```
api-reference/v1-get-entity-audit-logs.yaml GET /api_gateway/v2/audits
```

### 3. YAML Validity
Zero YAML parse errors across all 192 files.

### 4. OpenAPI Version
All YAMLs correctly inherit `openapi: 3.1.0` from the source.

### 5. Path Parameter Enforcement
Zero path parameters are missing `required: true`. The `clean_path_and_params()` function in the script correctly enforces this on all auto-inferred path params.

### 6. Code Samples (majority)
178 of 192 YAML files contain valid `curl` command code samples with real headers, auth, and request data.

---

## FAIL: Issues Found

---

### Issue 1 — "(COPY)" Path Contamination
**Severity: High**
**Files affected: 5**

The source `v1_clean.json` itself contained 4 paths with `(COPY)` appended — a Readme.io artefact that leaked into the RTF export. The conversion script passed these through without stripping them, producing invalid OpenAPI path keys and polluted titles.

**Affected files:**

| YAML File | Contaminated Path |
|-----------|------------------|
| `v1-change-identifier-on-auth-engine.yaml` | `/auth/v1/user/updateIdentifierValue (COPY)` |
| `v1-get-status-of-redeemed-coupons-copy.yaml` | `/upload/getUploadRedeemedCouponStatus/{couponSeriesId} (COPY)` |
| `v1-get-status-of-redeemed-coupons-copy-1.yaml` | _(title contaminated)_ |
| `v1-get-uploaded-coupons-status-copy.yaml` | `/coupon/api/v1/upload/getUploadStatus/{couponSeriesId} (COPY)` |
| `v1-upload-redeemed-coupons-copy.yaml` | `/upload/redeemFile (COPY)` |

**Impact:** Spaces in path keys are invalid in OpenAPI. These endpoints will fail validation and will not render correctly in documentation.ai.

**Fix:** Strip `(COPY)` and any trailing whitespace from all path keys in `v1_clean.json` before splitting, or add a sanitization step in `split_v1_to_yamls.py`.

---

### Issue 2 — Invalid Request Body Property Names
**Severity: High**
**Files affected: 4**

Some source endpoints used non-standard field naming (documentation artifacts from Readme.io's UI). The script passed them through without sanitization, resulting in invalid JSON Schema property names.

**Affected files:**

| YAML File | Invalid Property Names |
|-----------|----------------------|
| `v1-add-promotion.yaml` | `-exp`, `-expJSON`, `-isActive`, `-id`, `startDate , endDate`, `--name`, `--mandatoryPropertiesValues` |
| `v1-create-promotion-for-ucc.yaml` | Same as above |
| `v1-change-identifier-on-auth-engine.yaml` | `oldIdentifierValue*` (asterisk in name) |
| `v1-post-issue-user-reward.yaml` | `mobile/ email/externalId` (slash in name) |

**Impact:** Property names starting with `-`, `--`, containing spaces, commas, `*`, or `/` are illegal in JSON Schema / OpenAPI 3.1. These files will fail OpenAPI validators and may break SDK generation.

**Fix:** Sanitize property names in the script — strip leading dashes, asterisks, slashes, and commas before writing to YAML.

---

### Issue 3 — Data Infidelity on `change-identifier-on-auth-engine`
**Severity: High**
**Files affected: 1**

The `(COPY)` version of this endpoint (which is what got generated) has materially different and incorrect field data compared to the clean source:

| Attribute | Source (`v1_clean.json`) | Generated YAML |
|-----------|-------------------------|----------------|
| Path | `/auth/v1/user/updateIdentifierValue` | `/auth/v1/user/updateIdentifierValue (COPY)` |
| Description | "…in the Auth engine **database**." | "…in the Auth engine." _(truncated)_ |
| Field `identifierValue` | Present and required | Renamed to `oldIdentifierValue*` _(invalid)_ |
| Field `brand` | Present and required | Renamed to `brandName` |
| Field `token` | Present and required | **Missing entirely** |
| Code sample | _(none in source)_ | JSON body — not a curl command |

Note: A correctly-named `v1-change_identifier-on-auth-engine.yaml` (with underscore) also exists for the clean version, so the `(COPY)` version is a pollutant duplicate.

---

### Issue 4 — Spurious or Malformed Query Parameters
**Severity: Medium**
**Files affected: 32**

The script correctly parses query strings embedded in path keys (e.g., `/reward/brand/{BrandID}?ownerId={ownerId}`) and converts them to query parameters. However, some source paths used date format strings as placeholder values, which the camelCase normalizer mangled:

**Example:** `/reward/brand/{Brand ID}/available?startDate={YYYY-MM-DDTHH:MMZ}`
→ Generated query param name: `yYYY-MM-DDTHH:MMZ` _(the date format string was treated as a variable name)_

Other files have extra auto-inferred path params that were not in the original source.

**Sample affected files:**
- `v1-get-available-brand-rewards.yaml` — extra param `yYYY-MM-DDTHH:MMZ`
- `v1-get-catalog-promotion-details.yaml` — extra params `brandId`, `promotionId`
- `v1-get-list-of-vendor-redemption-details-by-vendor-id.yaml` — extra params `redemptionid`, `brandid`, `vendorid`
- `v1-get-reward-category.yaml` — source had `brand name` (spaced), normalized to `brandName` (correct) but flagged as mismatched vs source

**Fix:** Detect when a query string placeholder value matches a date format pattern (contains `-`, `T`, `:`, `Z`) and skip generating a query param from it. Instead, document it in the parameter description.

---

### Issue 5 — Missing Descriptions (60% of Endpoints)
**Severity: Medium**
**Files affected: 115 of 192**

115 YAML files have no `description` field on the operation. Their MDX stubs fall back to the generic text `"API endpoint: METHOD /path"`. This means 60% of v1 API reference pages have no meaningful description for developers.

**Root cause:** The source `v1_clean.json` had no `description` field on these operations — only a `summary`. This is a source data quality issue, not a script bug.

**Fix:** Either enrich the source JSON with descriptions before splitting, or add a post-processing step that copies `summary` into `description` as a fallback.

---

### Issue 6 — Code Samples as JSON Body Instead of Curl
**Severity: Medium**
**Files affected: 5 files, 14 instances**

14 code sample entries contain raw JSON request body text instead of a runnable `curl` command. These appear in the `x-readme.code-samples` field and are displayed as code examples in the docs, but cannot be run directly.

**Affected files:**
- `v1-change-identifier-on-auth-engine.yaml` — 1 instance
- `v1-create-badges-org-meta.yaml` — 1 instance
- `v1-generate-authentication-tokenapi.yaml` — 1 instance
- `v1-post-create-reward.yaml` — 7 instances
- `v1-put-update-reward.yaml` — 3 instances
- `v1-update-badges-org-meta.yaml` — 1 instance

**Fix:** These code samples need to be rewritten as full `curl` commands with headers and auth.

---

### Issue 7 — Only 200 Response Documented (No Error Codes)
**Severity: Low**
**Files affected: 15**

15 files document only a `200` response with no `4xx` or `5xx` codes. These were endpoints where the source JSON had no error responses defined either — so the conversion is faithful, but the output is incomplete from a developer experience standpoint.

**Sample affected files:**
- `v1-add-promotion.yaml`
- `v1-create-promotion-for-ucc.yaml`
- `v1-create-reward-currency-limits.yaml`
- `v1-get-all-badges.yaml`
- `v1-get-badges-for-customer.yaml`
- `v1-get-cart-recommendations.yaml`

**Fix:** Enrich the source JSON with standard error response schemas, or add a post-processing step that injects a generic `400` / `401` / `500` response template on all endpoints missing error codes.

---

### Issue 8 — MDX Pages Are Stubs Only
**Severity: Low (by design, but notable)**
**Files affected: 187 of 192**

Every v1 MDX page contains only:
```
---
title: "Endpoint Title"
---

## Endpoint Title

One sentence description (or nothing).
```

The actual API rendering is driven by the `openapi:` field in `documentation.json`, which is the correct documentation.ai pattern. However, there is **zero human-written contextual content** across all 192 v1 pages — no usage notes, auth context, field explanations, or examples beyond the raw schema.

---

## Root Cause Summary

Most issues trace back to **dirty source data** in `v1_clean.json` that originated in the RTF file:

| Root Cause | Issues It Caused |
|------------|-----------------|
| `(COPY)` paths in RTF/Readme.io export | Issues 1, 3 |
| Readme.io UI artifacts in field names (`-exp`, `*`, `/`) | Issue 2 |
| Date format strings used as path param placeholders | Issue 4 |
| Operations with no `description` in source | Issue 5 |
| Code samples stored as request body JSON, not curl | Issue 6 |
| No error responses in source for some endpoints | Issue 7 |

The `split_v1_to_yamls.py` script itself is well-structured. It handles most edge cases (embedded query strings, spaced path param names, missing required flags, `$ref` inlining). The issues that slipped through are ones the script did not have explicit sanitization logic for.

---

## Recommended Fixes (Priority Order)

| Priority | Fix | Effort |
|----------|-----|--------|
| P1 | Strip `(COPY)` from all path keys and titles before YAML generation | Low |
| P1 | Sanitize invalid property names (`-exp`, `*`, `/`, etc.) in request body schemas | Low |
| P2 | Detect and skip malformed date-format query param placeholders | Low |
| P2 | Add `description` fallback from `summary` for operations missing description | Low |
| P3 | Rewrite 14 body-only code samples as proper `curl` commands | Medium |
| P3 | Inject standard error response templates on endpoints with only `200` | Medium |
| P4 | Add contextual prose to high-priority MDX pages | High |

---

*Generated by automated analysis of 192 YAML files and 192 MDX files against the source `v1_clean.json` (179 paths / 192 operations).*
