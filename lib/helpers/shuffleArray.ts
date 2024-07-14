const shuffleArray = (array: any[]) => {
  return array.sort(() => 0.5 - Math.random());
};

export default shuffleArray;
