import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value))

export function encryptId(id: string) {
	return btoa(id)
}

export function decryptId(id: string) {
	return atob(id)
}

export function extractCustomerIdFromUrl(url: string) {
	// Split the URL string by '/'
	const parts = url.split('/')

	// Extract the last part, which represents the customer ID
	const customerId = parts[parts.length - 1]

	return customerId
}
