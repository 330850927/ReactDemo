import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render(){
        const {content,test}=this.props;
        return(
            <div onClick={this.handleClick}>
                {test}-{content}
            </div>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired

}
TodoItem.defaultProps={
    test:'hello world'
}
export default TodoItem;
