import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Bazzaaari App',
  description: 'Your marketplace solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        {/* เพิ่ม Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Navbar />
        
        {/* คุณอาจจะเพิ่ม header หรือปุ่ม login/logout เองด้วย Firebase Auth ที่นี่ */}
        
        {children}
      </body>
    </html>
  )
}