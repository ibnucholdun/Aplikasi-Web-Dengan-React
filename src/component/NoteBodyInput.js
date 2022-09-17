import React, { Component } from 'react'

class NoteInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
    }

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  onTitleChangeEventHandler = (event) => {
    this.setState((prevState) => {
      const maxChar = 50;
      return {
        ...prevState,
        title: event.target.value.slice(0, maxChar),
      }
    })
  }

  onBodyChangeEventHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    })
  }

  render() {
    const maxChar = 50;
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {maxChar - this.state.title.length}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput