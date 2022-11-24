import {useState} from 'react'
import {BiLabel} from 'react-icons/bi'
import {VscMilestone, VscIssues } from 'react-icons/vsc'
import '../styles/app.css'
import {MdArrowDropDown} from 'react-icons/md'

const Data = () => {

    // const [data, setData] = useState([]);

    // const handleIssue = async () => { 
    //     const endpoint = `https://api.github.com/repos/github/codeql/issues`;
    //     const res = await fetch(endpoint)
    //     const data = await res.json()
    //     console.log(data);
    //     setData(data)
    // }

    return (
        <div className='data'>
            <div className='dhead'> 
                <div className='d-left'>
                    <h4>Filter</h4>
                    <input placeholder='is:issue is:open ' className='input' type="text" />
                </div>
                <div className='d-right'>
                    <button className='btn'><BiLabel />Labels</button>
                    <button className='btn'><VscMilestone />Milestone</button>
                    <button  className='new'>New Issue</button>
                </div>
               
            </div>
            <div className='dbody'>
                <div className='list'>
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
                        <div className='data-list'>
                            <p>[False positive] on_decorated_ magic methods</p>
                        </div>
                </div>
            </div>
        </div>
      );
}
 
export default Data;