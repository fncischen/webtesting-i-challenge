const enhancer = require('./enhancer.js');
// test away!

// const d = {
//     enhancement: 15,
//     durability: 5
// }


// https://jestjs.io/docs/en/expect#expectvalue
test("Test item for success", () => {

    const d = {
        enhancement: 15,
        durability: 5
    }
    
    const succededItem = enhancer.succeed(d);

    expect(succededItem.enhancement).toBeGreaterThanOrEqual(0);

});

test("Test item for failure", () => {

    const d = {
        enhancement: 15,
        durability: 5
    }

    const failedItem = enhancer.fail(d);

    expect(failedItem.durability).toBeLessThanOrEqual(20);
})


