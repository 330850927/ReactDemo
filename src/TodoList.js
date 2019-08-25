import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInputChangeAction,getAddTodoItemAction,getDelTodoListAction,initListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handelStoreChange=this.handelStoreChange.bind(this);
        this.handleBtnItem=this.handleBtnItem.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handelStoreChange);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnItem={this.handleBtnItem}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    componentDidMount(){
        axios.get(
            '/list.json'
        ).then((res)=>{
            const data=res.data;
            const action=initListAction(data);
            store.dispatch(action);
        }).catch((err)=>{

        });
    }
    handleInputChange(e){
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handelStoreChange(){
        this.setState(store.getState());
    }
    handleBtnItem(){
        const action=getAddTodoItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action=getDelTodoListAction(index);
        store.dispatch(action);
    }
}
export default TodoList
