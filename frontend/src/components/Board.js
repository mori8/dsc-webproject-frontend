import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import CreateArticle from './CreateArticle';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: [{
              id: "1",
              title: "hi! this is test",
              body: "Is it romantic how all my elegies\
              Eulogize me?\
              I'm not cut out for all these cynical clones\
              These hunters with cellphones",
              username: "soo",
              date: "2020-11-14",
              hits: 0
            },
            {
              id: "2",
              title: "엥 이게 되네 읭 엥",
              body: "Take me to the lakes, where all the poets went to die\
              I don't belong, and my beloved, neither do you\
              Those Windermere peaks look like a perfect place to cry\
              I'm settin' off, but not without my muse",
              username: "soo",
              date: "2020-11-15",
              hits: 0
            }
          ],
        }

        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh() {
        this.setState({
            information: [{
                id: "1",
                title: "hi! this is test",
                body: "Is it romantic how all my elegies\
                Eulogize me?\
                I'm not cut out for all these cynical clones\
                These hunters with cellphones",
                username: "soo",
                date: "2020-11-14",
                hits: 0
              },
              {
                id: "2",
                title: "엥 이게 되네 읭 엥",
                body: "Take me to the lakes, where all the poets went to die\
                I don't belong, and my beloved, neither do you\
                Those Windermere peaks look like a perfect place to cry\
                I'm settin' off, but not without my muse",
                username: "soo",
                date: "2020-11-15",
                hits: 0
              }
            ],
        });
        // TODO: 이후 API 호출해서 setState
        // 참고할 자료: https://ndb796.tistory.com/229?category=1030599
    }

    render() {
        const style = {
            width: "85%",
            margin: "20px auto",
        }
 
        const list = this.state.information.map(
            info => (<ArticleItem stateRefresh={this.stateRefresh} info={info} key={info.id}/>));

        return (
            <div>
               <table className="table" style={style}>
                   <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                            <td>조회수</td>
                            <td>삭제</td>
                        </tr>
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