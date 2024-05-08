interface HeaderBoxProps {
	type: 'title' | 'greeting'
	title: string
	subtext: string
	user?: string
}

export default function HeaderBox({
	subtext,
	title,
	type,
	user,
}: HeaderBoxProps) {
	return (
		<div className='header-box'>
			<h1 className='header-box-title'>
				{title}{' '}
				{type === 'greeting' && (
					<span className='text-bankGradient'>{user}</span>
				)}
			</h1>
			<p className='header-box-subtext'>{subtext}</p>
		</div>
	)
}
