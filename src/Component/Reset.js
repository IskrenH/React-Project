import React from "react";

let reset = (e) => {
    const {target} = e
    console.log(target.value.length)
}

class Reset extends React.Component{
    render(){
        return React.createElement('input', {className: 'reset', type:'reset', onClick:reset})
    }
}

export default Reset