import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Transcript Highlighter',
    description: 'Transcript Highlighter',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  