import React from 'react'

export const NewTask = () => {
  return (
    <div>
        <div className="input_basic">
            <input type="text" placeholder='Title'  />
        </div>
        <div className="textarea_basic">
            <textarea placeholder='Description' cols="30" rows="10"></textarea>
        </div>
        <div className="radio_basic">
            <label htmlFor="todo">Todo</label>
            <input type="radio" name="taskstatus" id="todo" /><br/>
            <label htmlFor="inprogress">In Progress</label>
            <input type="radio" name="taskstatus" id="inprogress" /><br/>
            <label htmlFor="done">Done</label>
            <input type="radio" name="taskstatus" id="done" />
        </div>
        <div className="checkDiv">
            <label htmlFor="official">Official</label>
            <input type="checkbox" name="" id="official" /><br/>
            <label htmlFor="personal">Personal</label>
            <input type="checkbox" name="" id="personal" /><br/>
            <label htmlFor="others">Others</label>
            <input type="checkbox" name="" id="others" />
        </div>
    </div>
  )
}
