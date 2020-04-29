import React from "react";

const Picture = props => {
    return (
        <div>
           <img src={props.image} alt="Pic of The Day"></img> 
        </div>
    );
};

export default Picture;
