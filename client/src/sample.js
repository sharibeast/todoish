const state = [{ name: 'sharif' }, { name: 'leslie' }];

const newState = state.map((task, index) => {
  if (index === 0) {
    task.name = 'imebadilishwa';
  }
  return task.name;
});

console.log(newState);

console.log(state);
