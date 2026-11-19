export type KonyvTipus = {
    id: number,
    cim: string,
    szerzo: string,
    ar: number,
    darab: number 
}

export const KONYVEK: KonyvTipus[]= [
    {
        id: 1,
        cim: "Harry Potter and the Goblet of Fire",
        szerzo: "J.K. Rowling",
        ar: 2750,
        darab: 110
    },
    {
        id: 2,
        cim: "Metro 2033",
        szerzo: "Dmitry Glukhovsky",
        ar: 6499,
        darab: 57
    },
    {
        id: 3,
        cim: "The Witcher - The Last Wish",
        szerzo: "Andrzej Sapkowski",
        ar: 6690,
        darab: 31
    },
    {
        id: 4,
        cim: "Dune",
        szerzo: "Frank Herbert",
        ar: 7490,
        darab: 141
    },
    {
        id: 5,
        cim: "The Planet of The Apes",
        szerzo: "Pierre Boulle",
        ar: 3490,
        darab: 7
    },
    {
        id: 6,
        cim: "The Fault in Our Stars",
        szerzo: "John Green",
        ar: 4400,
        darab: 71
    }
]