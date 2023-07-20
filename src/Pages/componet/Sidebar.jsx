import React from 'react';
// import '../../sass/sidebar.scss';
import '../../sass/sidebarCopy.scss'
import { useState, useEffect } from 'react';

function Sidebar({ handleOpenModal }) {
    const [isDivVisible, setIsDivVisible] = useState(false);

    //sidebar
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [sidebarW767, setSidebarW767] = useState(true);

    const handleClick = () => {
        setIsDivVisible(!isDivVisible);
    };
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    const handleClose = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    const handleW767 = () => {
        setSidebarW767(!sidebarW767)
        console.log(!sidebarW767, 'ce')
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 767) {
            setSidebarW767(false);
        }
    }, [windowWidth]);
    const shouldRemoveSidebar = windowWidth <= 767;
    return (
        // <div className='sidebar'>
        //     <div className='sidebar-content'>
        //         <div className='sidebar-top'>
        //             <div className='chat-section'>

        //                 <div className="row chat-section-row">
        //                     <div className="col-md-9">
        //                         <div className='chat'>
        //                             <i className='plus-icon'></i>
        //                             <div className='new-chat'><p>New chat</p></div>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-3">
        //                         <div className='chat-icon'>
        //                             <div className='icon'></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='search-section'>
        //                 <div className='row'>
        //                     <div className="col-md-12">
        //                         <i className='search-icon'></i>
        //                         <input placeholder='Search...' />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='main-content'>
        //             {/* Today */}
        //             <div className='yesterday-chat'>
        //                 <div className='heading'>
        //                     <span>Today</span>
        //                 </div>
        //                 <ul>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Chat App Name Suggestions</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Chat App Name Suggestions</p>
        //                         </div>
        //                     </li>


        //                 </ul>
        //             </div>
        //             {/* Yesterday */}
        //             <div className='yesterday-chat'>
        //                 <div className='heading'>
        //                     <span>Yesterday</span>
        //                 </div>
        //                 <ul>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Chat App Name Suggestions</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat li-active'>
        //                         <div className="li-option">
        //                             <div className='icon'></div>
        //                             <div className='text'>
        //                                 <p>Chat App Name Sugg</p>
        //                             </div>
        //                         </div>
        //                         <div className='actions'>
        //                             <div className="edit"></div>
        //                             <div className="share"></div>
        //                             <div className='delete'></div>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //             {/* Previous Chat */}

        //             <div className='yesterday-chat previous-p-b'>
        //                 <div className='heading'>
        //                     <span>Previous Days</span>
        //                 </div>
        //                 <ul>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi</p>
        //                         </div>
        //                     </li>
        //                     <li className='chat'>
        //                         <div className='icon'></div>
        //                         <div className='text'>
        //                             <p>Summary: "User Request,assi1</p>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>

        //         </div>
        //         <div className='boder-top'>
        //             <div className='sidebar-footer'>
        //                 <div className='row footer-row'>
        //                     {isDivVisible ? (
        //                         <div className='col-md-12 profile-options'>
        //                             <ul className="list-group option-group">
        //                                 <li className="list-group-item option-item">
        //                                     <div className='option'>
        //                                         <div className='delete'></div>
        //                                         <div className='text'>Conversations</div>
        //                                     </div>
        //                                 </li>
        //                                 <li className="list-group-item option-item">
        //                                     <div className='option'>
        //                                         <div className='help'></div>
        //                                         <div className='text'>Help & FAQ</div>
        //                                     </div>
        //                                 </li>
        //                                 <li className="list-group-item option-item">
        //                                     <div className='option'>
        //                                         <div className='setting'></div>
        //                                         <div className='text'>Settings</div>
        //                                     </div>
        //                                 </li>
        //                                 <li className="list-group-item option-item logout-border">
        //                                     <div className='option'>
        //                                         <div className='logout'></div>
        //                                         <div className='text'>Log out</div>
        //                                     </div>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     ) : (
        //                         <div className='col-md-12 templete' onClick={handleOpenModal}>
        //                             <div className="templete-div">
        //                                 <div className='icon'></div>
        //                                 <div className='text'>
        //                                     <p>Templates</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                     }


        //                     <div className='col-md-12 profile' onClick={handleClick}>
        //                         <div className="row">
        //                             <div className="col-md-9 user">
        //                                 <div className='profile-icon'></div>
        //                                 <div className='text'>
        //                                     <p>Admin</p>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-3">
        //                                 <div className='option-icon'></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <React.Fragment>
            <div className='sidebar-btn-w-767' onClick={handleW767}>
                <div className='sidebar-btn-w-767-div'>
                    <div className="icon"></div>
                </div>
            </div>
            <div className={`tool open-sidebar ${isSidebarVisible ? 'hidden' : ''}`} onClick={handleClose} data-toggle="tooltip" data-placement="top" title="Open sidebar">
                <div className='side-open-div'>
                    <div className="icon"></div>
                </div>
            </div>
            <div className={`${isSidebarVisible && !shouldRemoveSidebar ? 'sidebar' : 'hidden'} ${sidebarW767 ? 'sidebar-w-767' : 'sidebar-w-0'}`}>
                <div className='sidebar-content'>
                    <div className='sidebar-top'>
                        <div className='part-one'>
                            <button className='chat'>
                                <i className='plus-icon'></i>
                                <div className='new-chat'><p>New chat</p></div>
                            </button>
                            <div className='side-icon' onClick={toggleSidebar}>
                                <div className='sidebar-icon'></div>
                            </div>
                        </div>
                        <div className='part-two'>
                            <i className='search-icon'></i>
                            <input placeholder='Search...' />
                        </div>
                    </div>
                    <div className='sidebar-menu'>
                        <div className='chat-section'>
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
                                        <p>Chat App Name Sugg</p>
                                    </div>
                                    <div className='actions'>
                                        <div className="edit"></div>
                                        <div className="share"></div>
                                        <div className='delete'></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='chat-section'>
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


                    </div>
                    <div className='sidebar-footer'>
                        {isDivVisible ? (
                            <div className='profile-options'>
                                <ul className="list-group option-group">
                                    <li className="list-group-item option-item">
                                        <div className='option'>
                                            <div className='delete'></div>
                                            <div className='text'>Conversations</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item option-item">
                                        <div className='option'>
                                            <div className='help'></div>
                                            <div className='text'>Help & FAQ</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item option-item">
                                        <div className='option'>
                                            <div className='setting'></div>
                                            <div className='text'>Settings</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item option-item logout-border">
                                        <div className='option'>
                                            <div className='logout'></div>
                                            <div className='text'>Log out</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className='templete' onClick={handleOpenModal}>
                                <div className="templete-div">
                                    <div className='icon'></div>
                                    <div className='text'>
                                        <p>Templates</p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                        <div className="profile-section" onClick={handleClick}>
                            <div className='profile-div'>
                                <div className='profile-user'>
                                    <div className='profile-icon'></div>
                                    <div className='text'>
                                        <p>Admin</p>
                                    </div>
                                </div>
                                <div className='option-icon'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Sidebar