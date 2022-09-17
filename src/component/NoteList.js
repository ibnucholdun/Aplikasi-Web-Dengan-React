import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({notes, onDelete, search }) => {

    return (
        notes.length === 0 ? <p className='notes-list__empty-message'>Catatan Tidak Ada</p> 
        : <div className='notes-list'>
            {
                notes.filter((note) => {
                    if (search){
                        return note.title.toLowerCase().includes(search.toLowerCase())
                    }
                    return true
                }).map((note) => {
                    return <NoteItem key={note.id} onDelete={onDelete} {...note}/>
                })
            }
        </div>
    )
}

export default NoteList