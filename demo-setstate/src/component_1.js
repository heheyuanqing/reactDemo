import React, {Component} from 'react';

class ComponentsetState extends Component {
    constructor() {
        super();
        this.state={
            name: "heheyuanqing",
            age: 18
        };
    }

    changeState = function () {
        this.setState({
            name: "superman",
            age: 25
        },function () {
            console.log(this.state);
        });
        // console.log(this.state);
/*
        setTimeout(()=>{
            this.setState({
                name: "superwoman",
                age: 25
            });
            console.log(this.state);
        },0);
*/

    }

    render() {

        return (
            <div className="parent">
                <div>name:{this.state.name}</div>
                <div>age:{this.state.age}</div>
                <button onClick={this.changeState.bind(this)}>修改</button>
            </div>
        )
    }

}

export default ComponentsetState;
