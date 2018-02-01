import React,{Component} from 'react';

class Thing extends Component{
    render(){
        return(
            <div className="thing">
                <input type="radio"/>
                <span>{this.props.thing.thing}</span>
            </div>
        )
    }
}
export default Thing;