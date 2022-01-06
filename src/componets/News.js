import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
       country: "in",
       
    }
    
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
            
        }
        document.title= ` BulletinPigeon-${this.props.category}`;

    }
    
     
    async UpdateNews(){
         this.setState({loading: true});
         const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dad9ab8929d49709123d8d32c704b20&page=${this.state.page}&pageSize=${this.props.pageSize}`;
         let data= await fetch(url);
         let parseData=await data.json();
         this.setState({
            articles: parseData.articles, 
            totalResults:parseData.totalResults , 
            loading: false});
    }

    

     async componentDidMount(){
         this.UpdateNews();
     }

     handlePrevClick = async () =>{
        await this.setState({
            page: this.state.page - 1
        })
        this.UpdateNews();
           
     }
     handleNextClick = async () =>{
           await this.setState({
                page: this.state.page + 1
            })
            this.UpdateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <div className="text-center" style={{margin: '35px 0px'}}>
                    {this.state.loading && <Spinner/>}
                <h1><strong><span className='text-danger'>Bulletin</span><span className='text-primary'>Pigeon</span></strong>-Top Headlines of <span className='text-danger'>{this.props.countryName}</span> in {this.props.category}</h1>
                </div>
                <div className="row">

                {!this.state.loading && this.state.articles.map((element)=>{

                return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0,30) : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                 </div>
                })}
                <div className='container d-flex justify-content-between'>
                 <button disabled={this.state.page<=1} type='button' className='btn btn-dark'onClick={this.handlePrevClick} >&larr; Prev</button>
                 <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>   
                </div>
                </div>
                </div>
            
        )
    }
}

export default News
