import React from 'react';

const UseProfileImageHoverName = (props) => {
    return (
        <div>
            <img
                className='rounded-full border-red-500 border-2 mr-3 '
                src={props.src}
                alt={props.alt}
                title={props.title}
                style={props.style}
                width="45" height="45"
            />
        </div>
        
    );
};

export default UseProfileImageHoverName;