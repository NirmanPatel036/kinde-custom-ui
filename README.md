# Euler Pro — Kinde Custom UI

Custom authentication pages for the Euler Pro exam proctoring platform, styled to match the brand design.

---

## 📁 Folder Structure

```
kinde-custom-ui/
├── kinde.json                               ← Kinde runtime config
├── package.json
├── preview/                                 ← Static HTML previews (open in browser)
│   ├── login.html
│   ├── register.html
│   ├── otp.html
│   ├── styles.css
│   └── images/
│       ├── auth_bg.png
│       └── logo-cropped.svg
└── kindeSrc/
    └── environment/
        └── pages/
            ├── styles.css                   ← Global auth styles
            └── (kinde)/
                ├── (default)/page.tsx       ← Fallback page
                ├── (login)/page.tsx         ← Email sign-in
                ├── (register)/page.tsx      ← Sign-up
                ├── (verify_password)/page.tsx
                ├── (set_password)/page.tsx
                ├── (sign_in_use_email_otp)/page.tsx
                ├── (sign_up_use_email_otp)/page.tsx
                └── (reset_password)/page.tsx
```

---

## 👁️ How to Preview Locally

### Option 1 — Open directly in browser (no server needed)

> **Note**: The background image and logo will NOT load with file:// protocol due to browser security.
> Use Option 2 for the full visual experience.

Just double-click any `.html` file inside `preview/`. It will open in your default browser.

### Option 2 — Serve locally with one command (recommended)

This preserves the background image and logo correctly.

```bash
# From the kinde-custom-ui directory:
cd kinde-custom-ui

# Using npx (no install required)
npx serve preview -l 5000
```

Then open in your browser:
- **Login**: [http://localhost:5000/login.html](http://localhost:5000/login.html)
- **Register**: [http://localhost:5000/register.html](http://localhost:5000/register.html)
- **OTP**: [http://localhost:5000/otp.html](http://localhost:5000/otp.html)

---

## 🚀 Deploying to Kinde

### Step 1: Create a GitHub repo

Push this entire `kinde-custom-ui` folder as a new GitHub repository.

### Step 2: Connect in Kinde Dashboard

1. Go to **Kinde Dashboard → Design → Custom UI**
2. Click **Connect a Repository**
3. Select your new GitHub repo
4. Kinde will read `kinde.json` and expect files at `kindeSrc/environment/pages/(kinde)/...`

### Step 3: Copy your styles

In `kindeSrc/environment/pages/(kinde)/(default)/page.tsx` (and all pages), the CSS is linked as `/styles.css`. Kinde serves this from a hosted asset URL — you will need to:

1. Upload `styles.css` to Kinde's **CDN / Environment → Assets** section, OR
2. Inline all CSS into the `<style>` tag in the page's `<head>` instead

### Step 4: Upload images

Images (`auth_bg.png`, `logo-cropped.svg`) need to be hosted and accessible via a public URL. Options:
- Upload to Kinde's asset CDN
- Use your own CDN (Cloudflare, S3, etc.)
- Reference them as fully qualified URLs: `https://yourdomain.com/images/auth_bg.png`

Update the `src` attributes in each `page.tsx` accordingly.

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--brand-pink` | `#f51582` | CTA hover, links, accent |
| `--brand-maroon` | `#330c26` | Primary button, body text |
| `--brand-purple` | `#9b6dff` | Secondary accent |
| `--card-bg` | `rgba(255, 255, 255, 0.96)` | Card background |
| Font | DM Sans (Google Fonts) | All text |

---

## 📄 Pages Included

| Kinde Route | File | Description |
|---|---|---|
| `(default)` | `(default)/page.tsx` | Fallback for all unmapped routes |
| `(login)` | `(login)/page.tsx` | Email + social sign-in |
| `(register)` | `(register)/page.tsx` | Name + email + social sign-up |
| `(verify_password)` | `(verify_password)/page.tsx` | Password entry during sign-in |
| `(set_password)` | `(set_password)/page.tsx` | Set new password during sign-up |
| `(sign_in_use_email_otp)` | `(sign_in_use_email_otp)/page.tsx` | 6-digit email OTP (sign-in) |
| `(sign_up_use_email_otp)` | `(sign_up_use_email_otp)/page.tsx` | 6-digit email OTP (sign-up) |
| `(reset_password)` | `(reset_password)/page.tsx` | Password reset email request |
