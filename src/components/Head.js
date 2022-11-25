import {MdArrowDropDown} from 'react-icons/md';
import {VscMilestone, VscIssues } from 'react-icons/vsc';

const Head = () => {
    return ( 
        <>
            <div className='info'>
                            <div className='linfo links'>
                                <h5> <VscIssues />558 Open</h5> 
                                <a href='# '> ☑️ 952 Closed</a>
                            </div>
                            <div className='rinfo links'>
                                <a href='# '>Author <MdArrowDropDown /></a>
                                <a href='# '>Label <MdArrowDropDown /></a>
                                <a href='# '>Projects <MdArrowDropDown /></a>
                                <a href='# '>Milestones <MdArrowDropDown /></a>
                                <a href='# '>Asignee <MdArrowDropDown /></a>
                                <a href='# '>Sort <MdArrowDropDown /></a>
                            </div>
                        </div> 
        </>
     );
}
 
export default Head;