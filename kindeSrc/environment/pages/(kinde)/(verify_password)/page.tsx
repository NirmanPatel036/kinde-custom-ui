"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const VerifyPasswordPage: React.FC<KindePageEvent> = ({ context }) => {
    return (
        <>
            <div className="auth-logo">
                <img src="/images/logo-cropped.svg" alt="EulerPro" />
            </div>

            <h1 className="auth-heading">Enter your password</h1>
            <p className="auth-subheading">Signing in to your EulerPro account</p>

            <form method="POST" action="" autoComplete="on">
                <label className="auth-label" htmlFor="password">Password</label>
                <div className="auth-input-wrap">
                    <input
                        className="auth-input"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        autoComplete="current-password"
                    />
                </div>

                <div className="auth-forgot">
                    <a href="/reset-password">Forgot password?</a>
                </div>

                <button className="auth-btn" type="submit">Sign in</button>
            </form>

            <p className="auth-footer-text">
                <a href="/login">← Use a different method</a>
            </p>

            <p className="auth-powered-by">Powered by <strong>Kinde</strong></p>
        </>
    );
};

export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await VerifyPasswordPage(event);
    return renderToString(page);
}
