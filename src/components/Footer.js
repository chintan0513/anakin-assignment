import {BsGithub} from 'react-icons/bs'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='fl'>  
                <p href='# '><BsGithub className='logo' /> &copy; 2022 GitHub, Inc.</p>
            </div>
            <div className='fr'>
                <a href='# '>Terms</a>
                <a href='# '>Privacy</a>
                <a href='# '>Security</a>
                <a href='# '>Status</a>
                <a href='# '>Docs</a>
                <a href='# '>Contact Github</a>
                <a href='# '>Pricing</a>
                <a href='# '>API</a>
                <a href='# '>Training</a>
                <a href='# '>Blog</a>
                <a href=" #"> About</a>
            </div>
        </div>
     );
}
 
export default Footer;