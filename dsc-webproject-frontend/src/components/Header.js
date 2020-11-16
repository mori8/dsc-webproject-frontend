import React, { Component, Fragment } from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <span>리액트처음해봄🌻</span>
                    <div class="spacer"></div>
                    <button type="button" className="btn btn-info">글쓰기</button>
                </header>
            </Fragment>
        );
    }
}

