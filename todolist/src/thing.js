import React,{Component} from 'react';

class Thing extends Component{
    render(){
        return(
            <div className="thing">
                <input type="radio"/>
                <span>完成ToDoList</span>
            </div>
        )
    }
}
export default Thing;