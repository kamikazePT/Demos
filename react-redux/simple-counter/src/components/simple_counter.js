import React from 'react';
import SimpleCounterDisplay from '../containers/simple_counter_display_container';
import SimpleCounterArrows from '../containers/simple_counter_arrows_container';

function SimpleCounter(){
  return (
    <div>
      <span>
        <SimpleCounterDisplay/>
      </span>
      <span>
        <SimpleCounterArrows/>
      </span>
    </div>
  );
}

export default SimpleCounter;