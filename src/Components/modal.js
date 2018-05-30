import React from 'react';
import Modal from 'react-modal'
import '../cards.css';
import Form from './form'

 

class FormModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Sign Up</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >

          <Form name={this.props.event.name}/>
          <div><button id="closelink" onClick={this.handleCloseModal}>Close</button> </div>
        </Modal>
      </div>
    );
  }
}

const props = {};

export default FormModal