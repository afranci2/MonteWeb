import "../public/globals.css";

const RootLayout = ({ children }) => (
  <html lang="es">
    <head>

      <title>Movimiento Pentecostal Monte Sinai</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Enciende el Fuego en ti. Join us today!"/>
      <link rel="icon" href="new-logo.png" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body className="">{children}</body>
  </html>
);

export default RootLayout;
