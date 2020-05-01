import React from "react";
import styled from "styled-components";

const ExplainStyle = styled.p`
    width: 720px;
    margin: 0 auto;


`;

const Explanation = props => {
    return(
        <div>
            <ExplainStyle>{props.explanation}</ExplainStyle>
        </div>
    );
};

export default Explanation;