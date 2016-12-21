import React, { PropTypes } from 'react';

export default class TodoItem extends React.Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    finished: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className="todo__item">
        <div className="todo__item-status">{ this.props.finished }</div>
        <div className="todo__item-body">{ this.props.body }</div>
        <div className="todo__item-confirm">btn</div>
      </div>
    )
  }
}
