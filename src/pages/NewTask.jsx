import React from 'react'
import { SubTaskAdder } from '../components/SubTaskAdder';

export const NewTask = () => {
    const [subTask, setSubTask] = React.useState([]);
    return (
        <div style={{display:'flex' , justifyContent:'space-around', marginBottom:'20px'}}>
            <div>
                <div className="input_basic">
                    <input type="text" placeholder='Title' />
                </div>
                <div className="textarea_basic">
                    <textarea placeholder='Description' cols="30" rows="10"></textarea>
                </div>
                <div className="radio_basic">
                    <label htmlFor="todo">Todo</label>
                    <input type="radio" name="taskstatus" id="todo" /><br />
                    <label htmlFor="inprogress">In Progress</label>
                    <input type="radio" name="taskstatus" id="inprogress" /><br />
                    <label htmlFor="done">Done</label>
                    <input type="radio" name="taskstatus" id="done" />
                    <br/> <br/><br/>
                </div>
                <div className="checkDiv">
                    <label htmlFor="official">Official</label>
                    <input type="checkbox" name="" id="official" /><br />
                    <label htmlFor="personal">Personal</label>
                    <input type="checkbox" name="" id="personal" /><br />
                    <label htmlFor="others">Others</label>
                    <input type="checkbox" name="" id="others" />
                </div>
            </div>
            <div>
                <SubTaskAdder subTask = {subTask}  setSubTask = {setSubTask}/>
            </div>
            <div>
                <button>Create Task</button>
            </div>
        </div>
    )
}
