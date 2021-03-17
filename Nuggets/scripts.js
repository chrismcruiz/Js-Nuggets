//********************************************************* */
// map exercises                                            *
//********************************************************* */

// 1) Make an array of numbers that are doubles of the first array

const doubleNumbers = (arr) => arr.map((number) => number * 2)
console.log(doubleNumbers([2, 5, 100, 152]))

// 2) Take an array of numbers and make them strings

const stringItUp = (arr) => arr.map((number) => number.toString())
console.log(stringItUp([2, 5, 100]))

// 3) Capitalize each of an array of names

const capitalizeName = (arr) =>
  arr.map((name) => name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()))

// const capitalizeName2 = (arr) => arr.map((name) => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1))

console.log(capitalizeName(['john', 'Pedro', 'LAURENT']))

// 4) Make an array of strings of the names

const namesOnly = (arr) => arr.map((user) => user.name)

console.log(
  namesOnly([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

const makeStrings = (arr) => {
  const strings = arr.map((user) => {
    if (user.age < 18) {
      return `${user.name} is under age!!`
    } else {
      return `${user.name} can go to the Matrix`
    }
  })
  return strings
}

console.log(
  makeStrings([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
)

// 6) Make an array of the names in h1s, and the ages in h2s

const readyToPutInTheDOM = (arr) =>
  arr.map((user) => `<h1>${user.name}</h1>` + `<h2>${user.age}</h2>`)

console.log(
  readyToPutInTheDOM([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
)

//********************************************************* */
// Unique Values                                            *
//********************************************************* */

const empleados = [
  {
    name: 'Christian',
    age: 23,
    section: 'developer',
  },
  {
    name: 'Laurent',
    age: 22,
    section: 'marketing',
  },
  {
    name: 'Pedro',
    age: 21,
    section: 'developer',
  },
  {
    name: 'Eduardo',
    age: 25,
    section: 'testing',
  },
  {
    name: 'Laura',
    age: 22,
    section: 'social media',
  },
]

const unique_sections = [
  'backend',
  ...new Set(empleados.map((empleado) => empleado.section)),
  'frontend',
]
unique_sections

//********************************************************* */
// Dynamic Object Keys                                      *
//********************************************************* */

const usuario = {
  name: 'Christian',
  age: 23,
  ocupation: 'Student',
}

usuario['girlfriend'] = true

console.log(usuario)

const items = {
  'featured-items': ['item1', 'item2'],
}

console.log(items['featured-items'])

console.log(usuario['name'])

let appState = 'loading'
appState = 'error'
let keyName = 'fruit'
const app = {
  [appState]: true,
}

app[keyName] = 'apple'
console.log(app)

const state = {
  loading: true,
  name: '',
  job: '',
}

const setState = (key, value) => {
  //update dynamically the values / keys
  state[key] = value
}

setState('name', 'Christian')
setState('job', 'Developer')
setState('loading', false)
setState('girlfriends', ['Laura', 'Daniela', 'Kimberly', 'Laurent'])
setState('name', 'Eduardo')

console.log(state)
console.log(state['girlfriends'])

//********************************************************* */
// Filter exercises                                         *
//********************************************************* */

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const fiveAndGreaterOnly = (arr) => arr.filter((number) => number >= 5)
console.log(fiveAndGreaterOnly([3, 6, 8, 2]))

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const evensOnly = (arr) => arr.filter((number) => number % 2 === 0)
console.log(evensOnly([3, 6, 8, 2]))

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const fiveCharactersOrFewerOnly = (arr) => {
  const newArray = arr.filter((string) => string.length <= 5)
  return newArray
}

console.log(
  fiveCharactersOrFewerOnly(['dog', 'wolf', 'by', 'family', 'eaten', 'camping'])
)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const peopleWhoBelongToTheIlluminati = (arr) =>
  (newArrayofPeolple = arr.filter((object) => object.member))

console.log(
  peopleWhoBelongToTheIlluminati([
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true },
  ])
)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const ofAge = (arr) => arr.filter((object) => object.age > 18)

console.log(
  ofAge([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
  ])
)

//********************************************************* */
// Filter and Find                                          *
//********************************************************* */

// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition. If no match - empty array (tecnically you don't even need to use find but there're some use cases where find would be beneficial)

// Find - returns a SINGLE INSTANCE (variable, array, object), return first match, if no match - undefined

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'peter',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'anna',
    age: 35,
    position: 'intern',
  },
]

const fruits = ['lemon', 'banana', 'pear', 'apple']
// filter
const youngPeople = people.filter((person) => person.age <= 25) // evaluates a condition (true / false) and returns based on this
console.log(youngPeople)

// no match
const seniorDevs = people.filter((item) => item.position === 'senior dev')
console.log(seniorDevs) // empty array

// find
const peter = people.filter((person) => person.name === 'peter')
console.log(peter)

const fruit = fruits.filter((fruit) => fruit === 'lemon')
console.log(fruit)
// no match

const olderPerson = people.find((person) => person.age > 35)
console.log(olderPerson) // undefined
// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35)
console.log(randomPerson) // First match is Bob

const anna = people.find((person) => person.name === 'anna')
console.log(anna)
// It's nice to use find when you have UNIQUE VALUES (like API id's)

// Differences when accesing values:

// find
console.log(anna.name)

// Filter
console.log(peter[0].name)

//********************************************************* */
// Reduce BASICS                                            *
//********************************************************* */

// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
    salary: 100,
  },
  {
    name: 'peter',
    age: 25,
    position: 'designer',
    salary: 300,
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
    salary: 400,
  },
  {
    name: 'anna',
    age: 35,
    position: 'intern',
    salary: 10,
  },
]

const total = staff.reduce((acc, curr) => {
  acc += curr.salary
  return acc // you must must return the total
}, 0)

console.log(total)

//********************************************************* */
// Destructuring (Array)                                    *
//********************************************************* */

// faster / easier way to access/unpack variables from arrays, objects

const fruits2 = ['orange', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

// const fruit1 = fruits2[0]
// const fruit2 = fruits2[1]
// const fruit3 = fruits2[2]

const [fruit1, fruit2, fruit3] = fruits2

console.log(fruit1, fruit2, fruit3)

const [enemy, , bob, anna2, kelly, pepito] = friends
console.log(enemy, bob, anna2, kelly, pepito)

let first = 'bob'
let second = 'john'

// let temp = first
// first = second
// second = temp

;[second, first] = [first, second]

console.log(first, second)

//********************************************************* */
// Destructuring (Object)                                   *
//********************************************************* */

const bob2 = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

// const firstName = bob2.first
// const lastName = bob2.last
// const sister = bob2.siblings.sister

const {
  // the order doesn't matter with object destructuring (unlike arrays)
  last: lastName,
  first: firstName,
  siblings: { sister: hermanita },
  zip,
} = bob2

console.log(firstName, lastName, hermanita, zip)

const printPerson = ({ first, last, city, siblings: { sister } }) => {
  // const { first } = person
  console.log(first, last)
}

printPerson(bob2)

//********************************************************* */
// Spread Operator                                          *
//********************************************************* */

// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them (not a reference)

// example with a string (get the letters)
const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)

// example with arrays

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friends2 = [bestFriend, ...boys, ...girls]

console.log(friends2)

// reference
// const newFriends = friends2
// newFriends[0] = 'nancy' // both of them get modified
// console.log(friends2)
// console.log(newFriends)

// copy
const newFriends = [...friends2]
newFriends[0] = 'nancy'
console.log(friends2)
console.log(newFriends)

// ES2018 - ES8 Objects

const person2 = { name: 'john', job: 'developer' }
const newPerson = { ...person2, city: 'chicago', name: 'Christian' } //to add new properties, add a  comman and then you can write or overwrite properties

console.log(person2)
console.log(newPerson)

//********************************************************* */
// Rest Operator                                            *
//********************************************************* */
// syntax is exactly the same as spread operator (...)
// gathers/collects items
// destructuring, functions
// placement important (at the end), careful with the same name
// rest when declare function, spread when invoke the function

// arrays
// looking for items
const fruits3 = ['apple', 'orange', 'lemon', 'banana']
const [first1, second1, ...restOfTheFruits] = fruits3 // using name of rest is a convention
console.log(first1, restOfTheFruits)
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'banana')
console.log(specificFruit)

// objects
// looking for properties
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { job, ...rest } = person
console.log(job, rest)

// functions
// rest when declaring a function
// spread when invoking a function

const getAverage = (name, ...scores) => {
  // gets the average of scores
  console.log(name)
  console.log(scores) // I don't know how many scores I'll pass
  const average =
    scores.reduce((acc, curr) => {
      acc += curr
      return acc
    }, 0) / scores.length
  return average
}
console.log(getAverage(person.name, 8, 5, 7, 4))

const testScores = [5, 2.2, 3.8, 4.5, 4.7]
console.log(getAverage(person.name, ...testScores)) // invoking (spread)

//********************************************************* */
// Reduce (Objects)                                         *
//********************************************************* */

// cart example

const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
]

let { totalItems, cartTotal } = cart.reduce(
  (acc, curr) => {
    const { amount, price } = curr
    // count items
    acc.totalItems += amount
    // count cart total
    acc.cartTotal += price * amount
    return acc
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
)

cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItems, cartTotal)

// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((acc, repo) => {
    const { language } = repo
    if (language) {
      acc[language] = acc[language] + 1 || 1
    }
    return acc
  }, {})
  console.log(newData)
}

fetchRepos()

//********************************************************* */
// Array.from                                               *
//********************************************************* */

// NOT ON PROTOTYPE
// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy2 = 'udemy'

console.log(Array.from(udemy2))
// console.log([...udemy2])

// calling array methos against the nodelist which is turned into array using Array.from
const texts = document.querySelectorAll('.text')
const newText = Array.from(texts)

const persona = newText.find((h2) => h2.textContent === 'person')

console.log(persona)

// pagination example

const items2 = Array.from({ length: 120 }, (_, index) => {
  return index
})

const itemsPerPage = 14
const pages = Math.ceil(items2.length / itemsPerPage)

console.log(items2)
console.log(pages)

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage
  const tempItems = items2.slice(start, start + itemsPerPage) // slice -> [ , )
  return tempItems
})

console.log(newItems)
