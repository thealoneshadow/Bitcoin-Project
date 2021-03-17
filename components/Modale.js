import React,{useState} from 'react'
import Modal from 'react-modal';
function Modale() {
    const [modalOpen,setModalOpen]=useState(false);
    return (
        <div>
            <button onClick={()=>setModalOpen(true)}>Open Modal</button>
            <Modal isOpen={modalOpen}>
        <h1>Hello</h1>
            </Modal>
        </div>
    )
}

export default Modale
