export class ReduxCapsule {

  constructor({ dispatch, getState }) {
    this.dispatch = dispatch;
    this.getState = getState;
  }

  get state() {
    return this.getState();
  }
}
