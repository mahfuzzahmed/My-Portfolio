import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 border-b-2 border-black py-5 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-extrabold">Mahfuj Ahmed</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a target="_blank" href="https://drive.google.com/drive/folders/1ZZeiXKRgHJkOvYGmVSZD9OBzv87vzkVz?usp=sharing"><button className="btn btn-outline text-2xl font-extrabold">Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;