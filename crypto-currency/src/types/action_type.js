const ActionTypes = {
  Buy : 'Buy',
  Sell : 'Sell'
};

export type ActionType = $Keys<typeof ActionTypes>;