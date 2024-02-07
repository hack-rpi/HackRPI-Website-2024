import React, { useState } from 'react';


const Accordion = () => {
  const [selected, setSelected] = useState(0);

const handleClick = (index) => {
    setSelected(index);
};

    return (
        <div>
            <div className="mb-4">
                <button className="btn btn-active mr-2">Default</button>
                <button className="btn btn-active btn-neutral mr-2">Neutral</button>
                <button className="btn btn-active btn-primary mr-2">Primary</button>
                <button className="btn btn-active btn-secondary mr-2">Secondary</button>
                <button className="btn btn-active btn-accent mr-2">Accent</button>
                <button className="btn btn-active btn-ghost mr-2">Ghost</button>
                <button className="btn btn-active btn-link">Link</button>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(0)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className={`collapse-content ${selected === 0 ? 'block' : 'hidden'}`}>
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(1)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className={`collapse-content ${selected === 1 ? 'block' : 'hidden'}`}>
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <div onClick={() => handleClick(2)} className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className={`collapse-content ${selected === 2 ? 'block' : 'hidden'}`}>
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;