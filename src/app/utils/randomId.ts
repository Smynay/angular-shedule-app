//WARN: Only for now
export const getRandomId = () => {
  let rand = 2 - 0.5 + Math.random() * (1000 - 2 + 1);
  return Math.round(rand);
}
