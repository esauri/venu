import {
  SET_TIMER,
  SET_MAP_ZOOM,
  SET_MAP_CENTER,
  TRACK_NEW_LOCATION,
  TRACK_NEW_LOCATION_ERROR,
  TRACK_NEW_LOCATION_SUCCESS,
  SET_LOCATION_ENABLED,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_PROVIDER_ERROR,
  SIGN_IN_WITH_PROVIDER_SUCCESS,
  SET_USER,
  SIGN_IN_USER,
  SIGN_IN_USER_ERROR,
  SIGN_IN_USER_SUCCESS,
  SIGN_OUT_USER,
  CHANGE_USER_ID,
  CREATE_USER_ACCOUNT,
  CREATE_USER_ACCOUNT_ERROR,
  CREATE_USER_ACCOUNT_SUCCESS,
  LOAD_USER_DATA,
  LOAD_USER_DATA_ERROR,
  LOAD_USER_DATA_SUCCESS,
  SYNC_USER_DATA,
  SYNC_USER_DATA_ERROR,
  SYNC_USER_DATA_ADDED,
  SYNC_USER_DATA_REMOVED,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_ERROR,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_AUTH_EMAIL,
  UPDATE_AUTH_EMAIL_ERROR,
  UPDATE_AUTH_EMAIL_SUCCESS,
  UPDATE_AUTH_PASSWORD,
  UPDATE_AUTH_PASSWORD_ERROR,
  UPDATE_AUTH_PASSWORD_SUCCESS,
  CHANGE_USER_NAME,
  CHANGE_USER_AGE,
  CHANGE_USER_EMAIL,
  CHANGE_USER_LOCATION,
  CHANGE_USER_INTERESTS,
  CHANGE_PARKING_LOCATION,
  SETUP_GEOLOCATION,
  CHANGE_MAP_MODE,
  CHANGE_MAP_CENTER,
  CHANGE_SELECTED_PLACE,
  NAVIGATE_TO_PLACE,
  LIKE_PLACE,
  UNLIKE_PLACE,
  CHANGE_EXHIBIT,
  SET_ERROR_MESSAGES,
  SET_SUCESS_MESSAGES,
} from './constants';

export function signInUserWithGoogle() {
  return {
    type: SIGN_IN_WITH_GOOGLE,
  };
}

export function signInUserWithFacebook() {
  return {
    type: SIGN_IN_WITH_FACEBOOK,
  };
}

export function signInUserWithProviderError(error) {
  return {
    type: SIGN_IN_WITH_PROVIDER_ERROR,
    value: error,
  };
}

export function signInUserWithProviderSuccess() {
  return {
    type: SIGN_IN_WITH_PROVIDER_SUCCESS,
  };
}

/**
 * setUser
 * Sets user
 */
export function setUser(user) {
  return {
    type: SET_USER,
    value: user,
  };
}

/**
 * signInUser
 * Denotes that the user is signing in
 */
export function signInUser() {
  return {
    type: SIGN_IN_USER,
  };
}

/**
 * signInUserError
 * Denotes that there was an error signing in
 */
export function signInUserError(error) {
  return {
    type: SIGN_IN_USER_ERROR,
    value: error,
  };
}

/**
 * signInUserSuccess
 * Denotes that the user is signed
 */
export function signInUserSuccess(uid) {
  return {
    type: SIGN_IN_USER_SUCCESS,
    value: uid,
  };
}

/**
 * signOutUser
 * Signs the user out by setting user to empty object
 */
export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

/**
 * changeUserId
 * Changed user id
 */
export function changeUserId(uid) {
  return {
    type: CHANGE_USER_ID,
    value: uid,
  };
}

/**
 * createUserAccount
 * Dispatched when user data is being sent to database to create account
 */
export function createUserAccount() {
  return {
    type: CREATE_USER_ACCOUNT,
  };
}

/**
 * createUserAccountError
 * Dispatched when user account creation has failed
 * @param  {Object} error
 */
export function createUserAccountError(error) {
  return {
    type: CREATE_USER_ACCOUNT_ERROR,
    value: error,
  };
}

/**
 * createUserAccountSuccess
 * Dispatched when user account has successfully been created
 */
export function createUserAccountSuccess() {
  return {
    type: CREATE_USER_ACCOUNT_SUCCESS,
  };
}

/**
 * updateUserAuthEmail
 * Dispatched when user email is being updated
 */
export function updateUserAuthEmail() {
  return {
    type: UPDATE_AUTH_EMAIL,
  };
}

/**
 * updateUserAuthEmailError
 * Dispatched when user email updating failed
 * @param {String} error
 */
export function updateUserAuthEmailError(error) {
  return {
    type: UPDATE_AUTH_EMAIL_ERROR,
    value: error,
  };
}

/**
 * updateUserAuthEmailSuccess
 * Dispatched when user email updating succeeded
 * @param {String} message
 */
export function updateUserAuthEmailSuccess(message) {
  return {
    type: UPDATE_AUTH_EMAIL_SUCCESS,
    value: message,
  };
}

/**
 * updateUserAuthPassword
 * Dispatched when user password is being updated
 */
export function updateUserAuthPassword() {
  return {
    type: UPDATE_AUTH_PASSWORD,
  };
}

/**
 * updateUserAuthPasswordError
 * Dispatched when user password updating failed
 * @param {String} error
 */
export function updateUserAuthPasswordError(error) {
  return {
    type: UPDATE_AUTH_PASSWORD_ERROR,
    value: error,
  };
}

/**
 * updateUserAuthPasswordSuccess
 * Dispatched when user password updating succeeded
 * @param {String} message
 */
export function updateUserAuthPasswordSuccess(message) {
  return {
    type: UPDATE_AUTH_PASSWORD_SUCCESS,
    value: message,
  };
}

/**
 * loadUserData
 * Dispatched when user data is being requested, starting the redux saga
 */
export function loadUserData() {
  return {
    type: LOAD_USER_DATA,
  };
}

/**
 * loadUserDataSuccess
 * Dispatched when user data has loaded
 * @param  {Object} user
 */
export function loadUserDataSuccess(user) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    value: user,
  };
}

/**
 * loadUserDataError
 * Dispatched when loading the user data fails
 * @param  {Object} error
 */
export function loadUserDataError(error) {
  return {
    type: LOAD_USER_DATA_ERROR,
    value: error,
  };
}

/**
 * syncUserData
 * Dispatched when user data is being synced
 * @param  {Object} user
 */
export function syncUserData() {
  return {
    type: SYNC_USER_DATA,
  };
}

/**
 * syncUserDataAdded
 * Dispatched when user data has been added
 * @param  {Object} user
 */
export function syncUserDataAdded(user) {
  return {
    type: SYNC_USER_DATA_ADDED,
    value: user,
  };
}

/**
 * syncUserDataRemoved
 * Dispatched when user data has removed
 * @param  {Object} user
 */
export function syncUserDataRemoved(user) {
  return {
    type: SYNC_USER_DATA_REMOVED,
    value: user,
  };
}

/**
 * syncUserDataError
 * Dispatched when syncing user data fails
 * @param  {Object} error
 */
export function syncUserDataError(error) {
  return {
    type: SYNC_USER_DATA_ERROR,
    value: error,
  };
}

/**
 * updateUserData
 * Dispatched when updating user data
 */
export function updateUserData() {
  return {
    type: UPDATE_USER_DATA,
  };
}

/**
 * updateUserDataError
 * Dispatched when updating user data fails
 */
export function updateUserDataError(error) {
  return {
    type: UPDATE_USER_DATA_ERROR,
    value: error,
  };
}

/**
 * updateUserDataSuccess
 * Dispatched when updating user data succeeds
 * @param  {Object} user
 */
export function updateUserDataSuccess() {
  return {
    type: UPDATE_USER_DATA_SUCCESS,
  };
}


/**
 * changeUserName
 * Returns the new user name
 * @param  {String} name
 */
export function changeUserName(name) {
  return {
    type: CHANGE_USER_NAME,
    value: name,
  };
}

/**
 * changeUserAge
 * Returns the new user age
 * @param  {String} age
 */
export function changeUserAge(age) {
  return {
    type: CHANGE_USER_AGE,
    value: age,
  };
}

/**
 * changeEmail
 * Returns the new user email
 * @param  {String} email
 */
export function changeUserEmail(email) {
  return {
    type: CHANGE_USER_EMAIL,
    value: email,
  };
}

/**
 * changeUserLocation
 * Returns the new user location
 * @param  {Object} location
 */
export function changeUserLocation(location) {
  return {
    type: CHANGE_USER_LOCATION,
    value: location,
  };
}

/**
 * changeUserInterests
 * Returns the new user interests
 * @param  {Object} interests
 */
export function changeUserInterests(interests) {
  return {
    type: CHANGE_USER_INTERESTS,
    value: interests,
  };
}

/**
 * changeParkingLocation
 * Returns the new user parking location
 * @param  {Object} location
 */
export function changeParkingLocation(location) {
  return {
    type: CHANGE_PARKING_LOCATION,
    value: location,
  };
}

/**
 * setupGeolocation
 * Returns the geolocation setup
 * @param  {Object} location
 * @param  {Bool} isEnabled
 * @param  {String} mode
 */
export function setupGeolocation(location, isEnabled, mode) {
  return {
    type: SETUP_GEOLOCATION,
    value: location,
    isEnabled,
    mode,
  };
}

/**
 * changeMapMode
 * Returns the new map mode
 * @param  {Object} mode
 */
export function changeMapMode(mode) {
  return {
    type: CHANGE_MAP_MODE,
    value: mode,
  };
}

/**
 * changeCurrentPlace
 * Returns the new selected place
 * @param  {Object} place
 */
export function changeCurrentPlace(place) {
  return {
    type: CHANGE_SELECTED_PLACE,
    value: place,
  };
}

/**
 * changeMapCenter
 * Returns the new map center
 * @param  {Object} center
 */
export function changeMapCenter(center) {
  return {
    type: CHANGE_MAP_CENTER,
    value: center,
  };
}

/**
 * navigateToPlace
 * Returns the place to navigate to
 * @param  {Object} place
 */
export function navigateToPlace(place) {
  return {
    type: NAVIGATE_TO_PLACE,
    value: place,
  };
}

/**
 * likePlace
 * Returns exhibit to like
 * @param  {Object} place
 */
export function likePlace(place) {
  return {
    type: LIKE_PLACE,
    value: place,
  };
}

/**
 * unLikePlace
 * Returns exhibit to unlike
 * @param  {Object} place
 */
export function unLikePlace(place) {
  return {
    type: UNLIKE_PLACE,
    value: place,
  };
}

/**
 * changeExhibit
 * Returns newly changed exhibit
 * @param  {Object} place
 */
export function changeExhibit(place) {
  return {
    type: CHANGE_EXHIBIT,
    value: place,
  };
}

/**
 * setErrorMessages
 * Returns error message
 * @param  {String} error
 */
export function setErrorMessages(error) {
  return {
    type: SET_ERROR_MESSAGES,
    value: error,
  };
}

/**
 * setSuccessMessages
 * Returns success message
 * @param  {String} message
 */
export function setSuccessMessages(message) {
  return {
    type: SET_SUCESS_MESSAGES,
    value: message,
  };
}

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

export function setMapCenter(coordinates) {
  return {
    type: SET_MAP_CENTER,
    value: coordinates,
  };
}

export function setMapZoom(zoom) {
  return {
    type: SET_MAP_ZOOM,
    value: zoom,
  };
}

export function trackNewLocation() {
  return {
    type: TRACK_NEW_LOCATION,
  };
}

export function trackNewLocationError(error) {
  return {
    type: TRACK_NEW_LOCATION_ERROR,
    value: error,
  };
}

export function trackNewLocationSuccess() {
  return {
    type: TRACK_NEW_LOCATION_SUCCESS,
  };
}
