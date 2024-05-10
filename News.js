import React, {Component} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from 'prop-types';
import './NewsItems.css'


class News extends Component{

    static defaultProps = {
        country: 'in', 
        pageSize: 6,
    }

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b690a4b770f4a568830f81b16d37b2b&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles, totalresults: parseData.totalresults, loading: false})

    }

    handlePrevClick = async () =>{
      console.log("previous")
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b690a4b770f4a568830f81b16d37b2b&page=
       ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
       this.setState({loading: true});
       let data = await fetch(url);
       let parseData = await data.json()
       console.log(parseData);
      

       this.setState({
        page: this.state.page - 1,
        articles: parseData.articles,
        loading: false
    })
    }

    handleNextClick = async () =>{
       console.log("next")
       if(!(this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize))){
      
      
           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b690a4b770f4a568830f81b16d37b2b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
           this.setState({loading: true});
           let data = await fetch(url);
           let parseData = await data.json()
           console.log(parseData);
           this.setState({
               page: this.state.page + 1,
               articles: parseData.articles,
               loading: false
       })
    }
  
}





    render(){
        return(
            <div>
                <div className="container">
                    <h1 className="main-heading">News Buzz <span className="main-heading1">Top HeadLine</span></h1>

                    {this.state.loading && <Spinner  />}
                    
                    <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-6" key={element.url}>
                        <NewsItems title = {element.title} description = {element.description}
                         imageUrl= {element.urlToImage} newsUrl = {element.url} author = {element.author} 
                         date = {element.publishedAt} source = {element.source.name} />  
                    </div>
                    })}
                    </div>
                    <div className="d-flex justify-content-between">
                       <button disabled = {this.state.page<=1} className="btn btn-dark mb-5" type="button" 
                       onClick={this.handlePrevClick}>&larr; Previous</button>
                       <button className="btn btn-dark mb-5" type="button" 
                       onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;