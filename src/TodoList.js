import React, {Component, Fragment} from 'react';
import "./style.css";
class TodoList extends Component{
    constructor(props){
        super(props);
        //组件状态
        this.state={
            inputValue:'',
            list:[]
        }
    }
    render(){
        return(
            <Fragment>
                {/*下面是一个input框*/}
                <div>
                    <label htmlFor="insertArea">输入姓名：</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                {/*下面是搜索历史*/}
                <ul>
                    {this.state.list.map((item,index)=>{
                            return (
                                <li key={index}
                                    onClick={this.handleItemDelete.bind(this,index)
                                    }>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        });

    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleItemDelete(index){
        //immutable
        //state 不允许我们直接修改
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}
export default TodoList;

