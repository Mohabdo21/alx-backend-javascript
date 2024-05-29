function guardrial(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.toString());
  }
  queue.push('Guadrial was processed');
  return queue;
}

export default guardrial;
