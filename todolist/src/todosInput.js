import React, {Component} from 'react';

class TodosInput extends Component {
    render() {
        return (
            <div>
                <div className="thingInput">
                    <input type="text"/>
                    <button>确定</button>
                </div>
            </div>

        )
    }
}

export default TodosInput;