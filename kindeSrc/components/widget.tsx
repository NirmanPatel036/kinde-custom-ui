"use server";

import {
    getKindeWidget,
    getKindeLoginUrl,
    getKindeRegisterUrl,
} from "@kinde/infrastructure";

const LOGO_URL = "https://eejyderifolfefbsrfei.supabase.co/storage/v1/object/public/assets/logo-cropped.svg";

import React from "react";

type WidgetProps = {
    heading: string;
    page: "login" | "register" | "default";
};

const googleIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const appleIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.4.83 3.2.83.79 0 2.26-.98 3.81-.83 1.47.12 2.56.7 3.27 1.76-3.02 1.81-2.52 5.78.31 7-.59 4.1zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
);

const msIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24">
        <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
);

const studentIcon = (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path d="M7 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
        <path fillRule="evenodd" d="M3.5 18a6.5 6.5 0 1 1 13 0H3.5Z" clipRule="evenodd" />
    </svg>
);

const instructorIcon = (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path d="M9.25 3.75a.75.75 0 0 1 1.5 0V10h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75V3.75Z" />
        <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2ZM3.5 10a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z" clipRule="evenodd" />
    </svg>
);

const adminIcon = (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.589 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.563 2 12.162 2 7a11.85 11.85 0 0 1 .104-1.589.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.749Z" clipRule="evenodd" />
    </svg>
);

export const Widget: React.FC<WidgetProps> = ({ heading, page }) => {
    const subheading =
        page === "register"
            ? "Proctor with integrity. Who are you signing up as?"
            : page === "login"
                ? "Enter your credentials to access your exam dashboard."
                : "Continue with your EulerPro account.";

    const footerLink =
        page === "register" ? (
            <p className="auth-footer-text">
                Already have an account? <a href={getKindeLoginUrl()}>Sign in</a>
            </p>
        ) : (
            <p className="auth-footer-text">
                No account? <a href={getKindeRegisterUrl()}>Create one</a>
            </p>
        );

    return (
        <>
            {/* Logo */}
            <div className="auth-logo">
                <img src={LOGO_URL} alt="EulerPro" />
            </div>

            {/* Headings */}
            <h1 className="auth-heading">{heading}</h1>
            <p className="auth-subheading">{subheading}</p>

            {/* Role picker */}
            <div className="role-picker" role="group" aria-label="Select your role">
                <button type="button" className="role-btn role-btn--student role-btn--active" data-role="student">
                    {studentIcon} Student
                </button>
                <button type="button" className="role-btn role-btn--instructor" data-role="instructor">
                    {instructorIcon} Instructor
                </button>
                <button type="button" className="role-btn role-btn--admin" data-role="admin">
                    {adminIcon} Admin
                </button>
            </div>

            {/* Role notices */}
            <div id="notice-instructor" className="role-notice role-notice--instructor">
                <span>
                    {page === "register"
                        ? "Instructor accounts require institutional approval. You'll be notified once verified."
                        : "Instructor accounts require approval. Contact your institution admin if you need access."}
                </span>
            </div>
            <div id="notice-admin" className="role-notice role-notice--admin">
                <span>
                    {page === "register"
                        ? "Admin sign-up requires an existing admin invitation. Contact your platform admin."
                        : "Admin sign-in is restricted to authorized personnel only."}
                </span>
            </div>

            {/* Kinde widget (the actual auth form) */}
            {getKindeWidget()}

            {/* Social buttons */}
            <div className="auth-divider">Or continue with</div>
            <div className="auth-socials">
                <button className="social-btn" type="button" aria-label="Continue with Google">{googleIcon}</button>
                <button className="social-btn" type="button" aria-label="Continue with Apple">{appleIcon}</button>
                <button className="social-btn" type="button" aria-label="Continue with Microsoft">{msIcon}</button>
            </div>

            {footerLink}

            {/* Role picker script */}
            <script dangerouslySetInnerHTML={{
                __html: `
        function selectRole(role) {
          document.querySelectorAll('.role-btn').forEach(function(btn) {
            btn.classList.remove('role-btn--active');
          });
          var active = document.querySelector('[data-role="' + role + '"]');
          if (active) active.classList.add('role-btn--active');
          ['instructor','admin'].forEach(function(r) {
            var el = document.getElementById('notice-' + r);
            if (el) el.classList.remove('role-notice--visible');
          });
          if (role !== 'student') {
            var notice = document.getElementById('notice-' + role);
            if (notice) notice.classList.add('role-notice--visible');
          }
        }
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('[data-role]').forEach(function(btn) {
            btn.addEventListener('click', function() { selectRole(btn.getAttribute('data-role')); });
          });
        });
      ` }} />
        </>
    );
};
