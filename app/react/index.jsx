import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('main');

class Sample extends React.Component {
  render() {
    return (
      <div>hello</div>
    )
  }
};

ReactDOM.render(<Sample />, rootElement);
