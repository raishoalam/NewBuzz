import Reac, { Component} from "react";

import './NewsItems.css'

class NewsItems extends Component {

    

    render(){

       let {title, description, imageUrl, newsUrl,author,date, source} = this.props;

        return(
            <div className="d-flex">
                <div className="card m-4" style={{width: "40rem"}}>
                   <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge bg-secondary">New</span> <span className="position-absolute top-0 translate-middle badge  bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary">READ MORE</a>
                   </div>
                </div>
            </div>
        )
    }
   
}

export default NewsItems;
