"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const SetPasswordPage: React.FC<KindePageEvent> = () => {
    return (
        <>
            <div className="auth-logo">
                <img src="/images/logo-cropped.svg" alt="EulerPro" />
            </div>

            <h1 className="auth-heading">Set your password</h1>
            <p className="auth-subheading">Choose a strong password for your account</p>

            <form method="POST" action="" autoComplete="on">
                <label className="auth-label" htmlFor="password">New password</label>
                <div className="auth-input-wrap" style={{ marginBottom: '1rem' }}>
                    <input
                        className="auth-input"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="At least 8 characters"
                        required
                        autoComplete="new-password"
                        style={{ marginBottom: 0 }}
                    />
                </div>

                <label className="auth-label" htmlFor="confirm_password">Confirm password</label>
                <input
                    className="auth-input"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Repeat password"
                    required
                    autoComplete="new-password"
                />

                <button className="auth-btn" type="submit">Set password &amp; continue</button>
            </form>

            <p className="auth-powered-by" style={{ marginTop: '1.5rem' }}>Powered by <strong>Kinde</strong></p>
        </>
    );
};

export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await SetPasswordPage(event);
    return renderToString(page);
}
