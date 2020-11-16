import React, { Component, Fragment } from 'react';

class CreateArticle extends Component {
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
        // TODO: onClick 구현
        return (
            <form style={formStyle}>
                <div class="form-row" style={upperFormStyle}>
                    <div class="form-group col-md-6">
                        <label for="title">제목</label>
                        <input type="email" class="form-control" id="title" placeholder="제목"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="name">이름</label>
                        <input type="password" class="form-control" id="name" placeholder="이름"/>
                    </div>
                </div>

                <div class="form-group" style={textAreaStyle}>
                    <label for="exampleFormControlTextarea1" style={upperFormStyle}>내용</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="20"></textarea>
                </div>
                <div style={btnDivStyle}>
                    <button type="submit" class="btn btn-primary" style={btnStyle}>작성하기!</button>
                    <button type="button" class="btn btn-secondary">취소</button>
                </div>
            </form>
        );
    }
}

export default CreateArticle;