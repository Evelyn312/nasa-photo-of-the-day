import React from "react";
import styled from "styled-components";

const ExplainStyle = styled.p`
    width: 720px;
    text-align: center;

`;

const Explanation = props => {
    return(
        <div>
            <ExplainStyle>{props.explanation}</ExplainStyle>
        </div>
    );
};

export default Explanation;