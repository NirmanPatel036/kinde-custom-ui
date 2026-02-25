"use server";

export const getStyles = (): string => `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

  /* ── Kinde widget CSS variable overrides ── */
  :root {
    --kinde-base-font-family: 'DM Sans', sans-serif;
    --kinde-base-color: #1a1a2e;
    --kinde-button-primary-background-color: #330c26;
    --kinde-button-primary-color: #fff;
    --kinde-button-border-radius: 0.75rem;
    --kinde-button-secondary-background-color: transparent;
    --kinde-button-secondary-border-width: 1.5px;
    --kinde-button-secondary-border-color: #e5e5e5;
    --kinde-input-border-radius: 0.75rem;
    --kinde-form-spacing-content: 1rem;
  }

  /* ── Brand tokens ── */
  :root {
    --brand-pink:   #f51582;
    --brand-maroon: #330c26;
    --brand-dark:   #0d0b1e;
    --card-bg:      rgba(255, 255, 255, 0.97);
    --muted:        #888;
    --text:         #1a1a2e;
    --border:       #e5e5e5;
    --input-bg:     #f4f4f6;
    --input-border: #d8d8e0;
    --radius-card:  1.75rem;
    --radius-input: 0.75rem;
    --radius-btn:   0.75rem;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    height: 100%;
    font-family: 'DM Sans', sans-serif;
    background: var(--brand-maroon);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Auth shell ── */
  .auth-shell {
    display: grid;
    grid-template-columns: 1fr 440px 1fr;
    min-height: 100dvh;
    position: relative;
    overflow: hidden;
  }

  .auth-shell__bg {
    position: fixed;
    inset: 0;
    background-image: url('https://eejyderifolfefbsrfei.supabase.co/storage/v1/object/public/assets/auth_bg.png');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  /* ── Card ── */
  .auth-card {
    position: relative;
    z-index: 10;
    grid-column: 2;
    align-self: center;
    margin: 2rem 0;
    background: var(--card-bg);
    border-radius: var(--radius-card);
    padding: 2.75rem 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    backdrop-filter: blur(20px);
    box-shadow: 0 32px 80px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.08);
  }

  /* ── Logo ── */
  .auth-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .auth-logo img { height: 36px; width: auto; object-fit: contain; }

  /* ── Headings ── */
  .auth-heading {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 0.375rem;
    line-height: 1.2;
  }
  .auth-subheading {
    font-size: 0.9rem;
    color: var(--muted);
    margin-bottom: 1.75rem;
    line-height: 1.5;
  }

  /* ── Label / inputs ── */
  .auth-label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.4rem;
    letter-spacing: 0.01em;
  }
  .auth-input {
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    background: var(--input-bg);
    border: 1.5px solid var(--input-border);
    border-radius: var(--radius-input);
    font-family: inherit;
    font-size: 0.9375rem;
    color: var(--text);
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    margin-bottom: 1rem;
  }
  .auth-input:focus {
    border-color: var(--brand-pink);
    box-shadow: 0 0 0 3px rgba(245,21,130,0.12);
    background: #fff;
  }
  .auth-input::placeholder { color: #b0b0b8; }

  /* ── Primary button ── */
  .auth-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background: var(--brand-maroon);
    color: #fff;
    font-family: inherit;
    font-size: 0.9375rem;
    font-weight: 600;
    border: none;
    border-radius: var(--radius-btn);
    cursor: pointer;
    letter-spacing: 0.01em;
    transition: background 0.2s, transform 0.15s;
    margin-top: 0.25rem;
    text-decoration: none;
  }
  .auth-btn:hover { background: var(--brand-pink); transform: translateY(-1px); }
  .auth-btn:active { transform: none; }

  /* ── Divider ── */
  .auth-divider {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    margin: 1.5rem 0;
    color: var(--muted);
    font-size: 0.8125rem;
  }
  .auth-divider::before, .auth-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* ── Social buttons ── */
  .auth-socials { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; }
  .social-btn {
    flex: 1;
    height: 2.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-btn);
    background: #fff;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .social-btn:hover { border-color: #c0c0c8; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .social-btn svg { width: 20px; height: 20px; }

  /* ── Footer text ── */
  .auth-footer-text { text-align: center; font-size: 0.85rem; color: var(--muted); margin-top: 1.25rem; }
  .auth-footer-text a {
    color: var(--brand-maroon);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1.5px solid transparent;
    transition: border-color 0.2s;
  }
  .auth-footer-text a:hover { border-color: var(--brand-pink); color: var(--brand-pink); }

  /* ── Powered by ── */
  .auth-powered-by { text-align: center; font-size: 0.75rem; color: #bbb; margin-top: 1.5rem; }
  .auth-powered-by strong { font-weight: 700; color: #555; }

  /* ── Forgot password ── */
  .auth-forgot { text-align: right; margin-top: -0.5rem; margin-bottom: 1rem; }
  .auth-forgot a { font-size: 0.8125rem; color: var(--brand-maroon); font-weight: 500; text-decoration: none; transition: color 0.2s; }
  .auth-forgot a:hover { color: var(--brand-pink); }

  /* ── Role picker ── */
  .role-picker {
    display: flex;
    background: #f0f0f4;
    border-radius: 1rem;
    padding: 4px;
    gap: 2px;
    margin-bottom: 1.625rem;
  }
  .role-btn {
    flex: 1;
    padding: 0.5875rem 0.25rem;
    border: none;
    background: transparent;
    border-radius: 0.75rem;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    color: #888;
    cursor: pointer;
    transition: all 0.18s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
    white-space: nowrap;
  }
  .role-btn:hover:not(.role-btn--active) { color: var(--text); background: rgba(255,255,255,0.5); }
  .role-btn--active {
    background: #fff;
    color: var(--text);
    box-shadow: 0 1px 4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04);
  }
  .role-btn svg { width: 14px; height: 14px; flex-shrink: 0; }
  .role-btn--active.role-btn--student  { color: #330c26; }
  .role-btn--active.role-btn--instructor { color: #4b3fe9; }
  .role-btn--active.role-btn--admin    { color: #d97706; }

  /* ── Role notices ── */
  .role-notice {
    display: none;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.625rem 0.875rem;
    border-radius: 0.75rem;
    font-size: 0.8rem;
    line-height: 1.45;
    margin-bottom: 1rem;
  }
  .role-notice--instructor { background: rgba(75,63,233,0.07); border: 1px solid rgba(75,63,233,0.18); color: #3228d4; }
  .role-notice--admin      { background: rgba(217,119,6,0.07);  border: 1px solid rgba(217,119,6,0.2);  color: #92400e; }
  .role-notice--visible    { display: flex; }

  /* ── OTP inputs ── */
  .otp-inputs { display: flex; gap: 0.625rem; justify-content: center; margin-bottom: 1.25rem; }
  .otp-inputs input {
    width: 3rem; height: 3.5rem; text-align: center;
    font-size: 1.25rem; font-weight: 700;
    border: 1.5px solid var(--input-border); border-radius: 0.75rem;
    background: var(--input-bg); outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .otp-inputs input:focus { border-color: var(--brand-pink); box-shadow: 0 0 0 3px rgba(245,21,130,0.12); background: #fff; }

  /* ── Responsive ── */
  @media (max-width: 520px) {
    .auth-shell { grid-template-columns: 1fr; }
    .auth-card { grid-column: 1; margin: 1rem; padding: 2rem 1.5rem; }
  }
`;
