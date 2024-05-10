import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {
	PlaidLinkOnSuccess,
	PlaidLinkOptions,
	usePlaidLink,
} from 'react-plaid-link'
import { useRouter } from 'next/navigation'
import { createLinkToken, exchangePublicToken } from '@/actions/user.actions'
import Image from 'next/image'

interface PlaidLinkProps {
	user: User
	variant?: 'primary' | 'ghost'
}

export default function PlaidLink({ user, variant }: PlaidLinkProps) {
	const router = useRouter()
	const [token, setToken] = useState<string | null>(null)
	useEffect(() => {
		const getLinkToken = async () => {
			const data = await createLinkToken(user)
			setToken(data?.linkToken)
		}
	}, [user])

	const onSuccess = useCallback<PlaidLinkOnSuccess>(
		async (public_token: string) => {
			await exchangePublicToken({
				publicToken: public_token,
				user,
			})

			router.push('/')
		},
		[user]
	)
	return <div>PlaidLink</div>
}
