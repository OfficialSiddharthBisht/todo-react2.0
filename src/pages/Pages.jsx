import React from "react";
import { Routes,Route } from "react-router-dom";
import { Private } from "../components/Private";
import {Home} from './Home';
import {Login} from './Login';
import { NewTask } from "./NewTask";
import {Signup} from './Signup';


export const Pages = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Private><Home/> </Private>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "*" element = {<h2>Page Not Found</h2>} />
            <Route path = "/newTask" element = {<NewTask/>}/>
        </Routes>
    )
}