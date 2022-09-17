import React from 'react'
import NoteItemAction from './NoteItemAction'
import NoteItemContent from './NoteItemContent'

const NoteItem = ({ title, createdAt, body, id, onDelete }) => {
  return (
    <div className='note-item'>
        <NoteItemContent title={title} date={createdAt} body={body}/>
        <NoteItemAction id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItem