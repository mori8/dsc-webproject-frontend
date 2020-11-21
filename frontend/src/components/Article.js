import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import useAsync from '../lib/useAsync';
import '../shared/App.css'

/* 참고자료
* https://react.vlpt.us/integrate-api/01-basic.html
*/

const getUsers = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
}

const Article = ({ match }) => {
    const [state, refetch] = useAsync(getUsers, []);
    const { loading, data: articles, error } = state;
    let article = null;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!articles)
        return null;
    else {
        article = articles[match.params.id - 1];
    }

    return (
        <div className="article" key={article.id}>
            <h2 className="article-title">{article.title}</h2>
            <div className="article-info">
                <p className="article-userid">userId: {article.userId}</p>
                <div className="spacer"></div>
                <p className="article-id">글번호: {article.id}</p>
            </div>
            <p className="article-body">{article.body}</p>
        </div>
    )
}

export default Article;