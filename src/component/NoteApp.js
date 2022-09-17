import React, { Component } from 'react'
import NoteBody from './NoteBody'
import NoteHeader from './NoteHeader'

class NoteApp extends Component {
  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody />
      </div>
    )
  }
}

export default NoteApp