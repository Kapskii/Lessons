type DogType = {
    id: number
    name: string
    legs: number
    color: string
    adress: AdressType
}

type AdressType = {
    country: string
    city: cityType
}

type cityType = {
    cityTitle: string
    street: string
    houseNumber: number
}

const dog: DogType  = {
    id: 1,
    name: 'Chack',
    legs: 4,
    color: 'brown',
    adress: {
        country: 'Belarus',
        city: {
            cityTitle: 'Minsk',
            street: 'Korthenevckogo',
            houseNumber: 20,
        }
    }
}

console.log(dog.adress.city.houseNumber)