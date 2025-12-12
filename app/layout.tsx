// my-app/app/layout.tsx

import { Providers } from './Providers'; 

// Tipifica children para Layouts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { // Tipificamos
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