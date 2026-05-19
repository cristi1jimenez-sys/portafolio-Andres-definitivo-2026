import "./globals.css";

export const metadata = {
  title: "Portafolio Profesional",
  description: "Desarrollador y Analista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
