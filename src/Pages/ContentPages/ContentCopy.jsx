import React from 'react'
import Sidebar from '../componet/Sidebar'
import Navbar from '../componet/Navbar'
import '../../sass/contentCopy.scss'

function ContentCopy() {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div className='dashboard'>
                <div className='content'>
                    <main className='h-full w-full flex flex-col flex-1'>
                        <div className=''>
                            <div className="main-content wrapper-container">
                                <div className='user-chat bg-white'>
                                    <div className='container'>
                                        <div className='mr-auto'>
                                            <div className="row">
                                                <div className="col-md-1"></div>
                                                <div className="col-md-1">
                                                    <div className='user-image_div'>
                                                        <div className='user-image'></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
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
                                    <div className="container">
                                        <div className='row'>
                                            <div className="col-md-1"></div>
                                            <div className='col-md-1'>
                                                <div className='chatgpt-div'>
                                                    <div className='chatgpt-div_icon'></div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="chat-div_text">
                                                    <p>Hello! How can I assist you today?</p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
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
                                {/* <div className='row'>
                                <div className='col-md-12'>
                                    <div className='user-chat'>
                                        <div className='row'>
                                            <div className='col-md-2'>
                                                <div className='chatgpt-div'>
                                                    <div className='chatgpt-icon'></div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="chat-div">
                                                    <p>Hy</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-12'>
                                    <div className="response-chat">
                                        <div className='row'>
                                            <div className='col-md-2'>
                                                <div className='chatgpt-div'>
                                                    <div className='chatgpt-div_icon'></div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="chat-div">
                                                    <p>Hello! How can I assist you today?</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="icons">
                                                    <div className="copy"></div>
                                                    <div className="like"></div>
                                                    <div className="dislike"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                        <div className='bottom-content'></div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ContentCopy