const db = require('./index.js');
const Book = require('./index.js');


let authorGenerator = () => {
  let firstName = ['Joe', 'Susan', 'Jake', 'Cherise', 'Ann', 'Alex', 'Jess', 'Daniel', 'Mike', 'Amber', 'Walter', 'Adney',
    'Aldo', 'Aleyn', 'Alford', 'Amherst', 'Annabeth', 'Annalynn',
    'Araminta', 'Ardys', 'Ashland', 'Jax', 'Jaxon', 'Jay', 'Jet'];
  let lastName = ['Smith', 'Lewis', 'Miller', 'Hill', 'Jones', 'Silva', 'Garrett', 'Johnson', 'Garcia', 'Davis', 'Brighton', 'Broderick', 'Bronson', 'Bryce', 'Burdette', 'Burle', 'Byrd', 'Byron', 'Cabal', 'Cage', 'Cahir', 'Cavalon', 'Peony', 'Petunia', 'Pixie'];
  let fullName = [];

  for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 25);
    fullName.push(`${firstName[random]} ${lastName[random]}`);
  }

  return fullName;
};
let authors = authorGenerator();

//////////////////////////////////////

let isbnGenerator = () => {
  let isbnArr = [];

  for (var i = 0; i < 100; i++) {
    let max = Math.pow(10, 10);
    var min = max / 10;
    var number = Math.floor(Math.random() * min) + min;


    isbnArr.push(parseInt('979' + ('' + number).substring(0)));
  }
  return isbnArr;
};
let isbn = isbnGenerator();

//////////////////////////////////////

let titleGenerator = () => {
  let nouns = ['Actor', 'Gold', 'Painting', 'Advertisement', 'Grass', 'Parrot', 'Afternoon', 'Greece', 'Pencil', 'Airport', 'Guitar',
    'Piano', 'Ambulance', 'Hair', 'Pillow', 'Animal', 'Hamburger', 'Pizza', 'Answer', 'Helicopter', 'Planet', 'Apple', 'Helmet', 'Plastic', 'Army'];
  let adjectives = ['Alive', 'Better', 'Careful', 'Careful', 'Clever', 'Dead', 'Easy', 'Famous', 'Gifted', 'Hallowed', 'Helpful', 'Important',
    'Inexpensive', 'Mealy', 'Mushy', 'Diligent', 'Poor', 'Powerful', 'Rich', 'Shy', 'Tender', 'Unimportant', 'Uninterested', 'Vast', 'Wrong'];
  let verbs = ['Act', 'Answer', 'Approve', 'Arrange', 'Break', 'Build', 'Buy', 'Coach', 'Color', 'Cough', 'Create', 'Complete',
    'Cry', 'Dance', 'Describe', 'Draw', 'Drink', 'Eat', 'Edit', 'Enter', 'Exit', 'Imitate', 'Invent', 'Jump', 'Laugh'];

  let fullTitle = [];

  for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 25);
    fullTitle.push(`${adjectives[random]} ${nouns[random]} ${verbs[random]}`);
  }

  return fullTitle;
};
let titles = titleGenerator();

//////////////////////////////////////

let ratingGenerator = () => {
  let ratings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  let randomRatings = [];

  for (var i = 0; i < 100; i++) {
    var number = Math.floor(Math.random() * ratings.length);
    randomRatings.push(ratings[number]);
  }
  return randomRatings;
};
let ratings = ratingGenerator();

//////////////////////////////////////

let categoryGenerator = () => {
  let category = ['Nonfiction', 'Fiction', 'History', 'Fantasy', 'Romance', 'Home and garden', 'Graphic novel', 'Humor', 'Autobiography', 'Business/economics', 'Cookbook', 'Diary'];
  let randomCategory = [];

  for (var i = 0; i < 100; i++) {
    var number = Math.floor(Math.random() * category.length);
    randomCategory.push(category[number]);
  }
  return randomCategory;
}
let category = categoryGenerator();

//////////////////////////////////////

// Seeded w/ 10 real books, then 100 fake books
let seedData = () => {
  let results = {
    rootIsbn: '9780765326386',
    genre: 'Fantasy',
    relatedBooks: [
      {
        isbn: 9781524763169,
        title: 'A Promised Land',
        author: 'Barack Obama',
        genre: 'Autobiography'
      },
      {
        isbn: 9781571311931,
        title: 'World of Wonders: In Praise of Fireflies, Whale Sharks, and Other Astonishments (B&N Exclusive Gift Edition)',
        author: 'Aimee Nezhukumatathil',
        genre: 'Nonfiction'
      },
      {
        isbn: 9781250793676,
        title: 'Rhythm of War (Signed Book) (Stormlight Archive Series #4)',
        author: 'Brandon Sanderson',
        genre: 'Fantasy'
      },
      {
        isbn: 9780316187183,
        title: 'The Trouble with Peace',
        author: 'Joe Abercrombie',
        genre: 'Fantasy'
      },
      {
        isbn: 9780670020553,
        title: 'The Magicians (Magicians Series #1)',
        author: 'Lev Grossman',
        genre: 'Graphic novel'
      },
      {
        isbn: 9780765386489,
        title: 'Soleri: A Novel',
        author: 'Michael Johnston',
        genre: 'Fantasy'
      },
      {
        isbn: 9781250088482,
        title: 'The Empire\'s Ghost: A Novel',
        author: 'Isabelle Steiger',
        genre: 'Fiction'
      },
      {
        isbn: 9781524796372,
        title: 'Lost Roses',
        author: 'Martha Hall Kelly',
        genre: 'Romance'
      },
      {
        isbn: 9780062667632,
        title: 'Leave the World Behind Alam',
        author: 'Rumaan Alam',
        genre: 'Nonfiction'
      },
      {
        isbn: 9781982157999,
        title: 'The Answer Is...: Reflections on My Life',
        author: 'Alex Trebek',
        genre: 'Diary'
      },
    ]
  };

  for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 100);

    results.relatedBooks.push({
      isbn: isbn[random],
      title: titles[random],
      author: authors[random],
      genre: category[random]
    })
  }
  return results;
};

const sampleBooks = seedData();

const insertSampleBooks = function() {
  Book.create(sampleBooks)
    .then(() => db.disconnect());
};

insertSampleBooks();