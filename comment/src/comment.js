import React,{Component} from 'react';

class Comment extends Component{

    handleDelet(){
        if(this.props.onDeletComment){
            this.props.onDeletComment(this.props.index);
        }
    }

    render(){
        return(
            <div className="commentArea">
                <span>{this.props.comment.usrName}:</span>
                <div className="contentView">{this.props.comment.content} </div>
                <button className="delet" onClick={this.handleDelet.bind(this)}>删除</button>
            </div>
        )
    }
}
export default Comment;