import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.item.value
    };

    this.incrementeValue = this.incrementeValue.bind(this);
  }
  render() {
    return (
      <li className="list-group-item">
        <span className={this.getBadgeClass(this.props.item.value)}>
          {this.state.value}
        </span>
        <button
          className="btn btn-small btn-success m-2"
          onClick={this.incrementeValue}
        >
          Increment
        </button>
        <button
          className="btn btn-small btn-danger m-3"
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          Delete
        </button>
      </li>
    );
  }

  incrementeValue() {
    this.setState({ value: this.state.value + 1 });
  }

  getBadgeClass(value) {
    const badgeClasses = "badge badge-sm m-2 badge-";
    return value ? badgeClasses + "primary" : badgeClasses + "warning";
  }
}

export default Counter;
