import React, { Component } from 'react'
import NoteList from './NoteList'
import NoteInput from './NoteBodyInput'
import { getInitialData } from '../utils/data'

class NoteBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onDeletehandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }
    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
          return {
            notes: [...prevState.notes, {
              id: +new Date(),
              title,
              body,
              archived: false,
              createdAt: new Date(),
            }]
          }
        })
      }

  render() {
    return (
        <div className="note-app__body">
            <NoteInput addNote={this.onAddNoteHandler}/>
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.notes} onDelete={this.onDeletehandler}/>
        </div>
    )
  }
}

export default NoteBody