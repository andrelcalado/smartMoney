export const secondsToDate = secs => {
  var t = new Date(1970, 0, 1);
  t.setSeconds(secs);
  return t;
};

export const threeDotsString = (string, limit) => {
  return string.length >= limit ? string.slice(0, limit) + '...' : string;
};
