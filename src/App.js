import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




class App extends Component {
  state = {
    items: [],
    id:uuidv4(),
    item:'',
    editItem: false
  }

  handleChange=(e)=>{
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit=(e)=>{
   e.preventDefault();
   const newItem ={
     id:this.state.id,
     title:this.state.item
   }
   const updateItems =[...this.state.items,newItem]

   this.setState({
     items: updateItems,
     item:'',
     id:uuidv4(),
     editing:false
   },
   ()=> console.log(this.state)
   )
  }

  clearList = (e)=>{
    console.log('clear list')
  }

  handleEdit= (id)=>{
    console.log(`handle edit ${id}`)
  }

  handleDelete= (id)=>{
    console.log(`handle delete ${id}`)
  }
  
  render() { 
   
   
    return (  
      <div className="container">
      <div className="row">
       <div className ="mx-auto mt-5 col-10 col-md-8">
        <h3 className="text-center text-capatalize">todo input</h3>
         <TodoInput 
           item={this.state.item}
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           editItem={this.state.editItem}
         />
         <TodoList
           items={this.state.items}
           clearList={this.clearList}
           handleEdit={this.handleEdit}
           handleDelete={this.handleDelete}
         />  
       </div>
       
      </div>
         
      </div>
    )
  }
}
 
export default App;