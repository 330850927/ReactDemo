import React  from 'react';
import { Input , Button , List} from 'antd';

const TodoListUI = (props)=>{
    return (
        <div>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='请填写内容'
                    style={{width:'300px'}}
                    onChange={props.handleInputChange}
                />
                <Button onClick={props.handleBtnItem} type='primary'>添加</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item>{item}<Button type='primary' onClick={()=>{props.handleItemDelete(index)}}>删除</Button></List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;