import React from 'react';
import Link from 'next/link';


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link href="/">
                        <a className="navbar-brand text-brand">Adıyaman<span className="color-b">Diyetisyen</span></a>
                    </Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link active">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog"><a className="nav-link">Blog</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/program"><a className="nav-link">Program</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  href="#">Pages</a>
                                <div className="dropdown-menu">
                                    <Link href="#">
                                        <a className="dropdown-item">Dropdown 1</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="dropdown-item">Dropdown 2</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="dropdown-item">Dropdown 3</a>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
