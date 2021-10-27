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
     editItem:false
   })
  }

  clearList = ()=>{
   this.setState({
     items: []
   })
  }

  handleEdit= (id)=>{
    const filteredItems =this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id=== id);
    this.setState({
      items: filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true
    })
  }

  handleDelete= (id)=>{
    const filteredItems =this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  
  render() { 
   
   
    return (  
      <div className="container">
      <div className="row">
       <div className ="mx-auto mt-5 col-10 col-md-8">
        <h3 className="text-center text-capatalize">Todo Input</h3>
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