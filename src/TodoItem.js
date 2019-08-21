import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        const {content}=this.props;
        return(
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
TodoItem.propTypes={
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired

}
export default TodoItem;
