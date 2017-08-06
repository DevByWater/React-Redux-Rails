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
                    <Link to={}>
                    
                    </Link>
                </li>
            )
        })
    }
    render(){
        return (
            <div>Articles Index</div>
        )
    }
}

function mapStateToProps(state){
    return { articles: state.articles}
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex)