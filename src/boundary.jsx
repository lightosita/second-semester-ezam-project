import React from "react";
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

class Boundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError : true}
    }
    render(){
        if(this.state.hasError){
            return(
               <div>
                 <h1> something is wrong here </h1>

                 this pages tests error boundary


               </div> )
        }

        return this.props.children 
    }

}

export default Boundary