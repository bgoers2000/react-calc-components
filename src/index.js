import React from 'react';
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} value={this.props.value} type={this.props.type} className={this.props.className}>{this.props.text}</button>
    );
  }
}

export class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type} value={this.props.value} className={this.props.className}/>
    );
  }
}
