/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

// import { blueGrey50 } from 'material-ui/styles/colors';

// eslint-disable-next-line react/prefer-stateless-function
class StartScreen extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-offset-1 col-md-10">
        <h1 style={{ backgroundColor: 'white' }}> Battle Ships Game! </h1>
        {/* <h1>{this.props.ships}</h1> */}
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    ships: state.ships,
  };
}

export default connect(mapStateToProps)(StartScreen);
