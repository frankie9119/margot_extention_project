import React, { Component } from 'react';
import bars from './bars-solid.svg';
import './NavBar.css';

import { Link } from "react-router-dom";



class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
            scrollingLock: false,
            icon: '',
            //scrolled: false,
            //classToUse: '`top-menu ${this.state.menu_class}`',
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        if (window.scrollY > 50) {
            console.log("should lock");
            this.setState({
                scrollingLock: true,

            });
        } else if (window.scrollY < 50) {
            console.log("not locked");
            this.setState({
                scrollingLock: false
            });
        }

    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
                icon: 'is-active',
            })
        } else {
            this.setState({
                menu_class: '',
                icon: '',
            })
        }
    }
    setIconHamburger = () => {
        if (this.state.icon === '') {
            this.setState({
                icon: 'is-active',
            })
        } else {
            this.setState({
                icon: '',
            })
        }
    }

    render = () => {
        let top_menu_class = `top-menu ${this.state.menu_class}`;
        let lineClass = this.state.scrollingLock ? "" : "testBackColor";
        let icon_hamburger = `hamburger hamburger--slider ${this.state.icon}`;


        return (
            
            <div className="navigatorBar">
                <div className={lineClass}>
                    <div className={top_menu_class}

                        style={
                            { 
                                width: "100%", 
                                top:0, 
                                position: this.state.scrollingLock ? "fixed" : "relative",
                                backgroundcolor: this.state.scrollingLock ? "orange" : "pink",
                            }}>       
                          <div className='left'>
                             <Link to="/" style={{ color: '#FFF' }}><p>Margot Soria </p></Link>
                           
                    </div>

                        <div className='right'>
                            <Link to="/CoachingComponent"><a href="" title="linsNav" target="_blank" className="linsNav">Coaching</a></Link>
                            <Link to="/ChanteuseComponent"><a href="" title="linsNav" target="_blank" className="linsNav">Chanteuse</a></Link>
                            <Link to="/ContactContainer"><a href="" title="linsNav" target="_blank" className="linsNav">Contact</a></Link>
                            
                        </div>
                        <div className={icon_hamburger} onClick={this.setToggleTopMenuClass}>
                            <div class="hamburger-box">
                                <div class="hamburger-inner"></div>
                            </div>
                        </div>  
                        <div className='clear-fix' /></div>
                </div>
            </div>
            

        )
    }
}
export default NavBar;