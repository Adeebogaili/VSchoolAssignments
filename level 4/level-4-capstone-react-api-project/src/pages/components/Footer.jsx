import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-about">
                    <div className="footer-fa-text">
                       <p>FMovies is a Free Movies streaming site with zero ads.
                        We let you watch movies online without having to register or paying, with over 10000 movies and
                        TV-Series.
                        You can also Download full movies from FMovies and watch it later if you want.</p> 
                    </div>
                    <div className="footer-fa-menu">
                        <a href="#" title="Android App">Android App</a>
                        <span className="space">-</span>
                        <a href="#" title="Terms of service">Terms of service</a>
                        <span className="space">-</span>
                        <a href="/#" title="Contact">Contact</a>
                        <span className="space">-</span>
                        <a href="#" title="Sitemap">Sitemap</a>
                        <span className="space">-</span>
                        <a href="" title="9anime" rel="dofollow" target="_blank">9anime</a>
                    </div>
                </div>
                <div className="footer-logo-block">
                    <div className="footer-logo-block">
                    <a className='footer-logo' href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/FMovies_Logo.png" alt="imbd-logo"/></a>

                        <p className="copyright">© FMovies</p>
                        <div className="notice">
                            <span>FMovies does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer