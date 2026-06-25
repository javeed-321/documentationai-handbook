# v1 API Reference — Migration Report

**Source file:** `v1_clean.json` (OpenAPI 3.1.0, extracted from `v1json (1).rtf`)  
**Output:** `api-reference/v1-*.yaml` + `reference/v1-*.mdx` + `documentation.json`  
**Date:** 2026-06-25

---

## Executive Summary

| Metric | Count |
|---|---|
| Total path keys in source JSON dict | **176** |
| — of which: empty stubs (no HTTP methods) | **9** |
| — of which: paths with actual operations | **167** |
| — of which: paths with 2+ methods | **18** |
| Total API operations in source | **189** |
| Operations converted to YAML | **189** |
| Operations missed | **0** |
| Extra YAML files (stale, not in source) | **2** |
| Total YAML files generated | **191** |
| Navigation groups in documentation.json | **15** |
| **Migration success rate** | **100.0%** |

> **Why 176 paths but 189 operations?**  
> 176 (total dict keys) − 9 (empty path stubs with no HTTP methods) = **167 active paths**.  
> 18 of those paths define 2–3 HTTP methods each, adding 22 extra operations.  
> 167 + 22 = **189 total operations**. The 9 empty stub paths produce no YAMLs and are lost from the source — they appear to be copy-paste artefacts from the original RTF.

### 9 Empty Path Stubs (No HTTP Methods — Not Converted)

| Path |
|---|
| `/x/neo/customer/expiredPoints` |
| `/api_gateway/rewards/core/v1/vendor/redemption/create` |
| `/promotion-management/promotions` |
| `/v1/promotion-management/promotions/` |
| `/v1/promotions/evaluate` |
| `/v3/webhooks/eventLog` |
| `/loyalty/api/v1/workflows/expJSON/{ProgramId}/{eventType}` |
| `/api_gateway/v1/promotions/{promotionId}/activate` |
| `/api_gateway/v1/promotions/{promotionId}/deactivate` |

These paths are `{}` empty in `v1_clean.json` — no GET, POST, or any method defined. No YAML can be generated for them.

---

## Group-by-Group Breakdown

| Group | Source APIs | Converted | Missed | Status |
|---|---|---|---|---|
| Audit & Workflows | 4 | 4 | 0 | ✅ Complete |
| Authentication | 23 | 23 | 0 | ✅ Complete |
| Badges | 28 | 28 | 0 | ✅ Complete |
| Connected Orgs & Ledger | 13 | 13 | 0 | ✅ Complete |
| Coupons | 9 | 9 | 0 | ✅ Complete |
| Customers | 4 | 4 | 0 | ✅ Complete |
| DAS | 1 | 1 | 0 | ✅ Complete |
| Leaderboards | 2 | 2 | 0 | ✅ Complete |
| Loyalty | 3 | 3 | 0 | ✅ Complete |
| Points & Loyalty | 8 | 8 | 0 | ✅ Complete |
| Promotions | 23 | 23 | 0 | ✅ Complete |
| Recommendations | 3 | 3 | 0 | ✅ Complete |
| Rewards | 51 | 51 | 0 | ✅ Complete |
| Search & Cortex | 11 | 11 | 0 | ✅ Complete |
| Transactions | 6 | 6 | 0 | ✅ Complete |
| **TOTAL** | **189** | **189** | **0** | **100.0% migrated** |

---

## Full API Operation List

All 189 source operations and their conversion status.

### Audit & Workflows

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/v2/audits` | Get audit logs of entities | `get-entity-audit-logs` | `v1-get-entity-audit-logs.yaml` | ✅ |
| `GET` | `/api_gateway/v2/request-workflow/requests` | Get details of all requests | `get-all-requests` | `v1-get-all-requests.yaml` | ✅ |
| `GET` | `/api_gateway/v2/request-workflow/requests/{requestId}` | Get details of a particular request | `get-request-info` | `v1-get-request-info.yaml` | ✅ |
| `PUT` | `/api_gateway/v2/request-workflow/{requestType}` | Approve or reject a request | `approve-or-reject-a-request` | `v1-approve-or-reject-a-request.yaml` | ✅ |
### Authentication

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `DELETE` | `/auth/v1/mfa/token/expire` | Delete token | `delete-token` | `v1-delete-token.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/otp/generate` | Generate MFA OTP | `generate-otp-mfa` | `v1-generate-otp-mfa.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/otp/validate` | Validate MFA OTP | `validate-mfa-otp` | `v1-validate-mfa-otp.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/password/change` | Change password | `change-mfa-password` | `v1-change-mfa-password.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/password/forget` | Forgot password | `mfa-forgot-password` | `v1-mfa-forgot-password.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/password/validate` | Validate password | `validate-mfa-password` | `v1-validate-mfa-password.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/token/generate` | Generate MFA token | `generate-mfa-token` | `v1-generate-mfa-token.yaml` | ✅ |
| `POST` | `/auth/v1/mfa/token/regenerate` | Regenerate token | `regenerate-token` | `v1-regenerate-token.yaml` | ✅ |
| `POST` | `/auth/v1/otp/generate` | Generate OTP | `generate-otp-1-1` | `v1-generate-otp-1-1.yaml` | ✅ |
| `POST` | `/auth/v1/otp/validate` | Validate OTP | `validate-otp-2` | `v1-validate-otp-2.yaml` | ✅ |
| `POST` | `/auth/v1/password/change` | Change Password | `change-password-1` | `v1-change-password-1.yaml` | ✅ |
| `POST` | `/auth/v1/password/forget` | Forget Password | `forget-password-1` | `v1-forget-password-1.yaml` | ✅ |
| `POST` | `/auth/v1/password/validate` | Validate Password | `validate-password-1` | `v1-validate-password-1.yaml` | ✅ |
| `POST` | `/auth/v1/token/generate` | Generate Authentication Token | `generate-authentication-token` | `v1-generate-authentication-token.yaml` | ✅ |
| `POST` | `/auth/v1/token/regenerate` | Regenerate Authentication Token | `regenerate-authentication-token-1` | `v1-regenerate-authentication-token-1.yaml` | ✅ |
| `POST` | `/auth/v1/user/updateIdentifierValue` | Change identifier on Auth engine | `change_identifier-on-auth-engine` | `v1-change_identifier-on-auth-engine.yaml` | ✅ |
| `POST` | `/auth/v1/web/otp/generate` | Generate OTP | `generate-otp-api` | `v1-generate-otp-api.yaml` | ✅ |
| `POST` | `/auth/v1/web/otp/validate` | Validate OTP | `validate-otp-api` | `v1-validate-otp-api.yaml` | ✅ |
| `POST` | `/auth/v1/web/password/change` | Change Password | `change-password` | `v1-change-password.yaml` | ✅ |
| `POST` | `/auth/v1/web/password/forget` | Forget Password | `forget-password` | `v1-forget-password.yaml` | ✅ |
| `POST` | `/auth/v1/web/password/validate` | Validate Password | `validate-password` | `v1-validate-password.yaml` | ✅ |
| `POST` | `/auth/v1/web/token/generate` | Generate Authentication Token | `generate-authentication-tokenapi` | `v1-generate-authentication-tokenapi.yaml` | ✅ |
| `POST` | `/auth/v1/web/token/regenerate` | Regenerate Authentication Token | `regenerate-authentication-token` | `v1-regenerate-authentication-token.yaml` | ✅ |
### Badges

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/v1/badges/badgeMeta` | Get all badges | `get-all-badges` | `v1-get-all-badges.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/badgeMeta/getFixedWindowDetails` | Get fixed window details | `get-fixed-window-details` | `v1-get-fixed-window-details.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/badgeMeta/{badgeId}` | Get badge by ID | `get-badge-by-id` | `v1-get-badge-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/customField` | Get all badge custom fields | `get-all-custom-fields` | `v1-get-all-custom-fields.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/customField/{customFieldId}` | Get badge custom field by ID | `get-custom-field-by-id` | `v1-get-custom-field-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/customer/{customerId}` | Get badges for customer | `get-badges-for-customer` | `v1-get-badges-for-customer.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/group` | Get all groups | `get-all-groups` | `v1-get-all-groups.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/group/{groupId}` | Get group by ID | `get-group-by-id` | `v1-get-group-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/management/{customerId}` | Get all customer badges | `get-all-customer-badges` | `v1-get-all-customer-badges.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/management/{customerId}/badge/{badgeI…` | Get individual badge details of a customer | `get-individual-badge-details-of-a-customer` | `v1-get-individual-badge-details-of-a-customer.yaml` | ✅ |
| `GET` | `/api_gateway/v1/badges/orgMeta` | Get badges org meta | `get-badges-org-meta` | `v1-get-badges-org-meta.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/badgeMeta` | Create badges | `create-badges-org` | `v1-create-badges-org.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/badgeMeta/customer/issueBulk` | Enrol customers for badges | `enrol-customers-for-badges` | `v1-enrol-customers-for-badges.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/badgeMeta/customer/revokeIssue` | Revoke enrolled badges | `revoke-enrolment-of-a-badge` | `v1-revoke-enrolment-of-a-badge.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/claim` | Claim badge | `claim-badge` | `v1-claim-badge.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/unclaim` | Unclaim badge | `unclaim-badge` | `v1-unclaim-badge.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/customField` | Create custom field for badges | `create-custom-field` | `v1-create-custom-field.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/customer/earn` | Issue badge (earn) | `issue-badge-to-the-customer` | `v1-issue-badge-to-the-customer.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/customer/earnBulk` | Issue badge to multiple customers | `issue-badge-to-multiple-customers` | `v1-issue-badge-to-multiple-customers.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/group` | Create badges group | `create-badges-group` | `v1-create-badges-group.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/import/customerBadges` | Import earned (issued) badges of customer | `import-earned-badges-of-customer` | `v1-import-earned-badges-of-customer.yaml` | ✅ |
| `POST` | `/api_gateway/v1/badges/orgMeta` | Create badges org meta | `create-badges-org-meta` | `v1-create-badges-org-meta.yaml` | ✅ |
| `POST` | `/badges/customer/revokeEarn` | Revoke issued badge | `revoke-issual-of-a-badge` | `v1-revoke-issual-of-a-badge.yaml` | ✅ |
| `PUT` | `/api_gateway/v1/badges/badgeMeta` | Update badges | `update-badges` | `v1-update-badges.yaml` | ✅ |
| `PUT` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/{activationStatus…` | Update activation status of badge | `update-the-activation-status-of-badge` | `v1-update-the-activation-status-of-badge.yaml` | ✅ |
| `PUT` | `/api_gateway/v1/badges/customField/{customFieldId}` | Update badge custom field | `update-custom-field-badge` | `v1-update-custom-field-badge.yaml` | ✅ |
| `PUT` | `/api_gateway/v1/badges/orgMeta` | Update badges org meta | `update-badges-org-meta` | `v1-update-badges-org-meta.yaml` | ✅ |
| `PUT` | `/api_gateway/v1/badges/{groupid}` | Update badges group | `update-badges-group` | `v1-update-badges-group.yaml` | ✅ |
### Connected Orgs & Ledger

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/intouch-api-v3/v3.1/users/{userId}/targetGroups` | Get Associated Target Groups of a User | `connectedorgs-get-associated-target-groups-of-a-user` | `v1-connectedorgs-get-associated-target-groups-of-a-user.yaml` | ✅ |
| `GET` | `/das/getACLedgerEntriesWithEventId` | Get Event Log IDs with Credit or Debit for Alternate Cu… | `get-event-log-ids-with-credit-or-debit-for-alternate-currency` | `v1-get-event-log-ids-with-credit-or-debit-for-alternate-currency.yaml` | ✅ |
| `GET` | `/das/getLedgerEntriesWithEventId` | Get Event Log IDs with Credit or Debit for Points | `get-event-log-ids-for-credit-debit` | `v1-get-event-log-ids-for-credit-debit.yaml` | ✅ |
| `GET` | `/das/getManualPointsAdjustmentExplodeLedger` | Get Manual Points Adjustment Details | `get-manual-points-adjustment-details` | `v1-get-manual-points-adjustment-details.yaml` | ✅ |
| `GET` | `/das/getPointsRedemptionExplodeLedger` | Get Point Redemption Details for Redemption Events | `get-point-redemption-details-for-redemption-events` | `v1-get-point-redemption-details-for-redemption-events.yaml` | ✅ |
| `GET` | `/das/getTargetCompletedExplodeLedger` | Get Target Completion Details | `get-target-completion-details` | `v1-get-target-completion-details.yaml` | ✅ |
| `GET` | `/das/getTransactionAddExplodeLedger` | Get Custom Field Values for TransactionAdd event | `get-custom-field-for-transaction-add-event` | `v1-get-custom-field-for-transaction-add-event.yaml` | ✅ |
| `GET` | `/v2.1/customers/lookup/promotionData` | Get Loyalty Promotion List of a Customer (Connected Org… | `connectedorgs-get-promotion-list-for-a-customer` | `v1-connectedorgs-get-promotion-list-for-a-customer.yaml` | ✅ |
| `GET` | `/v2.1/pointsLedger/getCustomerLedgerInfo` | Get Points Ledger Information in Connected Orgs | `connectedorgs-get-customer-ledger-info` | `v1-connectedorgs-get-customer-ledger-info.yaml` | ✅ |
| `GET` | `/v2.1/pointsLedger/getLedgerExplodeInfo` | Get Points Ledger Explode Info in Connected Orgs | `connectedorgs-get-customer-ledger-explode-info` | `v1-connectedorgs-get-customer-ledger-explode-info.yaml` | ✅ |
| `GET` | `/x/neo/customer/ledgerDetails` | Get Ledger Information for Event Log IDs | `get-ledger-information-for-event-log-ids` | `v1-get-ledger-information-for-event-log-ids.yaml` | ✅ |
| `POST` | `/api_gateway/intouch-api-v3/v3.1/targetGroups/{targetGroupId…` | Enroll/Re-Enroll a Customer to a Milestone or Streak | `connectedorgs-enroll-customer-milestone-or-streak` | `v1-connectedorgs-enroll-customer-milestone-or-streak.yaml` | ✅ |
| `POST` | `/api_gateway/intouch-api-v3/v3.1/targetGroups/{targetGroupId…` | Unenroll a Customer to from Milestone or Streak | `connectedorgs-unenroll-customer-milestone-or-streak` | `v1-connectedorgs-unenroll-customer-milestone-or-streak.yaml` | ✅ |
### Coupons

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/coupon/api/v1/upload/getUploadRedeemedCouponStatus/{couponS…` | Get Status of Redeemed Coupons | `get-status-of-redeemed-coupons-copy-1` | `v1-get-status-of-redeemed-coupons-copy-1.yaml` | ✅ |
| `GET` | `/coupon/api/v1/upload/getUploadStatus/{couponSeriesId}` | Get Uploaded Coupons' Status | `get-uploaded-coupons-status-copy` | `v1-get-uploaded-coupons-status-copy.yaml` | ✅ |
| `GET` | `/das/getCouponRedemptionCustomFieldsData` | Get Custom Fields Associated with Coupon Redemption | `get-custom-fields-associated-with-coupon-redemption` | `v1-get-custom-fields-associated-with-coupon-redemption.yaml` | ✅ |
| `GET` | `/upload/getUploadRedeemedCouponStatus/{couponSeriesId}` | Get Status of Redeemed Coupons | `get-status-of-redeemed-coupons-copy` | `v1-get-status-of-redeemed-coupons-copy.yaml` | ✅ |
| `GET` | `/x/neo/couponRedemption/customFields` | Get Custom Fields Associated with Coupon Redemption | `get-custom-fields-associated-with-coupon-redemption-global` | `v1-get-custom-fields-associated-with-coupon-redemption-global.yaml` | ✅ |
| `POST` | `/coupon/api/v1/upload/file/{couponSeriedId}` | Upload Coupons (Batch) | `upload-coupons-batch` | `v1-upload-coupons-batch.yaml` | ✅ |
| `POST` | `/upload/file/{couponSeriedId}` | Upload Coupons (Batch) | `upload-coupons-batch-copy` | `v1-upload-coupons-batch-copy.yaml` | ✅ |
| `POST` | `/upload/redeemFile` | Upload Redeemed Coupons | `upload-redeemed-coupons-copy` | `v1-upload-redeemed-coupons-copy.yaml` | ✅ |
| `POST` | `/upload/redeemFile/{couponSeriesId}` | Upload Redeemed Coupons | `upload-redeemed-coupons` | `v1-upload-redeemed-coupons.yaml` | ✅ |
### Customers

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/rewards/core/v1.1/user/rewards?userId={customer…` | Get all available rewards for user in connected orgs | `get-all-available-rewards-for-user-in-a-connected-org` | `v1-get-all-available-rewards-for-user-in-a-connected-org.yaml` | ✅ |
| `GET` | `/api_gateway/v1/promotions/customer/109943742?includeRedempt…` | Get Cart Promotions for a Customer | `get-promotions-for-a-customer` | `v1-get-promotions-for-a-customer.yaml` | ✅ |
| `GET` | `/v1/promotions/customer/{customerId}/evaluations/pending_car…` | Get Lock unlock -Pending carts (Cart Promotion) | `get-lock-unlock-pending-carts` | `v1-get-lock-unlock-pending-carts.yaml` | ✅ |
| `PUT` | `/v1/promotions/customer/{customerId}/evaluation/{evaluationI…` | Cancel Cart Evaluation - Cart Promotion | `post-cancel-cart-evaluation` | `v1-post-cancel-cart-evaluation.yaml` | ✅ |
### DAS

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/das/getPAIdsForProvidedDateRange` | Get Allocated Points Details with Expiry in Specified D… | `retrieve-pa-id-for-specified-data-range` | `v1-retrieve-pa-id-for-specified-data-range.yaml` | ✅ |
### Leaderboards

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/{…` | Get top ranked users | `get-top-ranked-users` | `v1-get-top-ranked-users.yaml` | ✅ |
| `GET` | `/api_gateway/intouch-api-v3/v3.1/leaderboards/user/{userID}` | Get user rank across target groups | `get-user-ranks-across-target-groups` | `v1-get-user-ranks-across-target-groups.yaml` | ✅ |
### Loyalty

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/loyalty/v1/programs/{programId}/cappings` | Get Reward Currency Limits | `get-reward-currency-limits` | `v1-get-reward-currency-limits.yaml` | ✅ |
| `POST` | `/api_gateway/loyalty/v1/programs/{programId}/cappings` | Create Reward Currency Limits | `create-reward-currency-limits` | `v1-create-reward-currency-limits.yaml` | ✅ |
| `POST` | `/loyalty/api/v1/workflows/expJSON/{programId}/{eventType}` | Generate Expression JSON | `post_loyalty-api-v1-workflows-expjson-programid-eventtype` | `v1-post_loyalty-api-v1-workflows-expjson-programid-eventtype.yaml` | ✅ |
### Points & Loyalty

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/rewards/core/v1/brand/constraints` | Points - Get points constraints | `get-points-constraints` | `v1-get-points-constraints.yaml` | ✅ |
| `GET` | `/das/getExpiredPointsByCustomerIdAndYear` | Get Customer’s Earned and Expired Points by Year | `get-expired-points-for-a-customer` | `v1-get-expired-points-for-a-customer.yaml` | ✅ |
| `GET` | `/das/getPaDetailsByEventId` | Get Point Allocation Details by Event ID | `get-allocated-points-details-with-event-id` | `v1-get-allocated-points-details-with-event-id.yaml` | ✅ |
| `GET` | `/x/neo/pointsAllocation/dateRange` | Get Allocated Points Details with Expiry in Specified D… | `get-allocated-points-details-with-expiry-in-specified-date-range-global` | `v1-get-allocated-points-details-with-expiry-in-specified-date-range-global.yaml` | ✅ |
| `GET` | `/x/neo/pointsAllocation/event` | Get Point Allocation Details by Event ID | `get-point-allocation-event-id-global` | `v1-get-point-allocation-event-id-global.yaml` | ✅ |
| `GET` | `/x/neo/pointsAllocationId/transactionId` | Retrieve PointsAward Records Associated with a Specific… | `retrieve-pointsaward-records-associated-with-a-specific-transaction-id` | `v1-retrieve-pointsaward-records-associated-with-a-specific-transaction-id.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/brand/constraints` | Points Restrictions - Create points restriction | `create-points-restriction` | `v1-create-points-restriction.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/brand/constraints` | Points - Update points restriction | `update-points-restriction` | `v1-update-points-restriction.yaml` | ✅ |
### Promotions

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/loyalty/v1/programs/promotions/list` | Get Details of all Loyalty Promotions | `get-promotion-details` | `v1-get-promotion-details.yaml` | ✅ |
| `GET` | `/api_gateway/loyalty/v1/programs/{programId}/promotions/{pro…` | Get Loyalty Promotion by ID | `get-promotion-by-id` | `v1-get-promotion-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/loyalty/v1/programs/{programId}/promotionsV2?li…` | Get Loyalty Promotion List for a Program | `get-loyalty-promotion-list-for-a-program` | `v1-get-loyalty-promotion-list-for-a-program.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/promotion/brand/{brand Id}` | Get list of Catalog promotions | `get-list-of-catalog-promotions` | `v1-get-list-of-catalog-promotions.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/promotion/{promotion Id}/brand/…` | Get catalog promotion details | `get-catalog-promotion-details` | `v1-get-catalog-promotion-details.yaml` | ✅ |
| `GET` | `/api_gateway/v1/promotions/code` | Get Cart Promotions code API | `get-promotions-code-api` | `v1-get-promotions-code-api.yaml` | ✅ |
| `GET` | `/api_gateway/v1/promotions/config` | Get Cart Promotions Config API | `get-promotions-config-api` | `v1-get-promotions-config-api.yaml` | ✅ |
| `GET` | `/api_gateway/v1/promotions/redemptions` | Get Cart Promotion Redemptions | `get-cart-promotion-redemptions` | `v1-get-cart-promotion-redemptions.yaml` | ✅ |
| `GET` | `/api_gateway/v1/promotions/till/{tillId}` | Get Cart Promotions for a particular till | `get-promotions-for-a-particular-till` | `v1-get-promotions-for-a-particular-till.yaml` | ✅ |
| `POST` | `/api_gateway/loyalty/v1/programs/{programId}/createPromotion…` | Create Loyalty Promotion for UCC | `create-promotion-for-ucc` | `v1-create-promotion-for-ucc.yaml` | ✅ |
| `POST` | `/api_gateway/loyalty/v1/programs/{programId}/promotions/add/…` | Add Promotion : don't make it public | `add-promotion` | `v1-add-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/promotion/create` | Create catalog promotion | `post-create-catalog-promotion` | `v1-post-create-catalog-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/earn/bulk` | Post Earn Cart Promotions in Bulk | `post-earn-promotions-in-bulk` | `v1-post-earn-promotions-in-bulk.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/evaluate` | Evaluate Promotion | `evaluate-promotion` | `v1-evaluate-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/redemptions` | Add Promotion Redemption | `add-promotion-redemption` | `v1-add-promotion-redemption.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/redemptions#` | Redeem Cart Promotion | `redeem-cart-promotion` | `v1-redeem-cart-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/revokeEarn` | Post Revoke Earned Cart Promotion | `post-revoke-earned-promotion` | `v1-post-revoke-earned-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/{code}/link` | Post Cart Promotions Code link API | `post-promotions-code-link-api` | `v1-post-promotions-code-link-api.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/{promotionId}/earn` | Earn Cart Promotion | `earn-promotion` | `v1-earn-promotion.yaml` | ✅ |
| `POST` | `/api_gateway/v1/promotions/{promotionId}/issueBulk` | Issue Cart Promotion | `issue-cart-promotion` | `v1-issue-cart-promotion.yaml` | ✅ |
| `POST` | `/v1/management/promotions/settings/strategy` | Set Cart Promotion Settings | `set-promotion-settings` | `v1-set-promotion-settings.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/promotion/{promotion Id}/status…` | Disable Catalog promotion | `put-disable-catalog-promotion` | `v1-put-disable-catalog-promotion.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/promotion/{promotionId}/brand/{…` | Update catalog promotion | `put-update-catalog-promotion` | `v1-put-update-catalog-promotion.yaml` | ✅ |
### Recommendations

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/v1/recommendations/cart` | Get Cart Recommendations | `get-cart-recommendations` | `v1-get-cart-recommendations.yaml` | ✅ |
| `GET` | `/api_gateway/v1/recommendations/item` | Get Item Recommendations | `get-item-recommendations` | `v1-get-item-recommendations.yaml` | ✅ |
| `GET` | `/api_gateway/v1/recommendations/user` | Get User Recommendations | `get-user-recommendations` | `v1-get-user-recommendations.yaml` | ✅ |
### Rewards

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/rewards/core/v1/brand/customfield` | Get all custom fields | `get-custom-field` | `v1-get-custom-field.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/brand/richContentMeta` | Get all Rich Text Content Metadata for specific brand | `get-all-rich-text-content-metadata-for-brand` | `v1-get-all-rich-text-content-metadata-for-brand.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/brand/{id}/getConfig` | Get Organisation Level Configuration | `retrieve-organisation-level-configuration-for-rewards-catalog` | `v1-retrieve-organisation-level-configuration-for-rewards-catalog.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/fulfillmentStatus` | Get fulfillment status | `get-fulfillment-status` | `v1-get-fulfillment-status.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/group` | Groups - Get all rewards group | `get-group-rewards` | `v1-get-group-rewards.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/group/{id}` | Groups - Get rewards group by ID | `get-rewards-group-by-id` | `v1-get-rewards-group-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/metadata/categories/brand/{bran…` | Get Reward Category | `get-reward-category` | `v1-get-reward-category.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward/brand/{Brand ID}/availab…` | Get available brand rewards | `get-available-brand-rewards` | `v1-get-available-brand-rewards.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward/brand/{brand Id}` | Get brand rewards | `get-brands-rewards` | `v1-get-brands-rewards.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward/expiryReminder` | Get Reward Expiry Reminder | `get-reward-expiry-reminder` | `v1-get-reward-expiry-reminder.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward/list/brand/{BrandID}?own…` | Get all brand rewards using Brand ID | `get-reward-list` | `v1-get-reward-list.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward/{rewardId}/brand/{brandI…` | Get reward details by ID | `get-reward-details-by-id` | `v1-get-reward-details-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/user-merge` | Get User Reward Merge Details | `get-user-rewards-merge-details` | `v1-get-user-rewards-merge-details.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/user/reward/{reward Id}/brand/{…` | Get available reward details for user by id | `get-user-brand-specific-rewards` | `v1-get-user-brand-specific-rewards.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/user/reward/{rewardId}/vouchers…` | Get purchased reward details by id and user | `get-user-specific-reward-by-id` | `v1-get-user-specific-reward-by-id.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/user/userReward/brand/{BrandNam…` | Get Purchased Rewards for User (New API) | `get-rewards-for-user-new-api` | `v1-get-rewards-for-user-new-api.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/user/vouchers/brand/{brand name…` | Get purchased rewards for user (Old API) | `get-user-reward` | `v1-get-user-reward.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/vendor/brand/{brandId}` | Vendor List for Specific Brand | `get-vendor-list-for-specific-brand` | `v1-get-vendor-list-for-specific-brand.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/vendor/redemptions` | Get all vendor redemptions | `get-vendor-redemptions-details` | `v1-get-vendor-redemptions-details.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/vendor/{VendorId}/details` | Get Vendor Details | `get-vendor-explode-info` | `v1-get-vendor-explode-info.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/vendor/{vendorId}/redemption/br…` | Vendor Redemption Details by Brand ID and Vendor ID | `get-vendor-redemption-details-by-brand-id-and-vendor-id` | `v1-get-vendor-redemption-details-by-brand-id-and-vendor-id.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/vendor/{vendorid}/redemption/{r…` | Vendor Redemption Details by Redemption & Vendor ID | `get-list-of-vendor-redemption-details-by-vendor-id` | `v1-get-list-of-vendor-redemption-details-by-vendor-id.yaml` | ✅ |
| `GET` | `/mobile/v2/api/marvel/r/vouchers/get` | Get User Rewards | `get-user-rewards` | `v1-get-user-rewards.yaml` | ✅ |
| `GET` | `/mobile/v2/api/marvel/reward/details` | Get Brand Rewards | `get-brand-rewards` | `v1-get-brand-rewards.yaml` | ✅ |
| `GET` | `/v1.1/user/rewards/{rewardId}` | Get reward details by ID in connected orgs | `get-reward-details-by-id-in-a-connected-org` | `v1-get-reward-details-by-id-in-a-connected-org.yaml` | ✅ |
| `POST` | `/api_gateway/file-service/rewards/{file name with extension}` | Upload images to file service | `post-images-to-file-service` | `v1-post-images-to-file-service.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/brand/config` | Organisation Level Configuration for Rewards Catalog | `organisation-level-configuration-for-rewards-catalog` | `v1-organisation-level-configuration-for-rewards-catalog.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/brand/customfield` | Create custom field for reward | `post-create-custom-field` | `v1-post-create-custom-field.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/brand/getAll` | Retrieve Brand ID | `retrieve-brand-id` | `v1-retrieve-brand-id.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/brand/richContentMeta` | Create Rich Text Content Metadata for Rewards | `create-rich-content-meta` | `v1-create-rich-content-meta.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/fulfillmentStatus` | Create fulfillment status | `create-fulfillment-status` | `v1-create-fulfillment-status.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/group/create` | Groups - Create reward group | `create-group-reward` | `v1-create-group-reward.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/metadata/category/create` | Create Reward Category | `create-reward-category` | `v1-create-reward-category.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/reward/claim` | Claim Reward | `claim-reward` | `v1-claim-reward.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/reward/create` | Create reward | `post-create-reward` | `v1-post-create-reward.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/reward/expiryReminder` | Create Reward Expiry Reminder | `create-reward-expiry-reminder` | `v1-create-reward-expiry-reminder.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/user-merge` | Merge User Rewards | `merge-user-rewards` | `v1-merge-user-rewards.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/user/reward/{reward Id}/issue?u…` | Issue single reward | `post-issue-user-reward` | `v1-post-issue-user-reward.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/user/rewards/issue?username={st…` | Issue bulk reward | `issue-bulk-reward` | `v1-issue-bulk-reward.yaml` | ✅ |
| `POST` | `/api_gateway/rewards/core/v1/vendor/create` | Create a Vendor | `createvendor` | `v1-createvendor.yaml` | ✅ |
| `POST` | `/mobile/v2/api/marvel/reward/issue` | Issue User Reward | `issue-user-reward` | `v1-issue-user-reward.yaml` | ✅ |
| `POST` | `/v1.1/user/rewards/issue/?username={till}&skip_validation=tr…` | Issue Reward in connected orgs | `issue-bulk-reward-connected-org` | `v1-issue-bulk-reward-connected-org.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/brand/customfield/{id}` | Update reward custom field | `update-custom-field` | `v1-update-custom-field.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/brand/richContentMeta/{Richcont…` | Update Rich Text Content Metadata for Rewards | `update-rich-content` | `v1-update-rich-content.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/fulfillmentStatus` | Update fulfillment status | `update-fulfillment-status` | `v1-update-fulfillment-status.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/group/{id}` | Groups - Update rewards group | `update-group-reward` | `v1-update-group-reward.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/metadata/category/{categoryId}/…` | Enable or Disable Reward Categories | `enable-or-disable-reward-categories` | `v1-enable-or-disable-reward-categories.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/reward/expiryReminder/{rewardEx…` | Update Reward Expiry Reminder | `update-reward-expiry-reminder` | `v1-update-reward-expiry-reminder.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/reward/{rewardId}/brand/{brandI…` | Update Reward | `put-update-reward` | `v1-put-update-reward.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/vendor/redemption/{redemptionId…` | Update Vendor Redemption | `update-vendor-redemption` | `v1-update-vendor-redemption.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/vendor/{vendorId}/status/{actio…` | Enable or Disable a Vendor | `enable-disable-vendor` | `v1-enable-disable-vendor.yaml` | ✅ |
### Search & Cortex

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `DELETE` | `/api_gateway/cortex/v1/criteria/{id}` | Deactivate search criteria | `deactivate-search-criteria` | `v1-deactivate-search-criteria.yaml` | ✅ |
| `GET` | `/api_gateway/cortex/v1/criteria/{id}` | Retrieve search criteria details | `get-meta` | `v1-get-meta.yaml` | ✅ |
| `GET` | `/api_gateway/cortex/v1/dataFields` | Get Data Field Detail | `get-data-field-detail-api` | `v1-get-data-field-detail-api.yaml` | ✅ |
| `GET` | `/api_gateway/cortex/v1/neo-config` | Retrieve Custom Event Config Details of Org | `retrieve-custom-event-config-details-of-org` | `v1-retrieve-custom-event-config-details-of-org.yaml` | ✅ |
| `GET` | `/api_gateway/cortex/v1/neo-config/entity/{entityType}` | Retrieve Custom Event Config Details for an Entity | `retrieve-custom-event-config-details-for-entity` | `v1-retrieve-custom-event-config-details-for-entity.yaml` | ✅ |
| `POST` | `/api_gateway/cortex/v1/bulk/trigger/{id}` | Enable search index of older data | `enable-bulk-trigger` | `v1-enable-bulk-trigger.yaml` | ✅ |
| `POST` | `/api_gateway/cortex/v1/criteria` | Create search criteria | `create-meta-search` | `v1-create-meta-search.yaml` | ✅ |
| `POST` | `/api_gateway/cortex/v1/dataFields` | Create Data Field | `create-data-field` | `v1-create-data-field.yaml` | ✅ |
| `POST` | `/api_gateway/cortex/v1/neo-config` | Enable or Update Custom Event Tranformation | `enable-custom-event-for-cortex-search` | `v1-enable-custom-event-for-cortex-search.yaml` | ✅ |
| `POST` | `/api_gateway/cortex/v1/search` | Perform Search (Cortex API) | `search-api-cortex-api` | `v1-search-api-cortex-api.yaml` | ✅ |
| `PUT` | `/api_gateway/cortex/v1/dataFields/{id}` | Update Data Field | `put-data-field-api` | `v1-put-data-field-api.yaml` | ✅ |
### Transactions

| Method | Path | Summary | operationId | YAML File | Status |
|---|---|---|---|---|---|
| `GET` | `/api_gateway/rewards/core/v1.1/reward-transactions/{rewardTr…` | Get Transaction Details by Reward Transaction ID in Con… | `get-transaction-details-by-reward-transaction-id-in-connected-orgs` | `v1-get-transaction-details-by-reward-transaction-id-in-connected-orgs.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1.1/reward-transactions?customerI…` | Get all reward transactions for a user in connected org… | `get-all-reward-transactions-for-a-user-in-connected-orgs` | `v1-get-all-reward-transactions-for-a-user-in-connected-orgs.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/management/customer/{customerId…` | Get customer reward transactions | `get-customer-reward-transactions` | `v1-get-customer-reward-transactions.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/management/customer/{customerId…` | Get Transaction Details by Customer ID and Reward Trans… | `get-reward-issue-transaction-details` | `v1-get-reward-issue-transaction-details.yaml` | ✅ |
| `GET` | `/api_gateway/rewards/core/v1/reward-transactions/{rewardTran…` | Get Reward Transaction Details using Reward Transaction… | `get-transaction-details-by-reward-transaction-id` | `v1-get-transaction-details-by-reward-transaction-id.yaml` | ✅ |
| `PUT` | `/api_gateway/rewards/core/v1/management/transactions?skip_va…` | Update fulfillment status and transaction custom fields… | `update-fulfilment-status-and-txn-custom-fields` | `v1-update-fulfilment-status-and-txn-custom-fields.yaml` | ✅ |

---

## Missed Operations

**None.** All 189 operations from `v1_clean.json` were successfully converted.

---

## Extra YAML Files (Stale — Not in Source)

These YAML files exist in `api-reference/` but have no matching operation in `v1_clean.json`. They are likely artefacts from a previous run where operationIds changed.

| File | Method | Path | operationId | Summary |
|---|---|---|---|---|
| `v1-get-status-of-redeemed-coupons.yaml` | `GET` | `/upload/getUploadRedeemedCouponStatus/{couponSeriesId}` | `get-status-of-redeemed-coupons` | Get Status of Redeemed Coupons |
| `v1-get-uploaded-coupons-status-1.yaml` | `GET` | `/coupon/api/v1/upload/getUploadStatus/{couponSeriesId}` | `get-uploaded-coupons-status-1` | Get Uploaded Coupons' Status |

> These 2 files inflate the Coupons nav group to 11 entries vs 9 in source. Recommend deleting them.

---

## Source vs Output File Reference

| File | Role | Paths | Operations |
|---|---|---|---|
| `v1json (1).rtf` | Original RTF source | — | — |
| `v1_clean.json` | Extracted OpenAPI 3.1.0 spec | 176 | 189 |
| `output.json` | Alternate extraction (text + paragraphs wrapper) | 179 | 192 |
| `dsp-fixed.json` | Manually path-normalised version | 174 | ~189 |
| `api-reference/v1-*.yaml` | Final per-endpoint YAML output | — | 191 |
| `reference/v1-*.mdx` | MDX stub pages | — | 191 |

---

## Known Issues

| # | Severity | Issue | Affected Files |
|---|---|---|---|
| 1 | Medium | `model` parameter declared `in: path` but path has no `{model}` template — should be `in: query` | 3 Recommendations YAMLs |
| 2 | Medium | 420 response examples stored as escaped JSON strings instead of parsed YAML objects | ~90% of all YAMLs |
| 3 | Low | Raw `<br>` HTML tag in parameter description (from source) | `v1-get-user-recommendations.yaml` |
| 4 | Low | 2 stale YAML files from previous runs not in current source | `v1-get-status-of-redeemed-coupons.yaml`, `v1-get-uploaded-coupons-status-1.yaml` |
