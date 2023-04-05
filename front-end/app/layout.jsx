import "../public/globals.css";

const RootLayout = ({ children }) => (
  <html lang="es">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body className="">{children}</body>
  </html>
);

export default RootLayout;
