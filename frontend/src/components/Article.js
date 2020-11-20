import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* 참고자료
* https://react.vlpt.us/integrate-api/01-basic.html
*/

const Article = ({ match }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let article = null;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // 요청이 시작되면 error와 articles를 초기화하고
                setError(null);
                setArticles(null);
                // loading의 상태를 true로 바꿔주기
                setLoading(true);
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                setArticles(response.data); // 글 정보들은 response 안에 저장되어 있음
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!articles)
        return null;
    else {
        article = articles[match.params.id - 1];
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    )
}

export default Article;