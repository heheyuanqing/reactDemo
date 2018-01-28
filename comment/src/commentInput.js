import React,{Component} from 'react';


class CommentInput extends Component{
   /* static propTypes={
      submit:propTypes.func
    };*/
    constructor(){
        super();
        this.state = {
            usrName:'',
            content:''
        };
    }

    getUsrName(e){
        this.setState({usrName:e.target.value});
    }
    getContent(e){
        this.setState({content:e.target.value});
    }

    submit(){
        if(this.props.onSubmit){
            var {usrName,content} = this.state;
            this.props.onSubmit({usrName,content})
        }
        this.setState({content:''});
    }

    componentDidMount(){
        this.textarea.focus();
    }

    render(){
        return(
            <div className="comment">
               <div className="commentFiled">
                   <span>用户名&nbsp; &nbsp;&nbsp;：</span>
                   <div className="usrName">
                       <input type="text" value={this.state.usrName} onChange={this.getUsrName.bind(this)}/>
                  </div>
               </div>

                <div className="commentFiled">
                    <span>评论内容：</span>
                    <div className="content">
                       <textarea value={this.state.content} onChange={this.getContent.bind(this)} ref={(textarea)=>this.textarea = textarea}/>
                   </div>
                </div>
                <button onClick={this.submit.bind(this)}>submit</button>
            </div>
        )
    }
}
export default CommentInput;