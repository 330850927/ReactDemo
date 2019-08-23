import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input , Button , List} from 'antd';
import store from './store/index';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
    }
    render(){
        return(
            <div>
                <div>
                    <Input value={this.state.inputValue} placeholder='todo info' style={{width:'300px'}}/>
                    <Button type='primary'>添加</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TodoList
