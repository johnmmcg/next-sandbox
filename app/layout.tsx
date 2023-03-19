import './tailwind.css'
import './globals.css'

export const metadata = {
  title: "John's Sandbox",
  description: 'Next + React + TailwindCSS + DaisyUI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
