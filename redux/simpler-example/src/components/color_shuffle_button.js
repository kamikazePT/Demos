import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ShuffleButton(props){
  const { isShuffling, doShuffleColors, canShuffle } = props;

  const shuffleButtonListClasses = classNames('shuffle-button-container', {'is-shuffling' : isShuffling});

  return (
    <div className={shuffleButtonListClasses}>
      <button className="btn btn-shuffle" onClick={doShuffleColors} type="button" disabled={!canShuffle}>Shuffle All</button>
    </div>
  );
}

ShuffleButton.propTypes = {
  isShuffling : PropTypes.bool.isRequired,
  canShuffle : PropTypes.bool.isRequired,
  doShuffleColors : PropTypes.func.isRequired
};

export default ShuffleButton;