const setPosition = items => {
  let num = 0;
  items.map(({ p }) => {
    if(p > num) num = p;
    return p
  });

  return { num };
}

export default setPosition;