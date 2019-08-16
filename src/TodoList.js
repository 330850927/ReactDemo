import React, {Component, Fragment} from 'react';
import "./style.css";
import TodoItem from "./TodoItem";
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
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return(
            this.state.list.map((item,index)=>{
                return (
                        <TodoItem
                            key={index}
                            content={item}
                            index={index}
                            deleteItem={this.handleItemDelete.bind(this)}
                        />
                )
            })
        )
    }
    handleInputChange(e){
        const value=e.target.value;
        this.setState(()=>({
            inputValue:value
        })
        )
    }
    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }));
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
    }
    handleItemDelete(index){
        //immutable
        //state 不允许我们直接修改
        this.setState((prevState)=>{
            const list=[...prevState.list];
                list.splice(index,1);
            return{
                list
            }
        });
    }
}
export default TodoList;

