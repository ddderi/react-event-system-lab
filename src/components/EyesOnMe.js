// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{

handlefocus = () => {
    console.log('Good!')

}

handleblur = () => {
    console.log('Hey! Eyes on me!')
}


render(){
    return <button onFocus={this.handlefocus} onBlur={this.handleblur} ></button>
}

}