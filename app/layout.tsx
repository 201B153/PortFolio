import './globals.css';

export const metadata = {
  title: 'mstomar698 | dev-portfolio',
  description: 'mstomar698',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
