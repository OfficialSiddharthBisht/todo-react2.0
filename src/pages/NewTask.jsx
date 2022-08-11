import React from 'react'
import { SubTaskAdder } from '../components/SubTaskAdder';

export const NewTask = () => {
    const [subTask, setSubTask] = React.useState([]);
    const [title , setTitle] = React.useState("");
    const [description , setDescription] = React.useState("");
    const [checkedState , setCheckedState] = React.useState({
        official : false,
        personal : false,
        others : false
    });
    const [radioState , setRadioState] = React.useState({
        todo: false,
        inprogress : false,
        done : false,
    })

    const handleCheckChange = (e) =>{
        const {checked , name} = e.target;
        setCheckedState(prev => ({
            ...prev,
            [name] : checked
        }))
    }   
    const handleRadio = (e) =>{
        const [name , checked] = e.target;
        const obj = {
            todo: false,
            inprogress : false,
            done : false,
            [name] : checked
        }
        setRadioState(obj);
    }
    return (
        <div style={{display:'flex' , justifyContent:'space-around', marginBottom:'20px'}}>
            <div>
                <div className="input_basic">
                    <input value={title} onChange = {(e) => setTitle(e.target.value)} type="text" placeholder='Title' />
                </div>
                <div className="textarea_basic">
                    <textarea value={description} onChange = {(e)=>setDescription(e.target.value)} placeholder='Description' cols="30" rows="10"></textarea>
                </div>
                <div className="radio_basic">
                    <label htmlFor="todo">Todo</label>
                    <input type="radio" onChange={handleRadio} name="taskstatus" id="todo" /><br />
                    <label htmlFor="inprogress">In Progress</label>
                    <input type="radio" onChange={handleRadio} name="taskstatus" id="inprogress" /><br />
                    <label htmlFor="done">Done</label>
                    <input type="radio" onChange={handleRadio} name="taskstatus" id="done" />
                    <br/> <br/><br/>
                </div>
                <div className="checkDiv">
                    <label htmlFor="official">Official</label>
                    <input checked ={checkedState.official} onChange = {handleCheckChange} type="checkbox" name="official" id="official" /><br />
                    <label htmlFor="personal">Personal</label>
                    <input checked = {checkedState.personal} onChange = {handleCheckChange} type="checkbox" name="personal" id="personal" /><br />
                    <label htmlFor="others">Others</label>
                    <input checked = {checkedState.others} onChange = {handleCheckChange} type="checkbox" name="others" id="others" />
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
