import React,{Component} from 'react';

class Thing extends Component{
    handleDelete(){
        if(this.props.onDeleteThing){
            this.props.onDeleteThing(this.props.index);
        }
    }
    render(){
        return(
            <div className="thing">
                <input type="radio"/>
                <span>{this.props.thing.thing}</span>
                <button className="delete" onClick={this.handleDelete.bind(this)}>X</button>
            </div>
        )
    }
}
export default Thing;