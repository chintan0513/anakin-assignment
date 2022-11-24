import {BiGitRepoForked} from 'react-icons/bi';
import {BsEyeFill, BsStar, BsCode, BsPlayCircle} from 'react-icons/bs';
import {VscIssues, VscGitPullRequest, VscCommentDiscussion, VscGraphLine} from 'react-icons/vsc';
import {GrProjects} from 'react-icons/gr'
import {HiOutlineShieldExclamation} from 'react-icons/hi'
import Data from './Data';
import {MdArrowDropDown} from 'react-icons/md'

const Profile = () => {
    return ( 
        <>
            <div className="link">
                <div className="profile">
                    <div className="na">
                        <img src="https://www.svgrepo.com/show/346978/git-repository.svg" alt="pic" /> 
                        <div className="p-link">
                            <a href="# " target="_blank" >github / <a href="# " target="_blank">codeql </a></a>
                        </div>
                        <p>Public</p>
                    </div>
                    <div className="btn-group">
                        <div>
                            <button className='btn'><BsEyeFill className='icon'/>Watch <MdArrowDropDown /></button>
                            <button className='btn'>< BiGitRepoForked className='icon' />Fork <MdArrowDropDown /></button>
                            <button className='btn'><BsStar className='icon' />Star <MdArrowDropDown /></button>
                        </div>
                    </div>
                </div>
                <div className="head">
                    <div className="h-link">
                        <li><BsCode /><a href="# ">Code </a></li>
                        <li><VscIssues /><a href=" # ">Issues </a></li>
                        <li><VscGitPullRequest /><a href=" # "> Pull requests </a></li>
                        <li><VscCommentDiscussion /><a href=" # "> Discussion </a></li>
                        <li><BsPlayCircle /><a href=" # "> Actions </a></li>
                        <li><a href=" # "><GrProjects /> Projects </a></li>
                        <li><HiOutlineShieldExclamation /><a href=" # ">Security </a></li>
                        <li><VscGraphLine /><a href=" # ">Insights </a></li>
                    </div>
                </div>
                
            </div>
            <hr />
            <Data />
        </>
     );
}
 
export default Profile;