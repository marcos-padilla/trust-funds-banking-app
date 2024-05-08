import Sidebar from '@/components/sidebar'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const loggedIn = {
		firstName: 'John',
		lastName: 'Doe',
	}
	return (
		<main className='flex h-screen w-full font-inter'>
			{/* @ts-ignore*/}
			<Sidebar user={loggedIn} />
			{children}
		</main>
	)
}
