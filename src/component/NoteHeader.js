import React, { Component } from 'react'

class NoteHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    }

    onSearchChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                search: event.target.value,
            }
        })
    }

  render() {
    return (
      <div className="note-app__header">
        <h1>Note App</h1>
        <div className="note-search">
            <input type="text" placeholder="Cari Catatan" onChange={this.onSearchChangeEventHandler} search={this.state.search}/>
        </div>
      </div>
    )
  }
}

export default NoteHeader