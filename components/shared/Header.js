import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {

    render () {
        const title =  this.props.title;

        return (
            <React.Fragment>
                <p>{ title }</p>
                {this.props.children}
                <p className='customClass'>Eu sou um Style elemento P</p>

                <Link href="/">
                    <a style={{'fontSize': '20px'}}> Home </a>
                </Link>

                <Link href="/sobre"> 
                    <a> Sobre </a>
                </Link>
                <Link href="/portfolios"> 
                    <a> Portfolios </a>
                </Link>
                <Link href="/blogs"> 
                    <a> Blogs </a>
                </Link>
                <Link href="/cv"> 
                    <a> CV </a>
                </Link>
                <style jsx>
                {
                    `
                    a {
                        font-size: 20;
                    };
                    .customClass {
                        color: red;
                    }
                    `
                }
                </style>
            </React.Fragment>

            /*{/* <a href="/sobre"> Sobre </a>
            <a href="/portfolios"> Portfolios </a>
            <a href="/blogs"> Blogs </a>
            <a href="/cv"> Cv </a> }*/
        )
    }
}

export default Header;