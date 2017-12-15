import { ReduxCapsule } from './ReduxCapsule';

export const capsule = ({ dispatch, getState }) => next => action => {
  if (action.prototype instanceof ReduxCapsule) {
    return new action({ dispatch, getState });
  }
  return next(action);
};

