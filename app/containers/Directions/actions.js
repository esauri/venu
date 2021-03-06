import {
  SET_TIMER,
  SET_DIRECTIONS,
  SET_IS_NAVIGATING,
  SET_LOCATION_ENABLED,
} from './constants';

/**
 * setTimer
 * Sets a timer using setInterval function
 * @param {Func} timerId
 */
export function setTimer(timerId) {
  return {
    type: SET_TIMER,
    value: timerId,
  };
}

/**
 * setDirections
 * Sets a route using Google Map's DirectionService
 * @param {DirectionService.route} directions
 */
export function setDirections(directions) {
  return {
    type: SET_DIRECTIONS,
    value: directions,
  };
}

/**
 * setIsNavigating
 * Sets isNavigating to true or false
 * @param {bool} enabled
 */
export function setIsNavigating(navigating) {
  return {
    type: SET_IS_NAVIGATING,
    value: navigating,
  };
}

/**
 * setLocationEnabled
 * Sets location to enabled or disabled
 * @param {bool} enabled
 */
export function setLocationEnabled(enabled) {
  return {
    type: SET_LOCATION_ENABLED,
    value: enabled,
  };
}
