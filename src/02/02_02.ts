
export type GovermentBuildingsType = {
    type: 'HOSPITAL' | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
title: string
houses: Array<HousesType>
govermentBuildings: Array<GovermentBuildingsType>
cityzensNumber: number
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
} 

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}