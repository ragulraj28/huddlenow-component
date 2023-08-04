import React, { useState } from 'react';
import Draggable from 'react-draggable';

const CreateTemplate = () => {

    return( 

        <Draggable>

            <div className="create-template">

                <div className="create-template-header">

                    <div className="template-title">

                        <div className="icon">
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                            </svg>

                        </div>

                        <input type="text" placeholder="Block title goes here"/>

                    </div>

                    <div className="config-col">

                            <div className="icon">

                                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                                </svg>

                            </div>

                            <div className="icon disabled">

                                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                                </svg>

                            </div>

                        </div>

                </div>

                <div className="create-template-content">

                    <textarea  type="text" rows="4" placeholder="Start typing"></textarea>

                </div>

            </div>

        </Draggable>

    );

}

export default CreateTemplate;