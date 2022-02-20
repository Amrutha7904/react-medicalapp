import React from 'react'
import "./dasboard.css";
import {Link} from 'react-router-dom';

const data=[
  { diseasename: "Covid19", to: "10-01-2022", from: "23-01-2022" ,note:"severe body pain, high blood pressure"},
  { diseasename: "Covid19", to: "10-01-2022", from: "23-01-2022" ,note:"severe body pain, high blood pressure" },
  { diseasename: "Covid19", to: "10-01-2022", from: "23-01-2022"  ,note:"severe body pain, high blood pressure"},
  
]

function maincontent() {
  return (
    <div className='maincontent-bock'>
     <div className='top-container'>
       <h5>Create new Medical record</h5>
       <Link to="/createnew"><button className='butn'>Create new</button></Link>
     </div>
     <div className='table-content'>
     <table>
        <tr>
          <th>Disease name</th>
          <th>to</th>
          <th>from</th>
          <th>notes</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.diseasename}</td>
              <td>{val.to}</td>
              <td>{val.from}</td>
              <td>{val.note}</td>
            </tr>
          )
        })}
      </table>

     </div>
      </div>
    
  )
}

export default maincontent