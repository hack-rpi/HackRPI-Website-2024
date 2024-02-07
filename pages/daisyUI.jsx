import React, { useState } from 'react';

const Accordion = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(0)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(1)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(2)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
