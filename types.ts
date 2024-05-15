type Account = {
	id: string
	availableBalance: number
	currentBalance: number
	officialName: string
	mask: string
	institutionId: string
	name: string
	type: string
	subtype: string
	appwriteItemId: string
	shareableId: string
}

type User = {
	$id: string
	email: string
	userId: string
	dwollaCustomerUrl: string
	dwollaCustomerId: string
	firstName: string
	lastName: string
	name: string
	address1: string
	city: string
	state: string
	postalCode: string
	dateOfBirth: string
	ssn: string
}

interface CreateFundingSourceOptions {
	customerId: string // Dwolla Customer ID
	fundingSourceName: string // Dwolla Funding Source Name
	plaidToken: string // Plaid Account Processor Token
	_links: object // Dwolla On Demand Authorization Link
}

interface TransferParams {
	sourceFundingSourceUrl: string
	destinationFundingSourceUrl: string
	amount: string
}

interface AddFundingSourceParams {
	dwollaCustomerId: string
	processorToken: string
	bankName: string
}

interface NewDwollaCustomerParams {
	firstName: string
	lastName: string
	email: string
	type: string
	address1: string
	city: string
	state: string
	postalCode: string
	dateOfBirth: string
	ssn: string
}

interface CreateBankAccountProps {
	accessToken: string
	userId: string
	accountId: string
	bankId: string
	fundingSourceUrl: string
	shareableId: string
}
