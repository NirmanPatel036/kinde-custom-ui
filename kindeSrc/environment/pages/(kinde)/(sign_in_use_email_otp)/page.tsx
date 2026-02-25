"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const EmailOtpPage: React.FC<KindePageEvent> = ({ context }) => {
    const heading = context?.widget?.content?.heading ?? "Check your email";

    return (
        <>
            <div className="auth-logo">
                <img src="/images/logo-cropped.svg" alt="EulerPro" />
            </div>

            {/* Email icon */}
            <div style={{ textAlign: 'center', margin: '0.5rem 0 1.5rem' }}>
                <div style={{
                    width: '72px', height: '72px',
                    background: 'rgba(245,21,130,0.08)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f51582" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                </div>
            </div>

            <h1 className="auth-heading" style={{ textAlign: 'center' }}>{heading}</h1>
            <p className="auth-subheading" style={{ textAlign: 'center' }}>
                We sent a 6-digit code to your email. Enter it below.
            </p>

            <form method="POST" action="">
                <div className="otp-inputs">
                    {[...Array(6)].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            pattern="\d"
                            name={`otp_${i}`}
                            aria-label={`OTP digit ${i + 1}`}
                            autoComplete="one-time-code"
                            required
                        />
                    ))}
                </div>

                <button className="auth-btn" type="submit">Verify code</button>
            </form>

            <p className="auth-footer-text" style={{ marginTop: '1rem' }}>
                Didn't receive it? <a href="#">Resend code</a>
            </p>

            <p className="auth-powered-by">Powered by <strong>Kinde</strong></p>
        </>
    );
};

export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await EmailOtpPage(event);
    return renderToString(page);
}
