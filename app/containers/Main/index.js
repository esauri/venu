/*
 * Main
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'components/Button';

// Selectors
import {
  makeSelectUser,
  makeSelectError,
  makeSelectTimer,
  makeSelectLoading,
  makeSelectVenuMap,
  makeSelectMapMode,
  makeSelectExhibits,
  makeSelectFacilities,
  makeSelectCurrentPlace,
  makeSelectIsLocationEnabled,
} from 'containers/App/selectors';

import {
  dispatchSetTimer,
  dispatchSetMapCenter,
  dispatchChangeExhibit,
  dispatchGetUserLocation,
  dispatchSetLocationEnabled,
 } from 'containers/App/dispatches';

// Containers
import Header from './Header';
import VenuMap from './VenuMap';
import Panel from './Panel';

// Local components
import { MapWrapper } from './styles';

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.timer = this.timer.bind(this);
    this.updateExhibitData = this.updateExhibitData.bind(this);
    this.beginTrackingTimer = this.beginTrackingTimer.bind(this);
    this.cancelTrackingTimer = this.cancelTrackingTimer.bind(this);
    this.handleLocateButtonClicked = this.handleLocateButtonClicked.bind(this);
  }

  componentDidMount() {
    this.updateExhibitData();
    this.beginTrackingTimer();
  }

  componentDidUpdate() {
    // this.beginTrackingTimer();
  }

  componentWillUnmount() {
    this.cancelTrackingTimer();
  }

  updateExhibitData() {
    const { user, exhibits, onChangeExhibit } = this.props;
    const exhibitsObj = (exhibits.artisticAlley) ? exhibits : exhibits.toJS();

    // For recommended exhibits
    // If recommended exhibits is greater than 1
    if (user.exhibits.recommended.length > 0) {
      // Go through recommended exhibits
      user.exhibits.recommended.forEach((recommended) => { // eslint-disable-line
        // If value is not empty
        if (recommended.length > 0) {
          // splice value
          const keys = recommended.split('-');

          // Make a place with the values
          const place = exhibitsObj[keys[0]][keys[1]];

          // If a place exists
          if (place) {
            // Change exhibit
            onChangeExhibit(place, 'recommended');
          }
        }
      });
    } // End recommended exhibits

    // For saved exhibits
    // If saved exhibits is greater than 1
    if (user.exhibits.saved.length > 0) {
      // Go through saved exhibits
      user.exhibits.saved.forEach((saved) => { // eslint-disable-line
        // If value is not empty
        if (saved.length > 0) {
          // splice value
          const keys = saved.split('-');

          // Make a place with the values
          const place = exhibitsObj[keys[0]][keys[1]];

          // If a place exists
          if (place) {
            // Change exhibit
            onChangeExhibit(place, 'saved');
          }
        }
      });
    } // End Saved exhibits

    // For visited exhibits
    // If visited exhibits is greater than 1
    if (user.exhibits.visited.length > 0) {
      // Go through visited exhibits
      user.exhibits.visited.forEach((visited) => { // eslint-disable-line
        // If value is not empty
        if (visited.length > 0) {
          // splice value
          const keys = visited.split('-');

          // Make a place with the values
          const place = exhibitsObj[keys[0]][keys[1]];

          // If a place exists
          if (place) {
            // Change exhibit
            onChangeExhibit(place, 'visited');
          }
        }
      });
    } // End visited exhibits
  }

  beginTrackingTimer() {
    const { isLocationEnabled, onSetTimer } = this.props;
    // Timer
    const timeToUpdateLocation = 60000; // minute to update

    if (isLocationEnabled) {
      const timer = setInterval(this.timer, timeToUpdateLocation);
      onSetTimer(timer);
    }
  }

  cancelTrackingTimer() {
    const { timer, onSetTimer } = this.props;
    // Clear timer
    clearInterval(timer);

    // Set timer to null
    onSetTimer(null);
  }

  handleLocateButtonClicked() {
    const { user, onChangeMapCenter, onGetUserLocation } = this.props;

    onGetUserLocation(user);
    onChangeMapCenter(user.location);
    this.beginTrackingTimer();
  }

  timer() {
    const { user, isLocationEnabled, onGetUserLocation } = this.props;

    if (isLocationEnabled) {
      onGetUserLocation(user);
    }
  }

  render() {
    return (
      <section>
        <MapWrapper>
          <VenuMap />
        </MapWrapper>
        <Header />
        <Button
          btnClasses={'fab'}
          icon={'ion-android-locate'}
          onClickEvent={this.handleLocateButtonClicked}
        />
        <Panel />
      </section>
    );
  }
}

Main.propTypes = {
  timer: T.any,
  user: T.object,
  exhibits: T.object,
  isLocationEnabled: T.bool,
  onSetTimer: T.func.isRequired,
  onChangeExhibit: T.func.isRequired,
  onGetUserLocation: T.func.isRequired,
  onChangeMapCenter: T.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  timer: makeSelectTimer(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
  mapMode: makeSelectMapMode(),
  venuMap: makeSelectVenuMap(),
  exhibits: makeSelectExhibits(),
  facilities: makeSelectFacilities(),
  currentPlace: makeSelectCurrentPlace(),
  isLocationEnabled: makeSelectIsLocationEnabled(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeExhibit: (p, subType) => {
      // Make a new place object
      // Make sure we don't mutate te old object
      // To do this we user Object.assing({}, ...)
      const place = Object.assign({}, p, { previousSubType: p.subType, subType });
      dispatchChangeExhibit(dispatch, place);
    },
    onSetTimer: (timer) => dispatchSetTimer(dispatch, timer),
    onGetUserLocation: (user) => dispatchGetUserLocation(dispatch, user),
    onChangeMapCenter: (center) => dispatchSetMapCenter(dispatch, center),
    onSetLocationEnabled: (enabled) => dispatchSetLocationEnabled(dispatch, enabled),
  };
}

// Connect our props to Main
export default connect(mapStateToProps, mapDispatchToProps)(Main);
