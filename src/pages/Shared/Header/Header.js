import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import { FaUser } from 'react-icons/fa'
import { useContext } from 'react';
import { OAuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(OAuthContext)


    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        {user?.uid ?
            <>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/about'>About Me</NavLink></li>
                <li><NavLink to='/myreview'>MyReview</NavLink></li>
                <li><NavLink to='/addservice'>Add Service</NavLink></li>

            </>
            :
            <>
                <li><NavLink to='/' className='mr-7'>Home</NavLink></li>
                <li><NavLink to='/services' className='mr-7'>Services</NavLink></li>
                <li><NavLink to='/blog' className='mr-7'>Blog</NavLink></li>
                <li><NavLink to='/about'>About Me</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 h-24 mt-1 mb-5 p-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to='/'><img style={{ height: 90 }} src={logo} alt="" /></NavLink>
            </div>

            {/* center navbar */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu font-semibold menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


            {/* end navbar */}
            <div className="navbar-end">
                {/*---------------------
                 display user info 
                 ---------------------*/}
                <div className='flex items-center justify-center ml-3'>

                    {/*-------------------------------
                    diplay user photo and show name as tooltip 
                    ---------------------------------*/}
                    <div className=" avatar tooltip tooltip-bottom mr-2" data-tip={user?.displayName}>
                        {
                            user?.photoURL ?
                                <div className="dropdown w-16 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                :
                                <FaUser></FaUser>
                        }
                    </div>

                    {/*------------------------------------ toggle between login and logout Navlink 
                    --------------------------------------*/}
                    <div>
                        {
                            user?.uid ?
                                <div>
                                    <button onClick={handleLogout} className='btn btn-sm'>Logout</button>
                                </div>
                                :
                                <div className='flex'>
                                    <NavLink to='/login' className='mr-2'><button className='btn btn-xs btn-success ml-2'>Login</button></NavLink>
                                    <NavLink to='/register' className='mr-2'><button className='btn btn-xs btn-primary'>Register</button></NavLink>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;