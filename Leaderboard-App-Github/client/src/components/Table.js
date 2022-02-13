import React from 'react';
import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import './Table.css';

const api_url = "Change_This_To_Yours";

const Table = () => {

  const [data, setData] = useState([]);

  const updatedData = (arr) => {
    setData(arr);
  }
  const updateChanges = (arr) => {
    const sorted = arr.sort(function(a, b) {
      return parseInt(b.points) - parseInt(a.points);
  });
    setData(sorted);
  }

  useEffect(() => {
    fetch(api_url).then((data) => data.json()).then((data) => {
      const arr = data.sort(function(a, b) {
        return parseInt(b.points) - parseInt(a.points);
    });
      setData(arr);
    });
   }, []);

  
  return (
    <div className="flex-container center">
        <table className="content-table">
            <thead>
                <tr>
                <th>Rank</th>
                <th>Participant Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Units</th>
                <th>Type</th>
                <th>Points</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
              {data.map((player,index) => {
                return <TableRow key={index} info={player} rank={index+1} players={data} updatedData={updatedData} updateChanges={updateChanges}/>
              })}
            </tbody>
        </table>
    </div>
  )
}

export default Table