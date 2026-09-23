export interface UserAddress {
    address: string
    city: string
    postalCode: string
    country: string
}

export interface UserCompany {
    name: string
    department: string
    title: string
}

export interface User {
    id: number
    firstName: string
    lastName: string
    username: string
    email: string
    phone: string
    age: number
    gender: string
    birthDate: string
    image: string
    role: string
    address?: UserAddress
    company?: UserCompany
    maidenName?: string
    bloodGroup?: string
    height?: number
    weight?: number
    eyeColor?: string
    hair?: UserHair
    ip?: string
    macAddress?: string
    university?: string
    bank?: UserBank
    ein?: string
    ssn?: string
    userAgent?: string
    crypto?: UserCrypto
    password?: string
}

export interface UserHair {
    color: string
    type: string
}

export interface UserBank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export interface UserCrypto {
    coin: string
    wallet: string
    network: string
}