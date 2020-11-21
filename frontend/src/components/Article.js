import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

/* 참고자료
* https://react.vlpt.us/integrate-api/01-basic.html
*/

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const Article = ({ match }) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchArticles = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

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
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    )
}

export default Article;