import React, { Fragment } from 'react';
import SimpleCounter from './simple_counter';
import SimpleCounterActionMessage from '../containers/simple_counter_action_message_container';

function SimpleCounterPage(){
  return (
    <Fragment>
      <h1>Simple Counter React Redux Demo</h1>
      <SimpleCounter/>
      <SimpleCounterActionMessage/>
    </Fragment>
  );
}

export default SimpleCounterPage;