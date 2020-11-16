import React, { Component } from 'react';

class article extends Component {
    render() {
        // props.info에서 title, author, date, hits 정보 가져오기
        const {id, title, author, date, hits } = this.props.info;
        const link = "/article/" + id;
        return (
            <tr>
                <td>{id}</td><td><a href={link} className="black">{title}</a></td><td>{author}</td><td>{date}</td><td>{hits}</td>
            </tr>
        );
    }
}

export default article;