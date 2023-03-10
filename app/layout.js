import '../styles/global.css'

export const metadata = {
  title: 'Personal Financial App',
  description: 'A personal financial tracking app for myself',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className='bg-gradient-to-r from-yellow-400 to-orange-500'> */}
      <body className='bg-gray-50'>
          {children}
      </body>
    </html>
  )
}
