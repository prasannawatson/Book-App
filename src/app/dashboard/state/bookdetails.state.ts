import { Bookdetails } from "src/app/shared/models/bookdetails.model";



export interface BookDetailsState{
    bookDetails: Bookdetails[];
}


export const initialState: BookDetailsState = {
    bookDetails: [{
        id: 1,
        name: "Rich Bad Poor Dad",
        author: "John",
        price: 2500,
        rating: 4,
        availability: "Yes",
        date: "03-20-2012",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK1.png"
    },
    {
        id: 2,
        name: "A Song of Ice and Fire",
        author: "Richard",
        price: 500.5,
        rating: 5,
        availability: "No",
        date: "02-13-2015",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK2.png"
    },
    {
        id: 3,
        name: "The Witcher",
        author: "Jinny",
        price: 1000,
        rating: 2,
        availability: "No",
        date: "08-20-2014",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK3.png"
    },
    {
        id: 4,
        name: "Wings Of Fire",
        author: "Thomas",
        price: 450,
        rating: 5,
        availability: "Yes",
        date: "07-10-2018",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK4.png"
    },
    {
        id: 5,
        name: "Life Of Pi",
        author: "Tom",
        price: 450,
        rating: 5,
        availability: "No",
        date: "03-22-2012",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK5.png"
    },
    {
        id: 6,
        name: "Purity Pursuit",
        author: "Viki",
        price: 570,
        rating: 1,
        availability: "Yes",
        date: "03-23-2019",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK6.png"
    },
    {
        id: 7,
        name: "Harry Porter",
        author: "Mick",
        price: 2340,
        rating: 3,
        availability: "No",
        date: "01-23-2020",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK7.png"
    },
    {
        id: 8,
        name: "The Alchemist",
        author: "Edwin",
        price: 3967,
        rating: 1,
        availability: "Yes",
        date: "01-23-2020",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK8.png"
    },{
        id: 9,
        name: "Sherlock Holmes",
        author: "Rose",
        price: 2098,
        rating: 2,
        availability: "Yes",
        date: "09-07-1888",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK9.png"
    },
    {
        id: 10,
        name: "400 Days",
        author: "Santhosh",
        price: 23,
        rating: 3,
        availability: "Yes",
        date: "10-25-2018",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK10.png"
    },
    {
        id: 11,
        name: "Treasue Island",
        author: "Rosy",
        price: 5600,
        rating: 5,
        availability: "Yes",
        date: "09-07-2019",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK11.png"
    },
    {
        id: 12,
        name: "Dracula",
        author: "Tim",
        price: 200,
        rating: 1,
        availability: "Yes",
        date: "11-30-2012",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK12.png"
    },{
        id: 13,
        name: "Thing And Go Rich",
        author: "David Hook",
        price: 2304,
        rating: 3,
        availability: "Yes",
        date: "03-20-2015",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK13.png"
    },
    {
        id: 14,
        name: "The Blue Umbrella",
        author: "Shane Watson",
        price: 2389,
        rating: 4,
        availability: "Yes",
        date: "07-23-2016",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK14.png"
    },
    {
        id: 15,
        name: "The Discovery Of India",
        author: "Dhoni",
        price: 1030,
        rating: 3,
        availability: "Yes",
        date: "03-20-2024",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK15.png"
    },
    {
        id: 16,
        name: "The Davinci Code",
        author: "Kohli",
        price: 4503.5,
        rating: 2,
        availability: "Yes",
        date: "12-10-1999",
        imageUrl: "https://cxnext.blob.core.windows.net/prasanna/book-images/BOOK16.png"
    },
]
} 