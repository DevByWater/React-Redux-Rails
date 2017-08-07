import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSingleArticle, deleteArticle } from '../actions'

class ArticlesShow extends Component{
    componentDidMount(){
        this.props.fetchSingleArticle(this.props.params.id)
    }

    deleteArticle(){
        this.props.deleteArticle(this.props.params.id)
        this.props.history.push('/')
    }


    render(){
        if(!this.props.article){
            return (<div>Getting your article...</div>)
        }
        return (
            <div className="container panel panel-default show-container">
                <div className="col-xs-12">
                    <Link className="btn btn-primary" to="/">Go Back</Link>
                </div>
                <div className="text-center show-header">
                    <h2>{this.props.article.title}</h2>
                </div>
                <div className="show-body">
                    <p>{this.props.article.body}</p>
                </div>
                <div className="col-xs-12 text-center">
                    <button onClick={this.deleteArticle.bind(this)} className="btn btn-danger">Delete Post</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { article: this.state.article}
}

export default connect(mapStateToProps, { fetchSingleArticle })(ArticlesShow)