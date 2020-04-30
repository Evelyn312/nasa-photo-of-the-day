import React from "react";

const InputDate = (props) => {
    

    return(
        <div>
            <form onSubmit={props.submitDataEntered}>
                <label>
                    Please select a date:
                    <input type="date" value={props.dateEntered} onChange={props.onInputChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default InputDate;