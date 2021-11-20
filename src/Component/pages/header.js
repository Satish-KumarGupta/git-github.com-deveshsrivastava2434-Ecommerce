import React from 'react'
import {NavLink ,Link} from 'react-router-dom';

export default function Header() {
    return (
    <div>

    {/* <!-- Header Section Begin --> */}
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <nav className="header__logo">
                        <Link to="/"><img src="img/logo.png" alt=""/></Link>
                    </nav>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul >
                            <li className="active"><Link to="/home"  className="nav-link">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="#">Pages</Link>
                                <ul className="header__menu__dropdown">
                                    <li><Link to="./#">Shop Details</Link></li>
                                    <li><Link to="./#">Shoping Cart</Link></li>
                                    <li><Link to="./#">Check Out</Link></li>
                                    <li><Link to="./#">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                            <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
        {/* <!-- Header Section End --> */}
      
</div>
    )
}

