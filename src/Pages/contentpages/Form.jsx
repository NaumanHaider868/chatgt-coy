import React from "react";
import Sidebar from "../componet/Sidebar";
import Navbar from "../componet/Navbar";
import '../../sass/contentCopy.scss'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

function Form({ isSidebarVisible, contentClass1 }) {
    const [contentClass, setContentClass] = useState('');
    const toggleSidebarClass = (newClass) => {
        setContentClass(newClass);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };
    return (
        <div className="wrapper">
            <Sidebar handleOpenModal={handleShow} isSidebarVisible={isSidebarVisible} toggleSidebarClass={toggleSidebarClass} />
            <div className={`main-wrapper ${contentClass1}`}>
                <Navbar />
                <div className="container">
                    <div className="form-container">
                        <div className="container">
                            <div className="form-dashboard">
                                <form className="zeta-form">
                                    <div className="form-group form-items">
                                        <label className='font-w-700' >System</label>
                                        <textarea class="form-control box-shadow-none" placeholder="Write..."></textarea>
                                    </div>
                                    <div className="form-group form-items">
                                        <label className='font-w-700' >User</label>
                                        <textarea class="form-control box-shadow-none" placeholder="Write..."></textarea>
                                    </div>

                                    <button className="btn btn-submit-form">Submit</button>
                                </form>
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
        </div>
    )
}
export default Form