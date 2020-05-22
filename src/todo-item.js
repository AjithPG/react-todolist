import React from "react"

const todolist = (props) => {
    return(
        
               <div className="todo-list">
                   <input type="checkbox"/>
                    <p>{props.item.text}</p>
                </div>
       
    )
}
export default todolist