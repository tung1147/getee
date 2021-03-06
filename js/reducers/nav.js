import {getAppNavigator}  from '../AppRouteConfigs';
const AppNavigator = getAppNavigator();
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('login'));
console.log("AppNavigator initialState",initialState);

export default function (state = initialState, action) {
  if(action.type.startsWith('Navigation/')){
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState
  }
  return state;
}
