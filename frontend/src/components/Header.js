import React, { Component, Fragment } from 'react';
import '../shared/App.css'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <a href="/board" className="logo"><span>리액트처음해봄🌻</span></a>
                    <div className="spacer"></div>
                    <a href="/create"><button type="button" className="btn createBtn">글쓰기</button></a>
                </header>
            </Fragment>
        );
    }
}

export default Header;