const enhancer = require('./enhancer.js');
// test away!

// https://jestjs.io/docs/en/expect#expectvalue
test("Test item for success", (item) => {
    expect(enhancer.succeed(item.enhancer)).toBeLessThanOrEqualTo({
    
        enhancement: 20, 
        durability: 100

    })
    .toBeGreaterThanOrEqualTo({

        enhancement: 0,
        durability: 0
        
    })
});

test("Test item for failure", (item) => {
    expect(enhancer.fail(item)).toBeLessThanOrEqualTo({
    
        enhancement: 20, 
        durability: 100

    })
    .toBeGreaterThanOrEqualTo({

        enhancement: 0,
        durability: 0
        
    })
})
