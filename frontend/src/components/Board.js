import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

class Board extends Component {
    state = {
        information: [{
          id: "1",
          title: "hi! this is test",
          description: "Is it romantic how all my elegies\
          Eulogize me?\
          I'm not cut out for all these cynical clones\
          These hunters with cellphones",
          author: "soo",
          date: "2020-11-14",
          hits: 0
        },
        {
          id: "2",
          title: "엥 이게 되네 읭 엥",
          description: "Take me to the lakes, where all the poets went to die\
          I don't belong, and my beloved, neither do you\
          Those Windermere peaks look like a perfect place to cry\
          I'm settin' off, but not without my muse",
          author: "soo",
          date: "2020-11-15",
          hits: 0
        }
      ],
    }
    render() {
        const style = {
            width: "85%",
            margin: "20px auto",
        }

        const list = this.state.information.map(
            info => (<ArticleItem info={info} key={info.id}/>)
        );
        return (
            <div>
               <table className="table" style={style}>
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

export default Board