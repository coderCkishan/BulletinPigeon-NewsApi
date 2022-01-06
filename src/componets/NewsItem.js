import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor(){
        super();
    }

    render() {

       let {title,description,imageUrl,url,author,date} = this.props;

        return (
            <div className='container my-3'>
              <div className="card" >
            <img src={!imageUrl?"https://i.stack.imgur.com/mwFzF.png":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}....</p>
                <p className='card-text'><small className='text-danger'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
             </div>
            </div>
        )
    }
}

export default NewsItem

