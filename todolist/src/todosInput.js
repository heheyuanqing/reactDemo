import React, {Component} from 'react';

class TodosInput extends Component {
    constructor(){
        super();
        this.state = {thing:''};
    }
    getThing(e){
        this.setState({thing:e.target.value});
    }
    onSubmit(){
        if (this.props.onTransmit){
            var {thing} = this.state;
            this.props.onTransmit({thing});
        }
        this.setState({thing:''});
    }
    render() {
        return (
            <div>
                <div className="thingInput">
                    <input type="text" value={this.state.thing} onChange={this.getThing.bind(this)}/>
                    <button onClick={this.onSubmit.bind(this)}>确定</button>
                </div>
            </div>

        )
    }
}

export default TodosInput;