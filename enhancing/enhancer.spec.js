const enhancer = require('./enhancer.js');
// test away!

// https://jestjs.io/docs/en/expect#expectvalue
test("Test item for success", (item) => {
    expect(enhancer.succeed(item.enhancer)).toBeGreaterThanOrEqual(0).toBeLessThanOrEqual(100);
    expect(enhancer.succeed(item.durability)).toBeGreaterThanOrEqual(0).toBeLessThanOrEqual(20);
})

test("Test item for failure", (item) => {
    expect(enhancer.fail(item.enhancer)).toBeGreaterThanOrEqual(0).toBeLessThanOrEqual(100);
    expect(enhancer.fail(item.durability)).toBeGreaterThanOrEqual(0).toBeLessThanOrEqual(20);
})
