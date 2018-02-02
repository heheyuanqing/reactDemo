import React, {Component} from 'react';
import './app.css';
import Title from './title';
import TodosInput from './todosInput';
import ThingList from './thingList';

class TodoListApp extends Component {
    constructor() {
        super();
        this.state = {things: []}
    }

    componentWillMount(){
        this._loadThings();
    }
    printThings(thing) {
        if (!thing) return alert("请输入");
      var things = this.state.things;
      this.setState({thing});
      things.push(thing);
      this._saveThings(things);

    }

    _loadThings() {
        var things = localStorage.getItem('things');
        if (things) {
            things = JSON.parse(things);
            this.setState({things});

        }
    }

    _saveThings(things) {
       localStorage.setItem('things', JSON.stringify(things))
    }

    handleDeleteThing(index){
        var things = this.state.things;
        things.splice(index,1);
        this.setState({things});
        this._saveThings(things);
    }

    render() {
        return (
            <div className="container">
                <Title/>
                <TodosInput onTransmit={this.printThings.bind(this)}/>
                <ThingList things={this.state.things} onDeleteThing={this.handleDeleteThing.bind(this)}/>
            </div>
        )
    }
}

export default TodoListApp;