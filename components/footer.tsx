import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <small className="mb-2 block text-xs">
        &copy; 2024 Luciano Maldonado. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About the webiste:</span> built with
        React % Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        React Email & Resend, Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
