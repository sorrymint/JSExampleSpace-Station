import "./globals.css";

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

export default function RootLayout({
                                       children,
                                   }) {
    return (
        <html lang="en">
        <body className="bg-gray-50">
        <main className="min-h-screen">
            {children}
        </main>
        </body>
        </html>
    )
}