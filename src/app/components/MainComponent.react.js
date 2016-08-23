import React from 'react';

export class MainComponent extends React.Component {
  add(op1, op2) {
    return op1 + op2;
  }

  subtract(op1, op2) {
    return op1 - op2;
  }

  render() {
    let elapsed = Math.round(this.props.elapsed / 100);
    let seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
    let message = `React has been successfully running for ${seconds} seconds.`;

    return (
      <div className="main-component">
        <p>{message}</p>
      </div>
    );
  }
}

MainComponent.propTypes = {
  elapsed: React.PropTypes.number
};
