import React,{Component} from 'react';
import Thing from './thing';

class ThingList extends Component{
    render(){
        return(
            <div className="thingsList">
                <Thing/>
            </div>
        );
    }
}
export default ThingList;