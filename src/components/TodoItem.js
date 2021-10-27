import React, { Component } from 'react'


 class TodoItem extends Component {
    render() {
        const{title, handleDelete, handleEdit} =this.props;
        return (
           <li className="my-2 list-group-item text-capitalize d-flex justify-content-between">
               <h6>{title}</h6>
               <div className="todo-icon">
                   <span className="mx-2 text-sucess" onClick={handleEdit}>
                       <i className="fas fa-pen"></i>
                   </span>
                   <span className="mx-2 text-sucess" onClick={handleDelete}>
                       <i className="fas fa-trash"></i>
                   </span>
               </div>
               
           </li>
        )
    }
}

export default TodoItem
