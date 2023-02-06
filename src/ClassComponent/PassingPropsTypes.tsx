import React, { Component } from "react";

type propsType = {
  message: string;
};

type stateType = {
  count: number;
};

export class PassingPropsTypes extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <span>
          {this.props.message} {this.state.count}
        </span>
        <button type="button" onClick={this.increase}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default PassingPropsTypes;
