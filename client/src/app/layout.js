import '@/app/global.css'
import LoginLinks from '@/app/LoginLinks'
export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">
            <LoginLinks />
            {children}</body>
        </html>
    )
}

export default RootLayout
