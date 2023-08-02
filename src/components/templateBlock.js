import React from 'react';

const Templateblock = () => {

    return (

        <div>
            
            {/* Add the 'my-template' class to your template card and consult the given HTML example for reference. */}

            <div className="template-card my-template">

                <div className="card-head">

                    <h3 className="title">Catch-up call</h3>

                    <div className="icons-wrapper">

                        <div className="icon duplicate-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 7V15C8 16.1046 8.89543 17 10 17H16M8 7V5C8 3.89543 8.89543 3 10 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V15C20 16.1046 19.1046 17 18 17H16M8 7H6C4.89543 7 4 7.89543 4 9V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                        
                        <div className="icon more-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5L12 5.01M12 12L12 12.01M12 19L12 19.01M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    
                        <div className="more-dropdown-driver">

                            <ul>

                                <li>Edit</li>

                                <li>Delete</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <span className="divider"></span>

                <div className="card-body">

                    <div className="excerpt">

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                    </div>

                </div>

            </div>

            <div className="template-card">

                <div className="card-head">

                    <h3 className="title">Catch-up call</h3>

                    <div className="icons-wrapper">

                        <div className="icon duplicate-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 7V15C8 16.1046 8.89543 17 10 17H16M8 7V5C8 3.89543 8.89543 3 10 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V15C20 16.1046 19.1046 17 18 17H16M8 7H6C4.89543 7 4 7.89543 4 9V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                        
                        <div className="icon more-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5L12 5.01M12 12L12 12.01M12 19L12 19.01M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    
                        <div className="more-dropdown-driver">

                            <ul>

                                <li>Edit</li>

                                <li>Delete</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <span className="divider"></span>

                <div className="card-body">

                    <div className="excerpt">

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                    </div>

                </div>

            </div>

            {/* To make the template card active, include the "active" class and refer to the provided HTML example below: */}

            <div className="template-card active">

                <div className="card-head">

                    <h3 className="title">Catch-up call</h3>

                    <div className="icons-wrapper">

                        <div className="icon duplicate-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 7V15C8 16.1046 8.89543 17 10 17H16M8 7V5C8 3.89543 8.89543 3 10 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V15C20 16.1046 19.1046 17 18 17H16M8 7H6C4.89543 7 4 7.89543 4 9V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                        
                        <div className="icon more-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5L12 5.01M12 12L12 12.01M12 19L12 19.01M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    
                        <div className="more-dropdown-driver">

                            <ul>

                                <li>Edit</li>

                                <li>Delete</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <span className="divider"></span>

                <div className="card-body">

                    <div className="excerpt">

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Templateblock;