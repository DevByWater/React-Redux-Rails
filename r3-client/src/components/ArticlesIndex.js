import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchArticles } from '../actions'
 

class ArticlesIndex extends Component{
    componentDidMount(){
        this.props.fetchArticles()
    }

    renderArticles(){
        return _.map(this.props.articles, article =>{
            return(
                <li className="list-group-item" key={article.id}>
                    <Link to={`/articles/${article.id}`}>
                        {article.title}
                    </Link>
                </li>
            )
        })
    }
    render(){
        return (
            <div className="container index-container panel panel-default col-xs-10 col-sm-6">
                <div className="text-center">
                    <Link className="btn btn-primary" to="/articles/new">
                        + New Article
                    </Link>
                </div>
                <div className="col-xs-12 text-center">
                    <h3>Articles</h3>
                    <ul className="list-group">
                        {this.renderArticles()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { articles: state.articles}
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex)