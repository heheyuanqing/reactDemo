import React,{Component} from 'react';
import './app.css';
import Title from './title';
import TodosInput from './todosInput';
import ThingList from './thingList';
class TodoListApp extends Component{
    render(){
        return(
            <div className="container">
                <Title/>
                <TodosInput/>
                <ThingList/>
            </div>
        )
    }
}
export default TodoListApp;