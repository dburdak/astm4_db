db.books.insertMany([
  { "title": "Clean Code", "author": "Robert C. Martin", "category": "Programming", "price": 35, "in_stock": true, "published_year": 2008, "rating": 4.8 },
  { "title": "The Pragmatic Programmer", "author": "Andrew Hunt", "category": "Programming", "price": 42, "in_stock": true, "published_year": 1999, "rating": 4.9 },
  { "title": "Introduction to Algorithms", "author": "Thomas H. Cormen", "category": "Programming", "price": 85, "in_stock": true, "published_year": 2009, "rating": 4.7 },
  { "title": "You Don't Know JS Yet", "author": "Kyle Simpson", "category": "Programming", "price": 25, "in_stock": true, "published_year": 2020, "rating": 4.6 },
  { "title": "Design Patterns", "author": "Erich Gamma", "category": "Programming", "price": 50, "in_stock": false, "published_year": 1994, "rating": 4.8 },
  { "title": "Refactoring", "author": "Martin Fowler", "category": "Programming", "price": 45, "in_stock": true, "published_year": 2018, "rating": 4.7 },
  { "title": "Code Complete", "author": "Steve McConnell", "category": "Programming", "price": 38, "in_stock": true, "published_year": 2004, "rating": 4.5 },
  
  { "title": "Sapiens", "author": "Yuval Noah Harari", "category": "History", "price": 22, "in_stock": true, "published_year": 2011, "rating": 4.8 },
  { "title": "Homo Deus", "author": "Yuval Noah Harari", "category": "History", "price": 24, "in_stock": true, "published_year": 2015, "rating": 4.6 },
  { "title": "21 Lessons for the 21st Century", "author": "Yuval Noah Harari", "category": "History", "price": 23, "in_stock": false, "published_year": 2018, "rating": 4.5 },
  { "title": "The Guns of August", "author": "Barbara W. Tuchman", "category": "History", "price": 18, "in_stock": true, "published_year": 1962, "rating": 4.7 },
  { "title": "A People's History of the United States", "author": "Howard Zinn", "category": "History", "price": 20, "in_stock": true, "published_year": 1980, "rating": 4.4 },
  { "title": "The Silk Roads", "author": "Peter Frankopan", "category": "History", "price": 30, "in_stock": true, "published_year": 2015, "rating": 4.6 },
  { "title": "SPQR: A History of Ancient Rome", "author": "Mary Beard", "category": "History", "price": 28, "in_stock": true, "published_year": 2015, "rating": 4.7 },

  { "title": "Dune", "author": "Frank Herbert", "category": "Sci-Fi", "price": 15, "in_stock": true, "published_year": 1965, "rating": 4.9 },
  { "title": "Neuromancer", "author": "William Gibson", "category": "Sci-Fi", "price": 12, "in_stock": true, "published_year": 1984, "rating": 4.5 },
  { "title": "Foundation", "author": "Isaac Asimov", "category": "Sci-Fi", "price": 14, "in_stock": true, "published_year": 1951, "rating": 4.8 },
  { "title": "Snow Crash", "author": "Neal Stephenson", "category": "Sci-Fi", "price": 16, "in_stock": false, "published_year": 1992, "rating": 4.4 },
  { "title": "The Left Hand of Darkness", "author": "Ursula K. Le Guin", "category": "Sci-Fi", "price": 13, "in_stock": true, "published_year": 1969, "rating": 4.6 },
  { "title": "Hyperion", "author": "Dan Simmons", "category": "Sci-Fi", "price": 19, "in_stock": true, "published_year": 1989, "rating": 4.7 },
  { "title": "Project Hail Mary", "author": "Andy Weir", "category": "Sci-Fi", "price": 26, "in_stock": true, "published_year": 2021, "rating": 4.9 },

  { "title": "Thinking, Fast and Slow", "author": "Daniel Kahneman", "category": "Psychology", "price": 21, "in_stock": true, "published_year": 2011, "rating": 4.6 },
  { "title": "Influence: The Psychology of Persuasion", "author": "Robert Cialdini", "category": "Psychology", "price": 19, "in_stock": true, "published_year": 1984, "rating": 4.7 },
  { "title": "Atomic Habits", "author": "James Clear", "category": "Psychology", "price": 27, "in_stock": true, "published_year": 2018, "rating": 4.8 },
  { "title": "The Power of Habit", "author": "Charles Duhigg", "category": "Psychology", "price": 16, "in_stock": true, "published_year": 2012, "rating": 4.5 },
  { "title": "Man's Search for Meaning", "author": "Viktor Frankl", "category": "Psychology", "price": 11, "in_stock": true, "published_year": 1946, "rating": 4.9 },
  { "title": "Blink", "author": "Malcolm Gladwell", "category": "Psychology", "price": 15, "in_stock": false, "published_year": 2005, "rating": 4.3 },
  { "title": "Quiet: The Power of Introverts", "author": "Susan Cain", "category": "Psychology", "price": 17, "in_stock": true, "published_year": 2012, "rating": 4.6 },
  
  { "title": "The Hobbit", "author": "J.R.R. Tolkien", "category": "Fantasy", "price": 14, "in_stock": true, "published_year": 1937, "rating": 4.9 },
  { "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling", "category": "Fantasy", "price": 20, "in_stock": true, "published_year": 1997, "rating": 4.8 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a52d39923282c00801bab89'),
    '1': ObjectId('6a52d39923282c00801bab8a'),
    '2': ObjectId('6a52d39923282c00801bab8b'),
    '3': ObjectId('6a52d39923282c00801bab8c'),
    '4': ObjectId('6a52d39923282c00801bab8d'),
    '5': ObjectId('6a52d39923282c00801bab8e'),
    '6': ObjectId('6a52d39923282c00801bab8f'),
    '7': ObjectId('6a52d39923282c00801bab90'),
    '8': ObjectId('6a52d39923282c00801bab91'),
    '9': ObjectId('6a52d39923282c00801bab92'),
    '10': ObjectId('6a52d39923282c00801bab93'),
    '11': ObjectId('6a52d39923282c00801bab94'),
    '12': ObjectId('6a52d39923282c00801bab95'),
    '13': ObjectId('6a52d39923282c00801bab96'),
    '14': ObjectId('6a52d39923282c00801bab97'),
    '15': ObjectId('6a52d39923282c00801bab98'),
    '16': ObjectId('6a52d39923282c00801bab99'),
    '17': ObjectId('6a52d39923282c00801bab9a'),
    '18': ObjectId('6a52d39923282c00801bab9b'),
    '19': ObjectId('6a52d39923282c00801bab9c'),
    '20': ObjectId('6a52d39923282c00801bab9d'),
    '21': ObjectId('6a52d39923282c00801bab9e'),
    '22': ObjectId('6a52d39923282c00801bab9f'),
    '23': ObjectId('6a52d39923282c00801baba0'),
    '24': ObjectId('6a52d39923282c00801baba1'),
    '25': ObjectId('6a52d39923282c00801baba2'),
    '26': ObjectId('6a52d39923282c00801baba3'),
    '27': ObjectId('6a52d39923282c00801baba4'),
    '28': ObjectId('6a52d39923282c00801baba5'),
    '29': ObjectId('6a52d39923282c00801baba6')
  }
}
db.books.insertMany([
  {
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "category": "Thriller",
    "price": 18,
    "in_stock": true,
    "published_year": 2019,
    "rating": 4.5
  },
  {
    "title": "Principles: Life and Work",
    "author": "Ray Dalio",
    "category": "Business",
    "price": 45,
    "in_stock": true,
    "published_year": 2017,
    "rating": 4.7
  },
  {
    "title": "The Astrophysics for People in a Hurry",
    "author": "Neil deGrasse Tyson",
    "category": "Science",
    "price": 13,
    "in_stock": false,
    "published_year": 2017,
    "rating": 4.8
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "category": "Philosophy",
    "price": 9,
    "in_stock": true,
    "published_year": 2002,
    "rating": 4.9
  },
  {
    "title": "Designing Data-Intensive Applications",
    "author": "Martin Kleppmann",
    "category": "Programming",
    "price": 55,
    "in_stock": true,
    "published_year": 2017,
    "rating": 4.9
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a52d8ec23282c00801baba7'),
    '1': ObjectId('6a52d8ec23282c00801baba8'),
    '2': ObjectId('6a52d8ec23282c00801baba9'),
    '3': ObjectId('6a52d8ec23282c00801babaa'),
    '4': ObjectId('6a52d8ec23282c00801babab')
  }
}
const cursor = db.collection('inventory').find({ category: 'Programming' });
TypeError: db.collection is not a function
const cursor = db.collection('books').find({ category: 'Programming' });
TypeError: db.collection is not a function
db.books.find({ category: 'Programming' });
{
  _id: ObjectId('6a52d39923282c00801bab89'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Programming',
  price: 35,
  in_stock: true,
  published_year: 2008,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8a'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  category: 'Programming',
  price: 42,
  in_stock: true,
  published_year: 1999,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8c'),
  title: "You Don't Know JS Yet",
  author: 'Kyle Simpson',
  category: 'Programming',
  price: 25,
  in_stock: true,
  published_year: 2020,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab8d'),
  title: 'Design Patterns',
  author: 'Erich Gamma',
  category: 'Programming',
  price: 50,
  in_stock: false,
  published_year: 1994,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8e'),
  title: 'Refactoring',
  author: 'Martin Fowler',
  category: 'Programming',
  price: 45,
  in_stock: true,
  published_year: 2018,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8f'),
  title: 'Code Complete',
  author: 'Steve McConnell',
  category: 'Programming',
  price: 38,
  in_stock: true,
  published_year: 2004,
  rating: 4.5
}
{
  _id: ObjectId('6a52d8ec23282c00801babab'),
  title: 'Designing Data-Intensive Applications',
  author: 'Martin Kleppmann',
  category: 'Programming',
  price: 55,
  in_stock: true,
  published_year: 2017,
  rating: 4.9
}
SELECT * FROM movies WHERE published_year > 2015
SyntaxError: Missing semicolon. (1:13)

> 1 | SELECT * FROM movies WHERE published_year > 2015
    |              ^
SELECT * FROM movies WHERE published_year > 2015;
SyntaxError: Missing semicolon. (1:13)

> 1 | SELECT * FROM movies WHERE published_year > 2015;
    |              ^
SELECT * FROM books WHERE published_year > 2015;
SyntaxError: Missing semicolon. (1:13)

> 1 | SELECT * FROM books WHERE published_year > 2015;
    |              ^
db.books.find({ published_year { $gt: 2015} })
SyntaxError: Unexpected token, expected "," (1:31)

> 1 | db.books.find({ published_year { $gt: 2015} })
    |                                ^
db.books.find({ published_year: { $gt: 2015} })
{
  _id: ObjectId('6a52d39923282c00801bab8c'),
  title: "You Don't Know JS Yet",
  author: 'Kyle Simpson',
  category: 'Programming',
  price: 25,
  in_stock: true,
  published_year: 2020,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab8e'),
  title: 'Refactoring',
  author: 'Martin Fowler',
  category: 'Programming',
  price: 45,
  in_stock: true,
  published_year: 2018,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab92'),
  title: '21 Lessons for the 21st Century',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 23,
  in_stock: false,
  published_year: 2018,
  rating: 4.5
}
{
  _id: ObjectId('6a52d39923282c00801bab9d'),
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  category: 'Sci-Fi',
  price: 26,
  in_stock: true,
  published_year: 2021,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 4.8
}
{
  _id: ObjectId('6a52d8ec23282c00801baba7'),
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  category: 'Thriller',
  price: 18,
  in_stock: true,
  published_year: 2019,
  rating: 4.5
}
{
  _id: ObjectId('6a52d8ec23282c00801baba8'),
  title: 'Principles: Life and Work',
  author: 'Ray Dalio',
  category: 'Business',
  price: 45,
  in_stock: true,
  published_year: 2017,
  rating: 4.7
}
{
  _id: ObjectId('6a52d8ec23282c00801baba9'),
  title: 'The Astrophysics for People in a Hurry',
  author: 'Neil deGrasse Tyson',
  category: 'Science',
  price: 13,
  in_stock: false,
  published_year: 2017,
  rating: 4.8
}
{
  _id: ObjectId('6a52d8ec23282c00801babab'),
  title: 'Designing Data-Intensive Applications',
  author: 'Martin Kleppmann',
  category: 'Programming',
  price: 55,
  in_stock: true,
  published_year: 2017,
  rating: 4.9
}
db.books.find({ price: { $gt: 40} })
{
  _id: ObjectId('6a52d39923282c00801bab8a'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  category: 'Programming',
  price: 42,
  in_stock: true,
  published_year: 1999,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8d'),
  title: 'Design Patterns',
  author: 'Erich Gamma',
  category: 'Programming',
  price: 50,
  in_stock: false,
  published_year: 1994,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8e'),
  title: 'Refactoring',
  author: 'Martin Fowler',
  category: 'Programming',
  price: 45,
  in_stock: true,
  published_year: 2018,
  rating: 4.7
}
{
  _id: ObjectId('6a52d8ec23282c00801baba8'),
  title: 'Principles: Life and Work',
  author: 'Ray Dalio',
  category: 'Business',
  price: 45,
  in_stock: true,
  published_year: 2017,
  rating: 4.7
}
{
  _id: ObjectId('6a52d8ec23282c00801babab'),
  title: 'Designing Data-Intensive Applications',
  author: 'Martin Kleppmann',
  category: 'Programming',
  price: 55,
  in_stock: true,
  published_year: 2017,
  rating: 4.9
}
db.books.find({ price: true })
db.books.find({ price = true })
SyntaxError: Invalid shorthand property initializer. (1:22)

> 1 | db.books.find({ price = true })
    |                       ^
db.books.find({ price: true })
db.books.find({ in_stock: true })
{
  _id: ObjectId('6a52d39923282c00801bab89'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Programming',
  price: 35,
  in_stock: true,
  published_year: 2008,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8a'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  category: 'Programming',
  price: 42,
  in_stock: true,
  published_year: 1999,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8c'),
  title: "You Don't Know JS Yet",
  author: 'Kyle Simpson',
  category: 'Programming',
  price: 25,
  in_stock: true,
  published_year: 2020,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab8e'),
  title: 'Refactoring',
  author: 'Martin Fowler',
  category: 'Programming',
  price: 45,
  in_stock: true,
  published_year: 2018,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8f'),
  title: 'Code Complete',
  author: 'Steve McConnell',
  category: 'Programming',
  price: 38,
  in_stock: true,
  published_year: 2004,
  rating: 4.5
}
{
  _id: ObjectId('6a52d39923282c00801bab90'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 22,
  in_stock: true,
  published_year: 2011,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab91'),
  title: 'Homo Deus',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 24,
  in_stock: true,
  published_year: 2015,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab93'),
  title: 'The Guns of August',
  author: 'Barbara W. Tuchman',
  category: 'History',
  price: 18,
  in_stock: true,
  published_year: 1962,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab94'),
  title: "A People's History of the United States",
  author: 'Howard Zinn',
  category: 'History',
  price: 20,
  in_stock: true,
  published_year: 1980,
  rating: 4.4
}
{
  _id: ObjectId('6a52d39923282c00801bab95'),
  title: 'The Silk Roads',
  author: 'Peter Frankopan',
  category: 'History',
  price: 30,
  in_stock: true,
  published_year: 2015,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab96'),
  title: 'SPQR: A History of Ancient Rome',
  author: 'Mary Beard',
  category: 'History',
  price: 28,
  in_stock: true,
  published_year: 2015,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab97'),
  title: 'Dune',
  author: 'Frank Herbert',
  category: 'Sci-Fi',
  price: 15,
  in_stock: true,
  published_year: 1965,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab98'),
  title: 'Neuromancer',
  author: 'William Gibson',
  category: 'Sci-Fi',
  price: 12,
  in_stock: true,
  published_year: 1984,
  rating: 4.5
}
{
  _id: ObjectId('6a52d39923282c00801bab99'),
  title: 'Foundation',
  author: 'Isaac Asimov',
  category: 'Sci-Fi',
  price: 14,
  in_stock: true,
  published_year: 1951,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab9b'),
  title: 'The Left Hand of Darkness',
  author: 'Ursula K. Le Guin',
  category: 'Sci-Fi',
  price: 13,
  in_stock: true,
  published_year: 1969,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab9c'),
  title: 'Hyperion',
  author: 'Dan Simmons',
  category: 'Sci-Fi',
  price: 19,
  in_stock: true,
  published_year: 1989,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab9d'),
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  category: 'Sci-Fi',
  price: 26,
  in_stock: true,
  published_year: 2021,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab9e'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  category: 'Psychology',
  price: 21,
  in_stock: true,
  published_year: 2011,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab9f'),
  title: 'Influence: The Psychology of Persuasion',
  author: 'Robert Cialdini',
  category: 'Psychology',
  price: 19,
  in_stock: true,
  published_year: 1984,
  rating: 4.7
}
Type "it" for more
db.books.find({ author: 'Thomas H. Cormen' })
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
db.books.find({ rating: {$gt: 4.5 })
SyntaxError: Unexpected token, expected "," (1:35)

> 1 | db.books.find({ rating: {$gt: 4.5 })
    |                                    ^
db.books.find({ rating: {$gt: 4.5 }})
{
  _id: ObjectId('6a52d39923282c00801bab89'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Programming',
  price: 35,
  in_stock: true,
  published_year: 2008,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8a'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  category: 'Programming',
  price: 42,
  in_stock: true,
  published_year: 1999,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab8c'),
  title: "You Don't Know JS Yet",
  author: 'Kyle Simpson',
  category: 'Programming',
  price: 25,
  in_stock: true,
  published_year: 2020,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab8d'),
  title: 'Design Patterns',
  author: 'Erich Gamma',
  category: 'Programming',
  price: 50,
  in_stock: false,
  published_year: 1994,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab8e'),
  title: 'Refactoring',
  author: 'Martin Fowler',
  category: 'Programming',
  price: 45,
  in_stock: true,
  published_year: 2018,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab90'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 22,
  in_stock: true,
  published_year: 2011,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab91'),
  title: 'Homo Deus',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 24,
  in_stock: true,
  published_year: 2015,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab93'),
  title: 'The Guns of August',
  author: 'Barbara W. Tuchman',
  category: 'History',
  price: 18,
  in_stock: true,
  published_year: 1962,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab95'),
  title: 'The Silk Roads',
  author: 'Peter Frankopan',
  category: 'History',
  price: 30,
  in_stock: true,
  published_year: 2015,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab96'),
  title: 'SPQR: A History of Ancient Rome',
  author: 'Mary Beard',
  category: 'History',
  price: 28,
  in_stock: true,
  published_year: 2015,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab97'),
  title: 'Dune',
  author: 'Frank Herbert',
  category: 'Sci-Fi',
  price: 15,
  in_stock: true,
  published_year: 1965,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab99'),
  title: 'Foundation',
  author: 'Isaac Asimov',
  category: 'Sci-Fi',
  price: 14,
  in_stock: true,
  published_year: 1951,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801bab9b'),
  title: 'The Left Hand of Darkness',
  author: 'Ursula K. Le Guin',
  category: 'Sci-Fi',
  price: 13,
  in_stock: true,
  published_year: 1969,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab9c'),
  title: 'Hyperion',
  author: 'Dan Simmons',
  category: 'Sci-Fi',
  price: 19,
  in_stock: true,
  published_year: 1989,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801bab9d'),
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  category: 'Sci-Fi',
  price: 26,
  in_stock: true,
  published_year: 2021,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab9e'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  category: 'Psychology',
  price: 21,
  in_stock: true,
  published_year: 2011,
  rating: 4.6
}
{
  _id: ObjectId('6a52d39923282c00801bab9f'),
  title: 'Influence: The Psychology of Persuasion',
  author: 'Robert Cialdini',
  category: 'Psychology',
  price: 19,
  in_stock: true,
  published_year: 1984,
  rating: 4.7
}
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 4.8
}
{
  _id: ObjectId('6a52d39923282c00801baba2'),
  title: "Man's Search for Meaning",
  author: 'Viktor Frankl',
  category: 'Psychology',
  price: 11,
  in_stock: true,
  published_year: 1946,
  rating: 4.9
}
Type "it" for more
db.collection('inventory').updateOne(
  { title: "Man's Search for Meaning" },
  { $set: { 'price': '30' }})
TypeError: db.collection is not a function
db.books.updateOne(
  { title: "Man's Search for Meaning" },
  { $set: { 'price': '30' }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 4.8
}
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { 'price': 'false' }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 'false',
  in_stock: true,
  published_year: 2018,
  rating: 4.8
}
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { 'in_stock': false }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 'false',
  in_stock: false,
  published_year: 2018,
  rating: 4.8
}
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { 'price': 27 }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: false,
  published_year: 2018,
  rating: 4.8
}
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { 'in_stock': true }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 4.8
}
db.books.find({ title: "Man's Search for Meaning"})
{
  _id: ObjectId('6a52d39923282c00801baba2'),
  title: "Man's Search for Meaning",
  author: 'Viktor Frankl',
  category: 'Psychology',
  price: '30',
  in_stock: true,
  published_year: 1946,
  rating: 4.9
}
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { 'rating': 3.8 }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({ title: "Atomic Habits"})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 3.8
}
db.books.find({ rating: {$lt: 4.0}})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 3.8
}
db.books.find({ rating: {$lt: 4.2}})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 3.8
}
db.books.find({ rating: {$lt: 4.4}})
{
  _id: ObjectId('6a52d39923282c00801baba0'),
  title: 'Atomic Habits',
  author: 'James Clear',
  category: 'Psychology',
  price: 27,
  in_stock: true,
  published_year: 2018,
  rating: 3.8
}
{
  _id: ObjectId('6a52d39923282c00801baba3'),
  title: 'Blink',
  author: 'Malcolm Gladwell',
  category: 'Psychology',
  price: 15,
  in_stock: false,
  published_year: 2005,
  rating: 4.3
}
db.books.deleteMany({ rating: {$lt: 4.4} })
{
  acknowledged: true,
  deletedCount: 2
}
db.books.find({ rating: {$lt: 4.4}})
db.people.aggregate( [ { $group : { _id : "$category", avgPrice: { $avg: "$price" } } } ] )
db.books.aggregate( [ { $group : { _id : "$category", avgPrice: { $avg: "$price" } } } ] )
{
  _id: 'Science',
  avgPrice: 13
}
{
  _id: 'Sci-Fi',
  avgPrice: 16.428571428571427
}
{
  _id: 'History',
  avgPrice: 23.571428571428573
}
{
  _id: 'Programming',
  avgPrice: 46.875
}
{
  _id: 'Business',
  avgPrice: 45
}
{
  _id: 'Philosophy',
  avgPrice: 9
}
{
  _id: 'Psychology',
  avgPrice: 18.25
}
{
  _id: 'Fantasy',
  avgPrice: 17
}
{
  _id: 'Thriller',
  avgPrice: 18
}
db.books.aggregate( [ { $group : { _id : "$category", totalBooks: { $sum: 1 } } } ] )
{
  _id: 'Science',
  totalBooks: 1
}
{
  _id: 'Sci-Fi',
  totalBooks: 7
}
{
  _id: 'History',
  totalBooks: 7
}
{
  _id: 'Programming',
  totalBooks: 8
}
{
  _id: 'Business',
  totalBooks: 1
}
{
  _id: 'Philosophy',
  totalBooks: 1
}
{
  _id: 'Psychology',
  totalBooks: 5
}
{
  _id: 'Fantasy',
  totalBooks: 2
}
{
  _id: 'Thriller',
  totalBooks: 1
}
db.books.aggregate( [ { $group : { _id : "$category", avgPrice: { $avg: "$rating" } } } ] )
{
  _id: 'Fantasy',
  avgPrice: 4.85
}
{
  _id: 'Sci-Fi',
  avgPrice: 4.685714285714285
}
{
  _id: 'History',
  avgPrice: 4.614285714285714
}
{
  _id: 'Business',
  avgPrice: 4.7
}
{
  _id: 'Psychology',
  avgPrice: 4.66
}
{
  _id: 'Philosophy',
  avgPrice: 4.9
}
{
  _id: 'Programming',
  avgPrice: 4.7375
}
{
  _id: 'Thriller',
  avgPrice: 4.5
}
{
  _id: 'Science',
  avgPrice: 4.8
}
db.books.find({}).sort({ price: -1 }).limit(5)
{
  _id: ObjectId('6a52d39923282c00801baba2'),
  title: "Man's Search for Meaning",
  author: 'Viktor Frankl',
  category: 'Psychology',
  price: '30',
  in_stock: true,
  published_year: 1946,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8b'),
  title: 'Introduction to Algorithms',
  author: 'Thomas H. Cormen',
  category: 'Programming',
  price: 85,
  in_stock: true,
  published_year: 2009,
  rating: 4.7
}
{
  _id: ObjectId('6a52d8ec23282c00801babab'),
  title: 'Designing Data-Intensive Applications',
  author: 'Martin Kleppmann',
  category: 'Programming',
  price: 55,
  in_stock: true,
  published_year: 2017,
  rating: 4.9
}
{
  _id: ObjectId('6a52d39923282c00801bab8d'),
  title: 'Design Patterns',
  author: 'Erich Gamma',
  category: 'Programming',
  price: 50,
  in_stock: false,
  published_year: 1994,
  rating: 4.8
}
{
  _id: ObjectId('6a52d8ec23282c00801baba8'),
  title: 'Principles: Life and Work',
  author: 'Ray Dalio',
  category: 'Business',
  price: 45,
  in_stock: true,
  published_year: 2017,
  rating: 4.7
}
db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
}).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'bookstore.books',
    parsedQuery: {
      '$and': [
        {
          category: {
            '$eq': 'Programming'
          }
        },
        {
          published_year: {
            '$gte': 2020
          }
        }
      ]
    },
    indexFilterSet: false,
    queryHash: '92EDD004',
    planCacheShapeHash: '92EDD004',
    planCacheKey: '195A970C',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          {
            category: {
              '$eq': 'Programming'
            }
          },
          {
            published_year: {
              '$gte': 2020
            }
          }
        ]
      },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 33,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          {
            category: {
              '$eq': 'Programming'
            }
          },
          {
            published_year: {
              '$gte': 2020
}
db.books.createIndex({
    category: 1,
    published_year: 1
})
category_1_published_year_1
db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
}).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'bookstore.books',
    parsedQuery: {
      '$and': [
        {
          category: {
            '$eq': 'Programming'
          }
        },
        {
          published_year: {
            '$gte': 2020
          }
        }
      ]
    },
    indexFilterSet: false,
    queryHash: '92EDD004',
    planCacheShapeHash: '92EDD004',
    planCacheKey: '795A952C',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: {
          category: 1,
          published_year: 1
        },
        indexName: 'category_1_published_year_1',
        isMultiKey: false,
        multiKeyPaths: {
          category: [],
          published_year: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          category: [
            '["Programming", "Programming"]'
          ],
          published_year: [
            '[2020, inf.0]'
          ]
        }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 1,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
}

