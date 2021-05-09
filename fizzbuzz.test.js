const fb =  require('./fizzbuzz')


test('isFuzzy', () => {
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(2)).toBe(true)
    expect(fb.isFizzy(2)).toBe(false)

})
