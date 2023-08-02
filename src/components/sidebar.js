import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (

        <div className="sidebar">

            
            <ul>
                <li>
                    <Link to="/layout">Layout</Link>
                </li>

                <li>
                    <Link to="/empty-state">Empty state</Link>
                </li>

                <li>
                    <Link to="/filters">Filters</Link>
                </li>

                <li>
                    <Link to="/form-fields">Form fields</Link>
                </li>

                <li>
                    <Link to="/button-group">Button group</Link>
                </li>

                <li>
                    <Link to="/checkboxes">Checkboxes</Link>
                </li>

                <li>
                    <Link to="/duration-timer">Duration Timer</Link>
                </li>

                <li>
                    <Link to="/search-fields">Search fields</Link>
                </li>

                <li>
                    <Link to="/toggles">Toggles</Link>
                </li>
                <li>
                    <Link to="/create-templates">Create templates</Link>
                </li>
                <li>
                    <Link to="/template-block">Template block</Link>
                </li>
                <li>
                    <Link to="/template-block-details">Template block details</Link>
                </li>

            </ul>
    

        </div>

    );

  }
  
export default Sidebar;
  