import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createArticle } from '../actions'

class ArticlesNew extends Component{
    renderField(field){
        const { meta: {touched, error }} = field
        const className = `form-group ${touched && error ? "has-danger" : ""}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                    {touched ? error: ""}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createArticle(values, ()=>{
            this.props.history.push("/")
        })
    }

    render(){
        const { handleSubmit } = this.props
        return (
            <div className="container panel panel-default new-container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                    label="Article Title"
                    name="title"
                    component={this.renderField}
                    />
                    <Field
                    label="Article Body"
                    name="body"
                    component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
}


function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.body) {
    errors.body = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ArticlesNewForm"
})(connect(null, { createArticle })(ArticlesNew));


