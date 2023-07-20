import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/theHeader";
import TheFooter from "@/components/theFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'NextJS - Michael course',
    description: 'Course by Michael Nepomnyaschiy',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TheHeader/>
        <main className={'container'}>{children}</main>
        <TheFooter/>
        </body>
        </html>
    )
}
