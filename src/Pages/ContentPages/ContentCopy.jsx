import React, { useState } from 'react'
import Sidebar from '../componet/Sidebar'
import Navbar from '../componet/Navbar'
import '../../sass/contentCopy.scss'
import Modal from 'react-bootstrap/Modal';

function ContentCopy({ isSidebarVisible, contentClass1 }) {
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
        <div className='wrapper'>
            <Sidebar handleOpenModal={handleShow} isSidebarVisible={isSidebarVisible} toggleSidebarClass={toggleSidebarClass} />
            <div className={`main-wrapper ${contentClass1}`}>
                <Navbar />
                <div className='dashboard'>
                    <div className='content'>
                        <main className='h-full w-full flex flex-col flex-1'>
                            <div className="wrapper-container">
                                <div className='dashboard-main-content'>
                                    <div className='user-chat bg-white'>
                                        <div className='container max-w-767'>
                                            <div className='mr-auto'>
                                                <div className="row">
                                                    <div className="col-md-1 first-col_1"></div>
                                                    <div className="col-md-1 first-col_2">
                                                        <div className='user-image_div'>
                                                            <div className='user-image'></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 pl-0 col-8">
                                                        <div className="chat-div_text">
                                                            <p>Hy</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-chat bg-gray'>
                                        <div className="container max-w-767">
                                            <div className='row'>
                                                <div className="col-md-1 first-col_1"></div>
                                                <div className='col-md-1 first-col_2'>
                                                    <div className='chatgpt-div'>
                                                        <div className='chatgpt-div_icon'></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 pl-0 col-8">
                                                    <div className="chat-div_text">
                                                        <p>Hello! How can I assist you today?</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-1-icons">
                                                    <div className="icons">
                                                        <div className="copy"></div>
                                                        <div className="like"></div>
                                                        <div className="dislike"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-chat bg-white'>
                                        <div className='container max-w-767'>
                                            <div className='mr-auto'>
                                                <div className="row">
                                                    <div className="col-md-1 first-col_1"></div>
                                                    <div className="col-md-1 first-col_2">
                                                        <div className='user-image_div'>
                                                            <div className='user-image'></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 pl-0 col-8">
                                                        <div className="chat-div_text">
                                                            <p>Hy</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-chat bg-gray'>
                                        <div className="container max-w-767">
                                            <div className='row'>
                                                <div className="col-md-1 first-col_1"></div>
                                                <div className='col-md-1 first-col_2'>
                                                    <div className='chatgpt-div'>
                                                        <div className='chatgpt-div_icon'></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 pl-0 col-8">
                                                    <div className="chat-div_text">
                                                        <p>As an AI language model, I don't have feelings, but I'm here and ready to help you with any questions or information you need. How can I assist you today?</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-1-icons">
                                                    <div className="icons">
                                                        <div className="copy"></div>
                                                        <div className="like"></div>
                                                        <div className="dislike"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='user-chat bg-white'>
                                        <div className='container max-w-767'>
                                            <div className='mr-auto'>
                                                <div className="row">
                                                    <div className="col-md-1 first-col_1"></div>
                                                    <div className="col-md-1 first-col_2">
                                                        <div className='user-image_div'>
                                                            <div className='user-image'></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 pl-0 col-8">
                                                        <div className="chat-div_text">
                                                            <p>Hy</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-chat bg-gray'>
                                        <div className="container max-w-767">
                                            <div className='row'>
                                                <div className="col-md-1 first-col_1"></div>
                                                <div className='col-md-1 first-col_2'>
                                                    <div className='chatgpt-div'>
                                                        <div className='chatgpt-div_icon'></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 pl-0 col-8">
                                                    <div className="chat-div_text">
                                                        <p>As an AI language model, I don't have feelings, but I'm here and ready to help you with any questions or information you need. How can I assist you today?</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-1-icons">
                                                    <div className="icons">
                                                        <div className="copy"></div>
                                                        <div className="like"></div>
                                                        <div className="dislike"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='bottom-content'>
                                    <div className='bottom-div'>
                                        <input type="text" placeholder='Send a message' className='input-send' />
                                        <i className='search-icon'></i>
                                    </div>
                                </div>
                            </div>

                        </main>
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

export default ContentCopy