import React from "react";
import styled from "styled-components";

const ImageStyle = styled.img`
    width: 720px;
    margin: 90px;
`;

const Picture = props => {
    return (
        <div>
           <ImageStyle src={props.image} alt="Pic of The Day"></ImageStyle> 
        </div>
    );
};

export default Picture;
