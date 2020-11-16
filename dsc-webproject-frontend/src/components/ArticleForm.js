import React, { Component } from 'react';

class ArticleForm extends Component {
    render() {
        return (
            <div>
                <h2>글 작성하기</h2>
                <form action="/create_article" method="post" onSubmit={function(e){
                    e.preventDefault();
                    alert("submit");
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="제목"></input>
                    </p>
                    <p>
                        <input type="text" name="desc" placeholder="내용"></input>
                    </p>
                    <p>
                        <input type="submit" value="작성하기"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default ArticleForm;