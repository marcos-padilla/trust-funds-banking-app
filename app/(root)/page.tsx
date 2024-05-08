import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'

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
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={2024.5}
					/>
				</header>
			</div>
		</section>
	)
}
