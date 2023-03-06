import React from "react";
import Upload from "./Upload";
import Reset from "./Reset"
import Output from "./Output";

class Form extends React.Component{
    render(){
        return React.createElement('form', {className: 'custom-form'},
            <Upload/>,
            <Output/>,
            <Reset/>
        );
    }
}

export default Form