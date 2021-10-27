import React, { Component } from 'react'
import TodoItem from './TodoItem';


class TodoInput extends Component {
    render() {
        const{item, handleChange,handleSubmit ,editItem} = this.props;
        return (
            <div className ="my-3 card card-body">
              <form onSubmit={handleSubmit}>
                  <div className="input-group">
                      <div className="input-group-prepend">
                          <div className="text-white input-group-text bg-primary">
                              <i className="fas fa-book"></i>
                           </div>
                       </div>
                       <input 
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                           />
                  </div>
                  <button type="submit" className="mt-3 btn btn-block btn-primary text-uppercase">
                      add item
                  </button>
              </form> 
              
            </div>
        )
    }
}

export default TodoInput
