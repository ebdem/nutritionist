import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faAnchor, faAngleRight, faBacteria, faFax, faTable} from '@fortawesome/free-solid-svg-icons';


const Footer = () =>{
    return(
        <>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">Adıyaman Diyetisyen</h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea
                                        commodo consequat duis sed aute irure.
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">Phone .</span> contact@example.com
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">Email .</span> +54 356 945234
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">The Company</h3>
                                </div>
                                <div className="w-body-a">
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Site Map</a>
                                            </li>
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Food</a>
                                            </li>
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Admin</a>
                                            </li>
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Careers</a>
                                            </li>
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Sport</a>
                                            </li>
                                            <li className="item-list-a">
                                                <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">International sites</h3>
                                </div>
                                <div className="w-body-a">
                                    <ul className="list-unstyled">
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Venezuela</a>
                                        </li>
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">China</a>
                                        </li>
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Hong Kong</a>
                                        </li>
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Argentina</a>
                                        </li>
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Singapore</a>
                                        </li>
                                        <li className="item-list-a">
                                            <FontAwesomeIcon icon={faAngleRight}/> <a href="#">Philippines</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav-footer">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">About</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Property</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faFax}/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faTable}/>                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faBacteria}/>                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faAddressBook}/>                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faAnchor}/>                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright
                                    <span className="color-a">  9576HOME</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">

                                Designed by <a href="https://bootstrapmade.com/">9576HOME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
