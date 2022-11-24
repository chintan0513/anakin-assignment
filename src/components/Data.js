import {useState, useEffect} from 'react'
import {BiLabel} from 'react-icons/bi'
import {VscMilestone, VscIssues } from 'react-icons/vsc'
import '../styles/app.css'
import {MdArrowDropDown} from 'react-icons/md';
import ReactPaginate from 'react-paginate';

const Data = () => {

    const [issue, setIssue] = useState([]);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        
    useEffect(() => {
        const endpoint = `https://api.github.com/repos/github/codeql/issues`;
        fetch(endpoint)
        .then(res => res.json())
        .then(data => setIssue(data))
    }, [])

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
                        
                        {
                            issue.map((item) => {
                                return (
                                    <div className='data-list'>
                                        <div className='oneD'>
                                            <a href={item.url} className="title"><VscIssues className='open' /> {item.title}</a>
                                            <span className='span'>#{item.id} opened by {item.user.login}</span>                                 
                                            
                                            {/* <span className='label'>
                                                {item.labels.map((label) => {
                                                    return (
                                                        <a href={item.labels_url} className='label' style={{color: `${label.color}`}}>{label.name}</a>
                                                    )
                                                })}
                                            </span> */}
                                        </div>
                                        <div className=''>
                                            <a href={item.user.url} target="_blanks" ><img src={item.user.avatar_url} alt="avatar" className="pic"/></a>
                                        </div>   
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
      );
}
 
export default Data;