import React from 'react';
import {Link} from "react-router-dom";


function Pagination({projectPerPage ,totalProjects , paginate}) {


    const pageNumber = []

    for (let i = 1; i<= (totalProjects / projectPerPage); i++ ){
        pageNumber.push(i)

    }
    return (

            <ul className="pagination" >
                {pageNumber.map(number=>(
                    <li className="page-item" key={number}>
                        <Link to={`?page=${number}`} className="page-link" onClick={()=>{paginate(number)}}>{number}</Link>
                    </li>
                ))}
            </ul>

    );
}

export default Pagination;