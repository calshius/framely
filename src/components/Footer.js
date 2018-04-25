import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/beapartofourframely" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="maureensleigh@aol.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
