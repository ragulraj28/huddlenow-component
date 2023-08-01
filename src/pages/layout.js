import React from 'react';

import Archive from '.././assets/images/archive.svg';
import Calender from '.././assets/images/calender.svg';
import Connect from '.././assets/images/connect.svg';
import Home from '.././assets/images/home-gray.png';
import Settings from '.././assets/images/settings.svg';
import Signout from '.././assets/images/signout.svg';
import User from '.././assets/images/user.png';

const Layout = () => {

    return (

        <div className='layout-content'>

            <div className='app-nav'>
                <ul>
                    <li>
                        <img src={Home} className='icon-home' />
                    </li>
                    <li>
                        <img src={Calender} className='icon-calendar'/>
                        <span>Calender</span>
                    </li>
                    <li>
                        <img src={Connect} className='icon-connect'/>
                        <span>Connect</span>
                    </li>
                    <li>
                        <img src={Archive} className='icon-archive'/>
                        <span>Archive</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={Settings} className='icon-settings'/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <img src={Signout} className='icon-signout'/>
                        <span>Logout</span>
                    </li>
                    <li>
                        <img src={User} className='icon-user'/>
                    </li>
                </ul>
            </div>

            <div className='app-content'>

                <div className='app-page'>

                    <div className='content-header fixed-header'>

                        <p className='ch-title'>Page header</p>

                        <p>Icon</p>

                    </div>

                    <div className='content-body'>

                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                        </p>
                    </div>

                    <div className='content-footer fixed-footer'>
                        
                        <p>Page footer</p>
                        
                    </div>

                </div>

                <div className='app-page-details'>

                    <div className='content-header'>

                        <p className='ch-title'>Page details header</p>

                    </div>

                    <div className='content-body'></div>

                    <div className='content-footer fixed-footer'>
                        
                        <p>Page details footer</p>
                        
                    </div>

                </div>

            </div> 

        </div>

    );

}

export default Layout;