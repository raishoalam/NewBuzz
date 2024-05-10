import React, {Component} from "react";
import './NewsItems.css'

class Spinner extends Component{
    render(){
        return(
            <div>
                <div className="spinner d-flex justify-content-center">
                <img src="https://media.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif" alt="loading" />
            </div>
            </div>
        )
    }
}
export default Spinner