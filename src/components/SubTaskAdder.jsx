import { nanoid } from 'nanoid';
import React from 'react'

export const SubTaskAdder = ({ subTask, setSubTask }) => {
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    const obj = {
      title: text,
      status: false,
      id: nanoid()
    }
    setSubTask(prev => (
      [...prev, obj]
    ))
  }

  
  return (
    <div>
      <div>
        <input type="text" value={text} onChange={()=>handleChange(el.id)} />
        <button onClick={handleSubmit}>Add</button>

      </div>
      {subTask.map(el => (
        <ul style={{display:'flex',width:'220px', justifyContent:'space-between'}} key = {el.id}>
          <input type="checkbox" checked ={el.status} onChange = {handleCheckChange(el.id)}/>
          <div>{el.title}</div>
          <button onClick={handleDelete(el.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}
