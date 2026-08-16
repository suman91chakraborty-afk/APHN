# APHN Website Go-Live Checklist (Placeholders Index)

This document contains a structured directory of all mock variables, mock assets, and stubbed integrations within the codebase that must be verified or replaced with official resources before public launching.

---

## 1. Brand Assets
- [ ] **Official Logo**: Replace the temporary vectorized `public/logo.svg` with the official APHN logo. Make sure to generate a 256x256 pixel `public/logo.png` version for standard mobile browsers and browser shortcut icons (`favicon.ico`).
- [ ] **Color Theme Hex Verification**: Confirm the proposed Deep Blue (`#0A2647`) and Orange (`#E85D1F`) tones. Any tweaks can be applied instantly in a single place inside the design variables at `src/styles/globals.css` and `tailwind.config.ts`.

---

## 2. Organization Data & Details
- [ ] **Governing Body Contacts**:
  - Currently, direct-dial mobile lines for all state office bearers in `src/data/leadership.json` are rerouted to `+91 (033) APHN-OFFICE` for privacy.
  - Prior to publishing direct numbers, obtain written consent from each executive member or maintain the general office routing desk.
- [ ] **Official Member Directory**:
  - Replace the 10 example hospitals in `src/data/members.json` (marked with `isExample: true`) with the official Excel database entries of registered clinical establishments in West Bengal.
- [ ] **Resource Vault Documents**:
  - Replace placeholder PDF alerts on `src/app/resources/page.tsx` with actual PDF downloads for:
    - Registered APHN Bylaws
    - Official Patient Dignity Charter
    - Printable enrollment forms
    - West Bengal state health department circulars.

---

## 3. Dynamic News & Events
- [ ] **News Feed Database**:
  - Replace mock articles in `src/data/news.json` with official press announcements.
- [ ] **Events Calendar**:
  - Verify meeting parameters in `src/data/events.json` for the upcoming Annual General Meeting (AGM) 2026.

---

## 4. API & Payment Integrations (Phase 2 Connects)
- [ ] **Contact Form / Grievance Submissions**:
  - Currently, submission clicks show responsive mock success popups.
  - **Action**: Setup a database or email handler (e.g. Formspree, Resend, NodeMailer) and update action links in:
    - `src/app/contact/page.tsx`
    - `src/app/grievance/page.tsx`
- [ ] **Online Membership Forms**:
  - Currently, form details are verified client-side and simulated on step 4.
  - **Action**: Hook up submission parameters at `src/app/membership/apply/page.tsx`.
- [ ] **Merchant Account Gateway**:
  - **Action**: Create a Razorpay or Stripe account, configure API keys in `.env`, and implement active session tokens inside the checkout forms:
    - Member Registration: `src/app/membership/apply/page.tsx`
    - Portal Renewal: `src/app/portal/dashboard/page.tsx`

---

## 5. Official Legal Compliance
- [ ] **Privacy Policy / Terms of Service**:
  - Review and publish actual legal text for `/privacy-policy`, `/terms-and-conditions`, and `/disclaimer` to comply with consumer protection standards.
