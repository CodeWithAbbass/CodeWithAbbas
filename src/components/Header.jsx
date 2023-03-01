import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';
import SidebarCV from './SidebarCV';
const Header = () => {

    const [isActive, setIsActive] = useState("");
    const [className, setClassName] = useState("");
    const location = useLocation();
    const HideAndSeek = (Elem) => {

        if (Elem === "CV") {
            if (isActive === "CV") {
                setIsActive("");
                setClassName("");
            } else {
                setIsActive("CV");
                setClassName("ActiveCVBtn");
            }
        } else {
            if (isActive === "Menu") {
                setIsActive("");
                setClassName("");
            } else {
                setIsActive("Menu");
                setClassName("ActiveMenuBtn");
            }
        }
    }
    useEffect(() => {

        //  eslint-disable-next-line
    }, [location])
    return (
        <div className='Header d-flex justify-content-between align-items-center h-100'>
            <button className={`Portfolio bg-transparent rounded-0 border-0 shadow-none p-0 ${className}`}>
                <i className='fas fa-ellipsis-v' onClick={() => HideAndSeek("CV")}></i>
            </button>
            <Link to='/' className='text-warning CodeWithAbbas'>CodeWithAbbas</Link>
            <button className={`Header_Hamburger bg-transparent rounded-0 border-0 shadow-none p-0 ${className}`} >
                <i className={`fa-solid fa-bars ${isActive === "Menu" ? "Hide_Hamburger" : ""}`} onClick={() => HideAndSeek("Menu")}></i>
            </button>

            <div className={`Header_SidebarCV_Container ${isActive === "CV" ? "activeCVContainer" : ""}`}>
                <SidebarCV />
            </div>

            <div className={`Header_SidebarMenu_Container ${isActive === "Menu" ? "activeMenuContainer" : ""}`}>
                <div className="SidebarMenu_Header">
                    <i className={`fa-solid fa-xmark ${isActive === "Menu" ? "Active_Xmark" : "Hide_Hamburger"} `} onClick={() => HideAndSeek("Menu")}></i>
                </div>
                <ul className="list-group bg-transparent py-5 text-start">
                    <li className={`list-group-item bg-transparent border-0 p-0 ${isActive === "Menu" ? "ActiveMenuItem" : ""}`}><Link to='/' className={`${location.pathname === '/' ? "ActiveList" : ""}`} onClick={() => HideAndSeek("Menu")}>Home</Link></li>
                    <li className={`list-group-item bg-transparent border-0 p-0 ${isActive === "Menu" ? "ActiveMenuItem" : ""}`}><Link to='/contact' className={`${location.pathname === '/contact' ? "ActiveList" : ""}`} onClick={() => HideAndSeek("Menu")}>Contact</Link></li>
                    <li className={`list-group-item bg-transparent border-0 p-0 ${isActive === "Menu" ? "ActiveMenuItem" : ""}`}><Link to='/history' className={`${location.pathname === '/history' ? "ActiveList" : ""}`} onClick={() => HideAndSeek("Menu")}>History</Link></li>
                    <li className={`list-group-item bg-transparent border-0 p-0 ${isActive === "Menu" ? "ActiveMenuItem" : ""}`}><Link to='/portfolio' className={` ${location.pathname === '/portfolio' ? "ActiveList" : ""}`} onClick={() => HideAndSeek("Menu")}>Portfolio</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
