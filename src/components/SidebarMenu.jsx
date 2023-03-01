import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/SidebarMenu.css';

const SidebarMenu = ({ setIsOpen }) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false)

    const HideAndSeek = () => {
        if (isActive) {
            setIsOpen(false)
            setIsActive(false)
        } else {
            setIsOpen(true);
            setIsActive(true);
        }
    }

    useEffect(() => {
        //  eslint-disable-next-line
    }, [location])
    return (
        <aside className={`SidebarMenu ${isActive ? "Open" : ""}`}>
            <div className="SidebarMenu_Hamburger text-start" >
                <i className={`fa-solid fa-bars  ${isActive ? "" : "active"}`} onClick={HideAndSeek}></i>
                <i className={`fa-solid fa-xmark ${isActive ? "active" : ""} `} onClick={HideAndSeek}></i>
            </div>
            <ul className="list-group bg-transparent py-5 text-start">
                <li className={`list-group-item bg-transparent border-0 p-0 ${isActive ? "ActiveMenuItem" : ""}`}><Link to='/' className={`${location.pathname === '/' ? "ActiveList" : ""}`} onClick={HideAndSeek}>Home</Link></li>
                <li className={`list-group-item bg-transparent border-0 p-0 ${isActive ? "ActiveMenuItem" : ""}`}><Link to='/contact' className={`${location.pathname === '/contact' ? "ActiveList" : ""}`} onClick={HideAndSeek}>Contact</Link></li>
                <li className={`list-group-item bg-transparent border-0 p-0 ${isActive ? "ActiveMenuItem" : ""}`}><Link to='/history' className={`${location.pathname === '/history' ? "ActiveList" : ""}`} onClick={HideAndSeek}>History</Link></li>
                <li className={`list-group-item bg-transparent border-0 p-0 ${isActive ? "ActiveMenuItem" : ""}`}><Link to='/portfolio' className={` ${location.pathname === '/portfolio' ? "ActiveList" : ""}`} onClick={HideAndSeek}>Portfolio</Link></li>
            </ul>

            <p className={`SidebarMenu_PageName mb-0  ${isActive ? "HidePageName" : ""}`}>
                {location.pathname === '/' ? "Home" : location.pathname.slice(1)}
            </p>
        </aside>
    )
}

export default SidebarMenu
