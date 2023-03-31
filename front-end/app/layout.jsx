"use client";
import { SessionProvider } from "next-auth/react";
import "../public/globals.css";

const RootLayout = ({ children, session }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <SessionProvider session={session}>
      <body className="">{children}</body>
    </SessionProvider>
  </html>
);

export default RootLayout;
