console.log('hello world')

import { createServer } from 'http'
import express from 'express'
import cors from 'cors'
import { error } from 'console'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

let notes = [
    {
      "id": "1",
      "content": "HTML is easy",
    },
    {
      "id": "2",
      "content": "hi"
    },
    {
      "id": "3",
      "content": "really"
    },
    {
      "id": "4",
      "content": "why"
    }
]

// return unique id for the note
const generatedId = () => {
  const maxId = notes.length > 0 ? 
  // ... spread array: notes.map(n => Number(n.id))
  Math.max(...notes.map(n => Number(n.id))): 0

  return String(maxId + 1)

}

// post method
app.post('/api/notes', (request, response) => {
  const body = request.body

  // if no content return 400 bad request
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const note = {
    id: generatedId(),
    content: body.content,
    
  }
  
  notes = notes.concat(note)

  console.log(note)
  response.json(note)
})

// get all
app.get('/api/notes', (request, response) => {
    if (notes.length > 0){
      response.json(notes)
    } else {
      response.status(404).end()
    }

})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find((note) => note.id === id)

    // if no note is found, return 404
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
})

// remove the note
app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)

  // 204 no content
  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
