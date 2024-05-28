import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const bookList = [
  {
    id: 1,
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    genre: 'Fiction',
    category: 'Adult',
    partOfSeries: false,
    seriesName: '',
    numBooksInSeries: 0,
    awards: ['Goodreads Choice Award Nominee for Fiction (2020)'],
    synopsis: '', 
    rating: 4.5,
    likes: 100,
    comments: [
      {
        user: 'Amanda',
        comment: 'I loved this book! It was so well written and the story was so interesting. I could not put it down.'
      }
    ]
  },
  {
    id: 2,
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    genre: 'Historical Fiction',
    category: 'Adult',
    partOfSeries: false,
    seriesName: '',
    numBooksInSeries: 0,
    awards: ['Goodreads Choice Award Nominee for Historical Fiction (2021)'],
    synopsis: '',
    rating: 4.5,
    likes: 100,
    comments: [
      {
        user: 'Amanda',
        comment: 'I loved this book! It was so well written and the story was so interesting. I could not put it down.'
      }
    ] 
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Recommended Book List</h1>
      <h2>From the Ladies of BAW</h2>
      <div className="card">
        <h3>Click to log your visit</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          visit # {count}
        </button>
      </div>
      <div>
        <button>Search by Author</button>
        <button>Search by Likes</button>
        <button>Search by Awards</button>
        <button>See Whole List</button>
        <button>Recommend</button>
      </div>

    </>
  )
}

export default App
