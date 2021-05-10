const fb =  require('./fizzbuzz')

test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
})

test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('isFuzzy', () => {
    expect(fb.isFizzy(3)).toBe(true)
})

test('isBuzzy', () => {
    expect(fb.isBuzzy(5)).toBe(true)
})

test('fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzbuzz', () => {
    expect(fb.fizzBuzz(15).count).toBe(15)
    
})

