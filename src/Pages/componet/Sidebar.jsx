import React from 'react';
import '../../sass/sidebar.scss';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='sidebar-top'>
                    <div className='chat-section'>

                        <div className="row chat-section-row">
                            <div className="col-md-9">
                                <div className='chat'>
                                    <i className='plus-icon'></i>
                                    <div className='new-chat'><p>New chat</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className='chat-icon'>
                                    <div className='icon'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='search-section'>
                        <div className='row'>
                            <div className="col-md-12">
                                <i className='search-icon'></i>
                                <input placeholder='Search...' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-content'>
                    {/* Today */}
                    <div className='yesterday-chat'>
                        <div className='heading'>
                            <span>Today</span>
                        </div>
                        <ul>
                            <li className='chat'>
                                <div className='icon'></div>
                                <div className='text'>
                                    <p>Chat App Name Suggestions</p>
                                </div>
                            </li>
                            <li className='chat'>
                                <div className='icon'></div>
                                <div className='text'>
                                    <p>Chat App Name Suggestions</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Yesterday */}
                    <div className='yesterday-chat'>
                        <div className='heading'>
                            <span>Yesterday</span>
                        </div>
                        <ul>
                            <li className='chat'>
                                <div className='icon'></div>
                                <div className='text'>
                                    <p>Chat App Name Suggestions</p>
                                </div>
                            </li>
                            <li className='chat'>
                                <div className='icon'></div>
                                <div className='text'>
                                    <p>Chat App Name Suggestions</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Previous Chat */}

                    <div className='yesterday-chat'>
                        <div className='heading'>
                            <span>Previous Days</span>
                        </div>
                        <ul>
                            <li className='chat'>
                                <div className='icon'></div>
                                <div className='text'>
                                    <p>Summary: "User Request,assi</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='sidebar-footer'>
                <div className='row'>
                    <div className='col-md-12 templete'>
                        <div className='icon'></div>
                        <div className='text'>
                            <p>Templates</p>
                        </div>
                    </div>
                    <div className='col-md-12 profile'>
                        <div className="row">
                            <div className="col-md-9 user">
                                <div className='profile-icon'></div>
                                <div className='text'>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className='option-icon'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar