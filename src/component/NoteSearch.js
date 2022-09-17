import React, { Component } from 'react'

class NoteSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    }

    onSearchChangeEventHandler = (event) => {
        this.setState({ search: event.target.value })

    }
  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Search" on/>
      </div>
    )
  }
}

export default NoteSearch