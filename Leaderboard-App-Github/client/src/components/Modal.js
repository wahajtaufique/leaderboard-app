import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';

const api_url = "Change_This_To_Yours";

const Modal = ({disableModal}) => {
    const modalContainer = useRef(null);
    const formContainer = useRef(null);

    const [player, setPlayer] = useState({
      playerName: "",
      playerLocation: "",
      date: "",
      units: "",
      type: "",
      points: ""
    });  
    
    const style = {
      'display': "flex"
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const rawResp = await fetch(api_url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(player)
        });
        disableModal();
        window.location.reload();
      } catch (error) {
        alert("There is an error .. " + error);
      }
      
    };

    useEffect(() => {
     modalContainer.current.addEventListener('click', (e) => {
        let senderElem = e.target;
        if (senderElem === modalContainer.current) {
          disableModal();
        } 
     })
    }, []);

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setPlayer({...player, [name]: value});
    }

    const obj = {
        "playerName": player.playerName,
        "location": player.playerLocation,
        "units": player.units,
        "type": player.type,
        "points": player.points,
        "date": player.date
      }

  return (
    <div className='modal' ref={modalContainer} style={Object.assign({}, style)}>
     <div className='form-container' ref={formContainer}>
      <form onSubmit={handleSubmit}>
        <div className='form-title'>Add New Player</div>
        <div className='row'>
          <input className='width-100' name="playerName" onChange={(e) => handleChange(e)} type='text' placeholder='Participant Name *'/>
        </div>
        <div className='row'>
          <input className='width-100' type='text' name="playerLocation" onChange={(e) => handleChange(e)} placeholder='Location *'/>
          <input className='width-100' type='text' name="date" onChange={(e) => handleChange(e)} placeholder='Date *'/>
        </div>
        <div className='row'>
          <input className='width-100' type='text' name="units" onChange={(e) => handleChange(e)} placeholder='Units *'/>
          <input className='width-100' type='text' name="type" onChange={(e) => handleChange(e)} placeholder='Type *'/>
          <input className='width-100' type='text' name="points" onChange={(e) => handleChange(e)} placeholder='Points *'/>
        </div>
        <pre>
          {JSON.stringify(obj, null, 2)};
        </pre>
        <div className='row'>
          <button className='width-100'>Submit</button>
        </div>
      </form>
      
     </div>
   </div>
  )
}

export default Modal