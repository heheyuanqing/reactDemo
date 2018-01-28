import React,{Component} from 'react';
import Comment from "./comment";

class CommentList extends Component{;
    static defaultProps = {comments:[]};

    hadleDelet(index){
        if (this.props.onDeletComment){
            this.props.onDeletComment(index);
        }
    }

    render(){
        return(
            <div>
                {this.props.comments.map((comment,i)=><Comment comment={comment} key={i} index={i} onDeletComment={this.hadleDelet.bind(this)}/>)}
            </div>
        )
    }
}

export default CommentList;