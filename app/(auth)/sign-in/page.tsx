import AuthForm from '@/components/auth-form'

export default function SignInPage() {
	return (
		<section className='flex-center size-full max-sm:px-6'>
			<AuthForm type='sign-in' />
		</section>
	)
}
