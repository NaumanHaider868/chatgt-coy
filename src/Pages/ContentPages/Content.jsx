import React from 'react'
import Sidebar from '../componet/Sidebar'
import Navbar from '../componet/Navbar'
import '../../sass/content.scss'

function content() {
    return (
        <div className='row content-row'>
            <div className="col-md-3 side-col">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Navbar />
                <div className='dashboard-content'>
                    <div className="row .dashboard-content-row">
                        <div className="col-md-12 user-div">
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="user-image"></div>
                                </div>
                                <div className="col-md-11">
                                    <div className="user-text">
                                        <p>Hy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 chat-div">
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
                                        <i className="dislike"></i>
                                        <i className="like"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>




        </div>
    )
}

export default content