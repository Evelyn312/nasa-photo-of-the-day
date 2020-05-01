import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
    background-color: lightblue; 
    font-size: 30px; 
    padding: 10px;
`;

const InputStyle = styled.input`
    -webkit-appearance: none;
    font-size: 30px;
    padding: 10px;

    ${props => (props.type ==="submit" ? `height: 55px; background-color: pink;`: `height: 30px`)}
`;

const InputDate = (props) => {
    return(
        <div>
            <form onSubmit={props.submitDataEntered}>
                <LabelStyle >
                    Please select a date:   
                    <InputStyle type="date" value={props.dateEntered} onChange={props.onInputChange}/>
                </LabelStyle>
                <InputStyle type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default InputDate;