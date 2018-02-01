import React, {Component} from 'react';
import './app.css';
import Title from './title';
import TodosInput from './todosInput';
import ThingList from './thingList';

class TodoListApp extends Component {
    constructor() {
        super();
        this.state = {things:[]}
    }

    printThings(thing) {
        if (!thing) return alert("请输入");
        this.state.things.push(thing);
        this.setState({things: this.state.things});

    }

    render() {
        return (
            <div className="container">
                <Title/>
                <TodosInput onTransmit={this.printThings.bind(this)}/>
                <ThingList things={this.state.things}/>
            </div>
        )
    }
}

export default TodoListApp;