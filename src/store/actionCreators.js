import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DEL_TODO_LIST,INIT_LIST_ITEM} from './actionType';

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddTodoItemAction=()=>({
    type:ADD_TODO_ITEM,
});
export const getDelTodoListAction=(index)=>({
    type:DEL_TODO_LIST,
    index
});
export const initListAction=(data)=>({
    type:INIT_LIST_ITEM,
    data
})