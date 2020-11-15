import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<Article info={info} key={info.id}/>)
        );
        return (
            <div>
               <table className="table">
                   <thead>
                        <tr><td>번호</td><td>제목</td><td>작성자</td><td>작성일</td><td>조회수</td></tr>
                   </thead>
                   <tbody>
                        {list}
                   </tbody>
                   
               </table>
            </div>
        );
    }
}

export default ArticleList