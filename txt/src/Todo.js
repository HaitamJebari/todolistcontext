import React , {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './style.css'
export const FirstT=createContext()

function Todo({children}){
    const [tasks,settasks]=useState([
        {id:uuidv4(),Job:'Sport'},
        {id:uuidv4(),Job:'Lire'},
        {id:uuidv4(),Job:'Coder'}
    ])
    const[task,settask]=useState('')

    const addtask=()=>{
        let ntasks=[...tasks]
        let ntask={}
        ntask.id=uuidv4()
        ntask.Job=task
        ntasks.push(ntask)
        settasks(ntasks)
        settask('')
    }
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!==idp
        })
        settasks(ntasks)
        
    }
   
    return(
        <div>
            <FirstT.Provider value={{tasks,settasks,task,settask,addtask,deletetask}}>
                {children}
            </FirstT.Provider>
        </div>
    )
}
export default Todo