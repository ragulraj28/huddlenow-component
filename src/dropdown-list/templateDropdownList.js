const TemplateDropdownList = () => {

    return( 
    
        <div className="template-dropdown-list">

            <div className="category-wrapper">

                <div className="template-category">

                    <p>All template</p>

                    <input type="checkbox"/>

                </div>

                <div className="template-category">

                    <p>My template</p>

                    <input type="checkbox"/>

                </div>

                <span className="divider"></span>

                <div className="template-category">

                    <p>Scrum</p>

                    <input type="checkbox"/>

                </div>

                <div className="template-category">

                    <p>Sales forecast</p>

                    <input type="checkbox"/>

                </div>

                <div className="template-category">

                    <p>Marketing</p>

                    <input type="checkbox"/>

                </div>

                <div className="template-category">

                    <p>One on one</p>

                    <input type="checkbox"/>

                </div>

            </div>

            <div className="cta">

                <div className="cta-btn cta-clear">
                    
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M4 12L12 4M4 4L12 12" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                    </svg>

                    Clear
                
                </div>

                <div className="cta-btn cta-apply">
                    
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M3.33334 8.66667L6 11.3333L12.6667 4.66667" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                    </svg>
                    
                    Apply

                </div>

            </div>

        </div> 

    );
}

export default TemplateDropdownList;