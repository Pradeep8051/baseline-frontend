import React, { useState, useEffect } from 'react'
import './Nav.less'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [navbar, setNavbar] = useState(false)//scroll
    const [search, setSearch] = useState(false)


    const handlesearch = (e) => {
        setNavbtn(e.target.value)
    }
    const searchbtnnav = () => {
        setSearch(false)

    }


    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    const navigate = useNavigate()
    const contactpagebtn = () => {
        navigate('/contactpage')
    }
    return (
        <>
            <header style={{ background: !navbar ? "none" : "white" }}>
                <div className="container">
                    <div className="navmain smnav ">
                        <div className="col-md-3 col-sm-5  navbar__logo">
                            <a href="https://baselineitdevelopment.com/">
                                <img style={{ width: "60%" }} src="https://i.postimg.cc/kMjdp3Hb/baselinelogo.png" alt="baselinelogo" className="base-logo" />
                            </a>
                        </div>
                        {/* ----- list  */}
                        <div className="col-md-5 col-sm-0  navbar__menus">
                            <ul className='nav__list'>
                                <li><NavLink className='nav_list-link btn from-top' to="/"><span>HOME</span></NavLink></li>
                                <li><NavLink className='nav_list-link btn from-top' to='/about'><span>ABOUT</span></NavLink></li>
                                <div className="serviceoptaion">
                                    <li className='drop-down-li'><NavLink className='nav_list-link' to='/services'>SERVICE</NavLink></li>
                                    <ul className='service-dropdown' >
                                        <li><NavLink to="/Webdevelopment" className='service-option-link'>Web development</NavLink></li>
                                        <li><NavLink to="/WebdesignPage" className='service-option-link'>Web designing</NavLink></li>
                                        <li><NavLink to="/DigitalMarketing" className='service-option-link'>Digital Marketing</NavLink></li>
                                        <li><NavLink to="/SEOPage" className='service-option-link'>SEO</NavLink></li>
                                    </ul>
                                </div>
                                <li><NavLink className='nav_list-link btn from-top' to="/Career"><span>CAREER</span></NavLink></li>
                                <li><NavLink className='nav_list-link btn from-top' to="/blog"><span>BLOG</span></NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-7  navbar__contact-search">
                            {
                                !search ?
                                    <>

                                        <div className="contact-btn">
                                            <button className="btn-contact_link" type='button' onClick={contactpagebtn}>Contact us<span><i style={{ paddingLeft: "10px" }} className="fa-solid fa-phone"></i></span></button>
                                        </div>
                                        <div className="nav-search">
                                            <span className='search_icon' onClick={() => setSearch(!search)}><i className="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </> : <form className="d-flex">
                                        <input className="form-control me-2" onChange={handlesearch} type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn" style={{ background: "#bb372a", color: "white", fontWeight: "600" }} type="button" onClick={searchbtnnav}>Search</button>
                                    </form>
                            }
                            <div className=' '><i class="fa fa-bars" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default NavBar