import '../styles/global.css'

export const metadata = {
  title: 'Personal Financial App',
  description: 'A personal financial tracking app for myself',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
