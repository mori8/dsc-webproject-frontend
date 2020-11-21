import React, { Component } from 'react';
import { post } from 'axios';
let id = 0;

/* 참고자료: 
* https://ndb796.tistory.com/222
 */

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            username: "",
            body: "",
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.addArticle = this.addArticle.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.addArticle().then((res) => {
            console.log(res.data);
        });
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addArticle() {
        // TODO: url 받으면 채워넣기
        const url = '';
        const formData = new FormData();
        let date = new Date();

        formData.append('id', id++);
        formData.append('title', this.state.title);
        formData.append('username', this.state.username);
        formData.append('body', this.state.body);
        // TODO: date.getMonth() + 1 계산되는지 확인
        formData.append('date', date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate());

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }


    render() {
        const formStyle = {
            width: "85%",
            margin: "20px auto",
        }

        const upperFormStyle = {
            width: "65%",
        }

        const textAreaStyle = {
            display: "block",
            margin: "15px",
        }

        const btnDivStyle = {
            margin: "5px",
            marginRight: "15px",
            float: "right",
        }

        const btnStyle = {
            margin: "5px",
        }
        // TODO: onSubmit 구현
        return (
            <form style={formStyle} onSubmit={this.handleFormSubmit}>
                <h3>글 작성하기</h3>
                <div className="form-row" style={upperFormStyle}>
                    <div className="form-group col-md-6">
                        <label>제목</label>
                        <input type="text" name="title" className="form-control" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>이름</label>
                        <input type="text" name="username" value={this.state.username} className="form-control" placeholder="이름" onChange={this.handleValueChange}/>
                    </div>
                </div>

                <div className="form-group" style={textAreaStyle}>
                    <label style={upperFormStyle}>내용</label>
                    <textarea className="form-control" name="body" value={this.state.body} rows="20" onChange={this.handleValueChange}></textarea>
                </div>
                <div style={btnDivStyle}>
                    <button type="submit" className="btn btn-primary" style={btnStyle}>작성하기!</button>
                    <button type="button" className="btn btn-secondary">취소</button>
                </div>
            </form>
        );
    }
}

export default CreateArticle;