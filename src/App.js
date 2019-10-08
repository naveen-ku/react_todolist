import React from 'react';
import Item from './Item'
import itemData from './itemData'

import './style.css'


class App extends React.Component{
    constructor(){
        super()
        this.state ={
            todos: itemData,
        }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const updateditemData = prevState.todos.map(todo =>{
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos :updateditemData
            }
        })
    }

    render(){
        const listComponent = this.state.todos.map((listdata) => {
            return(<Item  key={listdata.id} data={listdata} handleChange={this.handleChange}/>)
        })
        return(
            <div>
                {listComponent}
            </div>
        )
    }
}

export default App;