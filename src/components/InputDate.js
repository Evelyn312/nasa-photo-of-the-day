import React from "react";

const InputDate = props => {
    // const [input, setInput]= useState("");
    return(
        <div>
            <form>
                <label>
                    Please input date in YYYY-MM-DD format:
                    <input type="text" value={props.inputDate} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default InputDate;