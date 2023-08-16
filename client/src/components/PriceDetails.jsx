import React from 'react'

const PriceDetails = (props) => {

    const handleUpdateClick = () => {
        props.update(props.data.id)
    }
    const handleDeleteClick = () => {
        props.delete(props.data.id)
    }

  return (
    <div className='tsawer'>
        <p>{props.data.title}</p>
        <p>{props.data.description}</p>
        <img src={props.data.image} alt={props.data.image}/>
        <button id="myBtn" onClick={handleUpdateClick}>UPDATE</button>
        <button onClick={handleDeleteClick}>DELETE</button>
        
        {props.modal && (

        <div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
            )}


    </div>
  )
}

export default PriceDetails
