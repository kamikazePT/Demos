import { mapValues } from 'lodash';

const transformObjectValues = (obj, fn) => {
  return mapValues(obj, o => fn(o));
};

const bindActionCreator = (actionCreator, index) =>
  (...args) => ({...actionCreator(...args), index });

const bindActionCreatorMap = (creators, index) =>
  transformObjectValues(creators, actionCreator => bindActionCreator(actionCreator, index));

const bindIndexToActionCreators = (actionCreators, index) => {
  return typeof actionCreators === 'function'
    ? bindActionCreator(actionCreators, index)
    : bindActionCreatorMap(actionCreators, index);
};

export default bindIndexToActionCreators;