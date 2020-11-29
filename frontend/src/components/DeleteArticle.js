import React from 'react';

class DeleteArticle extends React.Component{
    deleteArticle(id){
        const url = ''+id;
        fetch(url, {
            method: 'DELETE'
        })
        this.props.stateRefresh();
    }

    render() {
        return(
            <button onClick={(e)=>this.deleteArticle(this.props.id)}>삭제</button>
        )
    }
}

export default DeleteArticle;