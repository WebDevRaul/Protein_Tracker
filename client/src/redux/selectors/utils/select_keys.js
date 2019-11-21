const select = state => {
  let keys = [];
  state.map(i =>  keys.push({ key: i._id, value: i.name }));
  return keys;
}

export { select }