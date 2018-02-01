import React,{Component} from 'react';
import Thing from './thing';

class ThingList extends Component{
    render(){
        return(
            <div className="thingsList">
                {this.props.things.map((thing,i)=><Thing thing={thing} key={i}/>)}
            </div>
        );
    }
}
export default ThingList;