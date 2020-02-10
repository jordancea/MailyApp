import React, { Component } from "react";
import StripeCkeckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  state = {};
  render() {
    return (
      <StripeCkeckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCkeckout>
    );
  }
}

export default connect(null, actions)(Payments);
