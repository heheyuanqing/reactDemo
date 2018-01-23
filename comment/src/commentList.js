import React,{Component} from 'react';
import Comment from "./comment";

class CommentList extends Component{
    render(){
        return(
            <div>
                <Comment/>
                <Comment/>
            </div>
        )
    }
}

export default CommentList;