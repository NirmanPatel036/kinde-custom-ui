"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

// Default fallback — matches login layout, used when no specific page is found
const DefaultPage: React.FC<KindePageEvent> = ({ context }) => {
    const heading = context?.widget?.content?.heading ?? "Welcome to EulerPro";

    return (
        <>
            <div className="auth-logo">
                <img src="/images/logo-cropped.svg" alt="EulerPro" />
            </div>

            <h1 className="auth-heading">{heading}</h1>
            <p className="auth-subheading">{context?.widget?.content?.description ?? "Continue with your EulerPro account"}</p>

            {/* Kinde renders the widget here — do NOT remove this div */}
            <div id="kinde-widget" />

            <p className="auth-powered-by">Powered by <strong>Kinde</strong></p>
        </>
    );
};

export default async function Page(event: KindePageEvent): Promise<string> {
    const page = await DefaultPage(event);
    return renderToString(page);
}
