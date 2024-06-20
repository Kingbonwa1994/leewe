import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: 'Lewe - Canabiniods Health ',
  description: 'This is the place where you will meet best products from the Plant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  )
}
