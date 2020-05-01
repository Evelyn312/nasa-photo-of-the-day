import React from "react";
import styled from "styled-components";


const TodayDateStyle = styled.h2` 
color: #0000b3;
font-weight: bolder;

`;
const Date = props => {

    return(
        <div>
            <TodayDateStyle>Today's Date:{props.dateForToday}</TodayDateStyle>
        </div>
    );

};

export default Date;