import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/370-dandellions.jpg'
import thumb02 from '../assets/images/thumbs/370-dark-cow.jpg'
import thumb03 from '../assets/images/thumbs/370-dark-thistle.jpg'
import thumb04 from '../assets/images/thumbs/370-light-deer.jpg'
import thumb05 from '../assets/images/thumbs/370-red-deer.jpg'
import thumb06 from '../assets/images/thumbs/370-tartan-dog.jpg'
import thumb07 from '../assets/images/thumbs/370-thistle.jpg'

import full01 from '../assets/images/fulls/740-dandellions.jpg'
import full02 from '../assets/images/fulls/740-dark-cow.jpg'
import full03 from '../assets/images/fulls/740-dark-thistle.jpg'
import full04 from '../assets/images/fulls/740-light-deer.jpg'
import full05 from '../assets/images/fulls/740-red-deer.jpg'
import full06 from '../assets/images/fulls/740-tartan-dog.jpg'
import full07 from '../assets/images/fulls/740-thistle.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'more information required.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'more information required.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'more information required.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'more information required.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'more information required.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'more information required.'},
    { id: '7', src: full06, thumbnail: thumb07, caption: 'Photo 7', description: 'more information required.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Requires more info<br />
                            requires more info.</h2>
                        </header>
                        <p></p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Back to the top</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>information about getting in touch, like what to put in the email etc.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
