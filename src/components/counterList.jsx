import React, { Component } from "react";
import Counter from "./counter";

class CounterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 0, value: 3 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
      ]
    };

    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.items.map(item => (
          <Counter key={item.id} item={item} onDelete={this.handleDelete} />
        ))}
      </ul>
    );
  }

  handleDelete(counterId) {
    const items = this.state.items.filter(counter => counter.id !== counterId);

    this.setState({ items });
  }
}

export default CounterList;
