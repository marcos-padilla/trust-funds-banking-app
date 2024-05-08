import HeaderBox from '@/components/header-box'

export default function HomePage() {
	const loggedIn = {
		firstName: 'Jhon',
	}
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account and trasactions effectively.'
					/>
				</header>
			</div>
		</section>
	)
}
