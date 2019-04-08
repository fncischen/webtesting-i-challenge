module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.name = "Successful name";
  if ((item.enhancement < 20 && item.enhancement >= 0))
  {
  item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15)
  {
    item.durability -= 5;
  }
  else if (item.enhancement > 15){
    item.durability -= 5;
  }
  if (item.enhancement > 16) {
    item.enhancement -= 1; 
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100; 
  return { ...item };
}

function get(item) {
  return { ...item };
}
