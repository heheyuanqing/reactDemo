import React,{Component} from 'react';
import Thing from './thing';

class ThingList extends Component{

    handleDeleteThing(index){
        if(this.props.onDeleteThing){
            this.props.onDeleteThing(index);
        }
    }
    render(){
        return(
            <div className="thingsList">
                {this.props.things.map((thing,i)=><Thing thing={thing} key={i} index={i} onDeleteThing={this.handleDeleteThing.bind(this)}/>)}
            </div>
        );
    }
}
export default ThingList;