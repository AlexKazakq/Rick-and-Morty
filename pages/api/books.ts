import type { NextApiRequest, NextApiResponse } from 'next'

const booksDB = [
    {id: 1, title: 'name 1'},
    {id: 2, title: 'title'},
    {id: 3, title: 'Name 2'},
]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<BookType[]>
) {
    if (req.method === 'GET') {
        let books = booksDB

        const term = req.query.term as string

        if (term) {
            books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
        }

        await res.revalidate('/characters')

        res.status(200).json(books)
    }
}

//types

interface BookType {
    id: number,
    title: string
}