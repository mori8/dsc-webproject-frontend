import React, { Component } from 'react';

const Article = ({ match }) => {
    return (
        <div>
            <h2>{match.params.id}번째 글</h2>
            <p>이제 여기서 id 값으로 백에서 데이터 Fetch해와서 띄우면 Read 구현 완료입니다!</p>
        </div>
    )
}

export default Article;