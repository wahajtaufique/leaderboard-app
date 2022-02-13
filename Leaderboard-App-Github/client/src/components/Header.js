import React, { useEffect } from 'react'
import Modal from './Modal';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const disableModal = () => {
    setShowModal(false);
  }

  return (<>
    <div className="flex-container spacing">
        <h1 style={{fontFamily: "'Tahoma', sans-serif"}}>Leaderboard</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button className='btn' onClick={() => setShowModal(true)}>Add Player</button>
        </div>
    </div>
    {showModal && <Modal disableModal={disableModal}/>}
    </>
  )
}

export default Header