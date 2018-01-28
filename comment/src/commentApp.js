import React,{Component} from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';

class CommentApp extends Component{
    constructor(){
        super();
        this.state = {comments:[]}
    }

    componentWillMount(){
        this._loadComments();
    }
    _loadComments(){
        var comments = localStorage.getItem('comments');
        if (comments){
            comments = JSON.parse(comments);
            this.setState({comments});
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    printContent(comment){
        if(!comment) return ;
        if(!comment.usrName) return alert("输入用户名");
        if(!comment.content) return alert("输入内容");
        var comments = this.state.comments;
        this.setState({comment});
        comments.push(comment);
        this._saveComments(comments);
        // this.state.comments.push(comment);
        // this.setState({comments:this.state.comments});
    }
    handleDelete(index){
        var comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this._saveComments(comments);
    }
    render(){
        return (
            <div>
                <CommentInput onSubmit={this.printContent.bind(this)} />
                <CommentList comments={this.state.comments} onDeletComment={this.handleDelete.bind(this)}/>
            </div>
        )
    }
}
export default CommentApp;