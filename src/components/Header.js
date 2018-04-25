import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/framely.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>FRAMELY</strong>, a scottish based<br />
                    family run frame design service
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
