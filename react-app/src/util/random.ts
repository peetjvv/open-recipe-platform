export const getNewId = () =>
  Math.random()
    .toString(36)
    .substring(2);
