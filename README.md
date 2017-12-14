# Redux Capsule

Redux [middleware](https://redux.js.org/docs/advanced/Middleware.html) for encapsulation.

## Motivation

`ReduxCapsule` allows you to write `dispatch` and `getState` in class, not in function.

This can be useful to design familiar abstraction:

```js
import { ReduxCapsule } from 'redux-capsule';
import { increase } from './actions';

export class CounterButton extends ReduxCapsule {
  onClick = () => {
    this.dispatch(increase(1));
  };
  get label() {
    return `increment counter : ${this._currentCount}`;
  }
  get _currentCount() {
    return this.state.sampleCounter.count;
  }
}
```

Now that a dispatcher has become class-based, there's no need to be annoyed by the design which requires many functions to have the pairs of `(dispatch, getState)`.

Usage on react-redux is like below:

```js
import React from 'react';
import { connect } from 'react-redux';
import { CounterButton } from './CounterButton';

const SampleView = props => {
  const button = props.createCounterButton();
  return (
    <div>
      <button type='button' onClick={button.onClick}>
        {button.label}
      </button>
    </div>
  );
};
const mapStateToProps = state => state;

const mapDispatchToProps = {
  createCounterButton: () => CounterButton,
};
export default connect(mapStateToProps, mapDispatchToProps)(SampleView);
```

## Installation

```
npm install --save redux-capsule
```

Then, call [applyMiddleware()](https://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from 'redux';
import { capsule } from 'redux-thunk';

const store = createStore(
  _ => _,// rootReducer
  applyMiddleware(capsule)
);
```

## Lincense

This repository is published under the MIT License.
