import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
const setColorSchemeScript = `
(function() {
  try {
    document.documentElement.setAttribute('color-scheme', 'dark');
    localStorage.setItem('color-scheme', 'dark');
  } catch(e) {}
})();
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="no-touch">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
