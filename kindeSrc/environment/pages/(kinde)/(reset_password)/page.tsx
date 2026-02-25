"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const ResetPasswordPage: React.FC<KindePageEvent> = () => {
    return (
        <>
            <div className="auth-logo">
                <img src="/images/logo-cropped.svg" alt="EulerPro" />
            </div>

            <div style={{ textAlign: 'center', margin: '0.5rem 0 1.5rem' }}>
                <div style={{
                    width: '72px', height: '72px',
                    background: 'rgba(245,21,130,0.08)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f51582" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>
            </div>

            <h1 className="auth-heading" style={{ textAlign: 'center' }}>Reset your password</h1>
            <p className="auth-subheading" style={{ textAlign: 'center' }}>
                Enter your email and we'll send you a reset link.
            </p>

            <form method="POST" action="">
                <label className="auth-label" htmlFor="email">Email</label>
                <input
                    className="auth-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                />
                <button className="auth-btn" type="submit">Send reset link</button>
            </form>

            <p className="auth-footer-text">
                <a href="/login">← Back to sign in</a>
            </p>
            <p className="auth-powered-by">Powered by <strong>Kinde</strong></p>
        </>
    );
};

export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await ResetPasswordPage(event);
    return renderToString(page);
}
