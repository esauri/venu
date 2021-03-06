import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

// Components
import Wrapper from 'components/FullWrapper';

import { makeSelectUser, makeSelectIsSignedIn } from 'containers/App/selectors';

import { dispatchGetAuthenticatedUser } from 'containers/App/dispatches';

// Containers
import GeolocationSetup from './GeolocationSetup';
import ParkingSetup from './ParkingSetup';
import InterestSelection from './InterestSelection';

// Redux
import { makeSelectOnboardingStage } from './selectors';

import { dispatchSetStage } from './dispatches';

export class Onboarding extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { isSignedIn } = this.props;
    if (!isSignedIn) {
      browserHistory.push({
        pathname: '/login',
      });
    }
  }

  // Occurs after component updated
  componentDidUpdate() {
    const { stage, userProp, onSetStage } = this.props;
    const user = (userProp.location) ? userProp : userProp.toJS();
    let newStage = 0;

    if ((user.location.lat === '' || user.location.lng === '') || (stage === 0)) {
      newStage = 0;
    } else if ((user.parking.lat === '' || user.parking.lng === '') || (stage === 1)) {
      newStage = 1;
    } else if ((user.interests.length === 0) || (stage === 2)) {
      newStage = 2;
    } else {
      newStage = 3;
    }

    onSetStage(newStage);

    if (stage > 2) {
      browserHistory.push({
        pathname: '/',
      });
    }
  }

  render() {
    const { stage } = this.props;

    // Initialize stage we will render
    let stageToRender;

    // Using the stage number
    // Figure out what container to render
    switch (stage) {
      // Case 0: Render GeolocationSetup
      case 0:
        stageToRender = (<GeolocationSetup />);
        break;
      // Case 1: Render ParkingSetup
      case 1:
        stageToRender = (<ParkingSetup />);
        break;
      // Case 2: Render InterestSelection
      case 2:
        stageToRender = (<InterestSelection />);
        break;
      // On default render AccountCreation
      default:
        // Render Account Creation
        stageToRender = (<GeolocationSetup />);
        break;
    }

    return (
      <Wrapper className={'gradient-bg full-page'}>
        { stageToRender }
      </Wrapper>
    );
  }
}

// Set our PropTypes
Onboarding.propTypes = {
  stage: T.number.isRequired,
  userProp: T.object.isRequired,
  isSignedIn: T.bool,
  onSetStage: T.func.isRequired,
};

// Map state to props
const mapStateToProps = createStructuredSelector({
  userProp: makeSelectUser(),
  stage: makeSelectOnboardingStage(),
  isSignedIn: makeSelectIsSignedIn(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetAuthenticatedUser: () => dispatchGetAuthenticatedUser(dispatch),
    onSetStage: (stage) => dispatchSetStage(dispatch, stage),
  };
}

// Connect our Onboarding
export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
