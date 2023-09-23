import React from 'react'
import { useState } from 'react'

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => {
        setText('')
        onAddTask(text)
      }}>
        Add Task
      </button>
    </>
  )
}

export default AddTask
