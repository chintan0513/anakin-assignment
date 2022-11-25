import {useState, useEffect} from 'react'
import {BiLabel} from 'react-icons/bi'
import {VscMilestone, VscIssues } from 'react-icons/vsc'
import '../styles/data.css'
import {MdArrowDropDown} from 'react-icons/md';
import Page from './Page';
import Head from './Head';

const Data = () => {

    const [issue, setIssue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [issuePerPage] = useState(5);
    
    useEffect(() => {
        setLoading(true);
        const endpoint = `https://api.github.com/repos/github/codeql/issues`;
        fetch(endpoint)
        .then(res => res.json())
        .then(data => setIssue(data))
        setLoading(false);
    }, [])

    //get current issue
    const indexOfLastPost = currentPage * issuePerPage;
    const indexOfFirstPost = indexOfLastPost - issuePerPage;
    const currentIssue = issue.slice(indexOfFirstPost, indexOfLastPost);
    
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
                        <Head />               
                            {loading ? <h2>Loading...</h2> : currentIssue.map((item) => {
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

            <Page issuePerPage={issuePerPage} totalIssue={issue.length} paginate={paginate} />
        </div>
      );
}
 
export default Data;