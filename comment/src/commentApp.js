import React,{Component} from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';

class CommentApp extends Component{
    constructor(){
        super();
        this.state = {comments:[]}
    }
    printContent(comment){
        console.log(comment);
        this.state.comments.push(comment);
        this.setState({comments:this.state.comments});
    }
    render(){
        return (
            <div>
                <CommentInput onSubmit={this.printContent.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}
export default CommentApp;