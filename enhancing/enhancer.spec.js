const enhancer = require('./enhancer.js');
// test away!

// https://jestjs.io/docs/en/expect#expectvalue
test("Test item for success", (item) => {
    expect(enhancer.succeed(item.enhancer)).toBeLessThanOrEqualTo({
    
        enhancement: , 
        durability:

    })
    .toBeGreaterThanOrEqualTo({

        enhancement: ,
        durability: 
        
    })
});

test("Test item for failure", (item) => {
    expect(enhancer.fail(item)).toBeLessThanOrEqualTo({
    
        enhancement: , 
        durability:

    })
    .toBeGreaterThanOrEqualTo({

        enhancement: ,
        durability: 
        
    })
})
