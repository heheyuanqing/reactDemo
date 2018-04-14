import React,{Component} from 'react';

class Thing extends Component{
    constructor(){
        super();
        this.state={alreadyClick:false}
    }

    handleDelete(){
        if(this.props.onDeleteThing){
            this.props.onDeleteThing(this.props.index);
        }
    }
    changeSpan(){
        this.setState({
            alreadyClick:!this.state.alreadyClick
        });
        this.state.alreadyClick?this.span.className="":this.span.className="textStyle";

    }
    render(){

        return(
            <div className="thing">
                <input type="checkbox" onClick={this.changeSpan.bind(this)} />
                <span ref={(span)=>this.span=span} >{this.props.thing.thing}</span>
                <button className="delete" onClick={this.handleDelete.bind(this)}>X</button>
            </div>
        )
    }
}
export default Thing;