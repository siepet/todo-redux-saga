import React from 'react';

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: '',
      error: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  handleChange(event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.body.length) {
      this.setState({ body: '' })
      this.props.handleSubmit(this.state.body)
    } else {
      this.setState({ error: 'Can\'t add empty ToDo item!' })
    }
  }

  renderError() {
    return (
      <div className="error">{ this.state.error }</div>
    )
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        { this.renderError() }
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.body}
        />
      </form>
    )
  }
}
