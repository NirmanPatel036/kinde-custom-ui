"use server";

import React from "react";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export const DefaultLayout = ({
    children,
}: DefaultLayoutProps): React.JSX.Element => (
    <div className="auth-shell">
        <div className="auth-shell__bg" aria-hidden="true" />
        <div className="auth-card">
            {children}
            <Footer />
        </div>
    </div>
);
