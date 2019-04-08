module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.name = "Successful name";
  if ((item.enhancement <= 20 && item.enhancement >= 0) || (item.durability <= 100 && item.durability >= 0 ))
  {
    return { ...item };
  }
  else {
    item.enhancement = 20;
    item.durability = 100;
    return { ...item };
  }
}

function fail(item) {
  if ((item.enhancement <= 20 && item.enhancement >= 0) || (item.durability <= 100 && item.durability >= 0 ))
  {
    item.enhancement = 0;
    item.durability = 0;
    return { ...item };
  }
  else {
    return { ...item };
  }
}

function repair(item) {
  item.durability = 100; 
  return { ...item };
}

function get(item) {
  return { ...item };
}
