import React, { useState } from 'react';
import Sidebar from '../componet/Sidebar';
import Navbar from '../componet/Navbar';
import '../../sass/content.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Content() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };
    return (
        <div className='row content-row'>
            <div className="col-md-3 side-col">
                <Sidebar handleOpenModal={handleShow} />
            </div>
            <div className="col-md-9 side-col-9">
                <Navbar />
                <div className='dashboard-content'>
                    <div className="row dashboard-content-row">
                        <div className="col-md-12 user-div">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1 user-image-div">
                                        <div className="user-image"></div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="user-text">
                                            <p>Hy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 chat-div">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1 chatgpt-icon-div">
                                        <div className="chatgpt-icon"></div>
                                    </div>
                                    <div className="col-md-10 chatgpt-text">
                                        <div className="chatgpt-response">
                                            <p>Hello! How can I assist you today?</p>
                                        </div>
                                    </div>
                                    <div className="col-md-1 chatgpt-icons-div">
                                        <div className="chatgpt-icons">
                                            <i className="copy"></i>
                                            <i className="like"></i>
                                            <i className="dislike"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 user-div">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1 user-image-div">
                                        <div className="user-image"></div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="user-text">
                                            <p>How are you?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 chat-div">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1 chatgpt-icon-div">
                                        <div className="chatgpt-icon"></div>
                                    </div>
                                    <div className="col-md-10 chatgpt-text">
                                        <div className="chatgpt-response">
                                            <p>As an AI language model, I don't have feelings, but I'm here and ready to help you with any questions or information you need. How can I assist you today?</p>
                                        </div>
                                    </div>
                                    <div className="col-md-1 chatgpt-icons-div">
                                        <div className="chatgpt-icons">
                                            <i className="copy"></i>
                                            <i className="like"></i>
                                            <i className="dislike"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className='fixed-search'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className='container'>
                                        <div className='row'>
                                            {/* <div className='col-md-1'></div> */}
                                            <div className='col-md-12'>
                                                <div className='search-div'>
                                                    <input type="text" placeholder='Send a message' className='search-input' />
                                                    <i className='search-icon'></i>
                                                </div>
                                            </div>
                                            {/* <div className='col-md-1'></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal className='editorder_window' show={show} onHide={handleClose}>
                        <Modal.Body>
                            <div className="modal-div">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row selector-row">
                                            <div className="col-md-4">
                                                <label>Category</label>
                                                <select class="custom-select selector-modal">
                                                    <option selected>Select</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label>Sub Category</label>
                                                <select class="custom-select selector-modal">
                                                    <option selected>Select</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label>Templates</label>
                                                <select class="custom-select selector-modal">
                                                    <option selected>Select</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-6 textarea-div">
                                                <label>Persona</label>
                                                <textarea placeholder='Write...'></textarea>
                                            </div>
                                            <div className="col-md-6 textarea-div">
                                                <label>Template</label>
                                                <textarea placeholder='Write...'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className='modal-footer-div'>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8 modal-btn-div">
                                    <button className='btn btn-block btn-modal' onClick={handleClose}>
                                        Submit
                                    </button>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div >
            </div>

        </div>

    )
}

export default Content