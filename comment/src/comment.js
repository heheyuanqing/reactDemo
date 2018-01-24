import React,{Component} from 'react';

class Comment extends Component{
    render(){
        return(
            <div className="commentArea">
                <span>{this.props.comment.usrName}:</span>
                <div className="contentView">{this.props.comment.content} </div>
            </div>
        )
    }
}
export default Comment;