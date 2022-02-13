import React from 'react';
import { useRef } from 'react';

const api_url = "https://leaderboard-app-proficient.herokuapp.com/api/players";

const TableRow = (props) => {

  const inputNum = useRef(null);

  const handleDelete = async (e) => {
    e.preventDefault();
      try {
        const rawResp = await fetch(api_url + "/" + props.info._id, {
          method: 'DELETE'
        });
        const jsonData = await rawResp.json();
        const data = props.players.filter((player) => player._id !== props.info._id);
        props.updatedData(data);
        console.log(jsonData);
      } catch (error) {
        alert("There is an error .. " + error);
      }
  }

  const handleDownChange = async (e) => {
    e.preventDefault();
    inputNum.current.stepDown();
      try {
        const rawResp = await fetch(api_url + "/" + props.info._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({points: inputNum.current.value})
        });
        const arr = [...props.players];
        const index = arr.findIndex(player => player._id === props.info._id);
        arr[index] = {...arr[index]};
        arr[index].points = inputNum.current.value;
        props.updateChanges(arr);
      } catch (error) {
        alert("There is an error .. " + error);
      }
  };

  const handleUpChange = async (e) => {
    e.preventDefault();
    inputNum.current.stepUp();
      try {
        const rawResp = await fetch(api_url + "/" + props.info._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({points: inputNum.current.value})
        });
        const arr = [...props.players];
        const index = arr.findIndex(player => player._id === props.info._id);
        arr[index] = {...arr[index]};
        arr[index].points = inputNum.current.value;
        props.updateChanges(arr);
      } catch (error) {
        alert("There is an error .. " + error);
      }
  };

  return (
    <tr>
        <td>{props.rank}</td>
        <td>{props.info.playerName}</td>
        <td>{props.info.playerLocation}</td>
        <td>{props.info.date}</td>
        <td>{props.info.units}</td>
        <td>{props.info.type}</td>
        <td><button className='form-btn' onClick={(e)=> handleDownChange(e)}>-</button><input type="number" ref={inputNum} readOnly={true} value={props.info.points} min="-100" max="100"/><button className='form-btn' onClick={(e)=> handleUpChange(e)}>+</button></td>
        <td><button className='form-btn' onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default TableRow