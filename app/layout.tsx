import "./globals.css";


export const metadata = {
  title: "Mi tienda",
  description: "Tienda con API y estado global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

