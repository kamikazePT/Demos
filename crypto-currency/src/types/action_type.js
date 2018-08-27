const ActionTypes = {
  Buy,
  Sell
};

export type ActionType = $Keys<typeof ActionTypes>;