import React, { Component } from 'react';
import Board from "./Board";
import DeleteArticle from './DeleteArticle';

class articleItem extends Component {
    render() {
        // props.info에서 title, author, date, hits 정보 가져오기
        const {id, title, username, date, hits } = this.props.info;
        const link = "/board/" + id;
        return (
            <tr>
                <td>{id}</td>
                <td><a href={link} className="black">{title}</a></td>
                <td>{username}</td>
                <td>{date}</td>
                <td>{hits}</td>
                <td><DeleteArticle id={this.props.id}>삭제</DeleteArticle></td>
            </tr>
        );
    }
}

export default articleItem;