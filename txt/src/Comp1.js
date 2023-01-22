import React, { useContext } from "react"
import { FirstT } from "./Todo"
import Ref from "./ref"
import './style.css'

function Comp1(){
    const {tasks,settasks,task,settask,addtask,deletetask}=useContext(FirstT)
    return(
        <div>
            <h1 >ToDo - List</h1> 
            <form action="">
                <h3> Next Job :</h3> 
                <input style={{textAlign:"center",width:"380px",paddingBottom:"7px"}} type="text" name="" id="" onChange={(e)=>{settask(e.target.value)}} value={task}/> 
                <input type="button" onClick={addtask} value="Ajouter" id="aj" className='btn-primary'/>
            </form>
            <ul>
        {
            tasks.map((t)=>{
                return <li key={t.id}><Ref setnotes={settasks} id={t.id} Task_done={t.done} dlt={()=>{deletetask(t.id)}} props={t.Job}/></li>           
            })
               
        }
        
        </ul>
        </div>
    )
}
export default Comp1