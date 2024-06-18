import {healthBarState}  from "../healthBarState";
test.each([
    {name: 'Маг', health: '90', expected: 'healthy'},
    {name: 'Воин', health: '49', expected: 'wounded'},
    {name: 'Берсерк', health: '5', expected: 'critical'},
    {name: 'Нежить', health: '0', expected: 'dead'},
])('testing current health of character', ({name, health, expected}) => {
    const result = healthBarState(health);
    expect(result).toBe(expected);
})