import {BsGithub, BsBell} from 'react-icons/bs'
import logo from '../logo.svg';
import {MdArrowDropDown} from 'react-icons/md'
const Header = () => {
    return ( 
        <div className="header">
            <div className='left'>
                <div>
                    <a href='# '><BsGithub className='logo' /></a>
                    <input type="text" placeholder='Search or jump to...' />
                </div>
                <div className='links'>
                    <a href='# '>Pull requests</a>
                    <a href='# '>Issues</a>
                    <a href='# '>Codespaces</a>
                    <a href='# '>Marketplace</a>
                    <a href='# '>Explore</a>
                </div>
            </div>
            <div className='right'>
                <div>
                    <BsBell />
                </div>
                <div className="dropdown">
                    <button className="dropbtn">+</button>
                    <MdArrowDropDown />
                    <div className="dropdown-content">
                        <a href="# ">New repository</a>
                        <a href="# ">Import repository</a>
                        <a href='# '>New codespaces</a>
                        <a href='# '>New gist</a>
                        <a href='# '>New organization</a>
                    </div>
                </div>
                <div>
                    <img src={logo} height={40} width={40} alt="logo"/> <MdArrowDropDown className='rlogo' />
                </div>
            </div>
        </div>
     );
}
 
export default Header;