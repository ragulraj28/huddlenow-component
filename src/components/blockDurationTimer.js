import React, { useState, useEffect, useRef } from 'react';

const Durationtimer = () => {

    const [timer, setTimer] = useState(1);

    const inputRef = useRef(null);

    const incrementTimer = () => {

        setTimer((prevTimer) => Math.min(prevTimer + 1, 30));

        inputRef.current.blur(); // removing focus

    };

    const decrementTimer = () => {

        setTimer((prevTimer) => Math.max(1, prevTimer - 1)); // Prevent the timer from going below 1

        inputRef.current.blur();

    };

    const inputChange = (e) => {

        const inputValue = parseInt(e.target.value);

        setTimer(Math.max(1, inputValue));

        setTimer((prevTimer) => Math.min(30, Math.max(1, prevTimer)));
    
    };

    const inputBlur = (e) => {

        if (!timer) {

            setTimer(1);
        
        }

    };    

    return (

        <div className="duration-timer-card">
            
            <span className="time-label">Min(s)</span>

            <div className="timer-wrapper">

                <div className="timer">

                    <button className={`btn minus-btn ${(timer === 1 || !timer)? 'disabled' : ''}`} onClick={decrementTimer}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M15 10H5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>

                    <input type="number" value={timer} onChange={inputChange} onBlur={inputBlur} ref={inputRef} />

                    <button className={`btn plus-btn ${timer === 30 ? 'disabled' : ''}`} onClick={incrementTimer}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M10.0002 3.33337V16.6667M16.6668 10L3.3335 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>

                </div>

                <div className="action-icons">

                    <div className="icon apply-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M4.1665 11.3334L7.49984 14.6667L15.8332 6.33337" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    
                    <div className="icon cancel-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M5 15.5L15 5.5M5 5.5L15 15.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>

                </div>

            </div>

            <div className="max-limit-info">30 mins max</div>

        </div>

    );

}

export default Durationtimer;