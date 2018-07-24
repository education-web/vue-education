export const people = () => [
  { id: 1, name: 'Jack', age: 13, sex: 'Female' },
  { id: 2, name: 'Jill', age: 13, sex: 'Female' },
  { id: 3, name: 'Cock', age: 99, sex: 'Other' },
  { id: 4, name: 'Kell', age: 11, sex: 'Other' },
  { id: 5, name: 'Mike', age: 23, sex: 'Male' },
  { id: 6, name: 'Jason', age: 29, sex: 'Male' },
  { id: 7, name: 'John', age: 43, sex: 'Male' }
]

export const peopleAsync = () => new Promise((resolve) => {
  setTimeout(() => resolve([
    { id: 1, name: 'Jack', age: 13 },
    { id: 2, name: 'Jill', age: 13 },
    { id: 3, name: 'Cock', age: 99 },
    { id: 4, name: 'Kell', age: 11 },
    { id: 5, name: 'Mike', age: 23 },
    { id: 6, name: 'Jason', age: 29 },
    { id: 7, name: 'John', age: 43 }
  ]), 0)
})
