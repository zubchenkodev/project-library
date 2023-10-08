
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]


const booksGrid = document.querySelector('.books__grid');
const booksSettings = document.querySelector('.books__settings');
const sortSelector = document.querySelector('#sort-select');
const genreSelector = document.querySelector('#genre-select');
const ratingCheckbox = document.querySelector('#highRatingSelector');
const centuryCheckbox = document.querySelector('#thisCenturySelector');
const bookSearch = document.querySelector('#bookSearch');

// displaying all the items 
const displayAllBooks = (books) => {
  let bookCards = books.map(book => 
      `
      <div class="book-card">
        <div class="book-card__heading">
            <div class="book-card__image">
              <img src=${book.image} alt=${book.title}>
            </div>
        </div>
        <div class="book-card__body">
            <div class="book-card__info">
              <span class="book-card__year">${book.year}</span>
              <span class="book-card__genre -${book.genre.toLowerCase().replace(/\s+/g, '')}">${book.genre}</span>
            </div>
            <h3 class="book-card__title">${book.title}</h3>
            <p class="book-card__author">by ${book.author}</p>
            <p class="book-card__description">${book.description}</p>
            <span class="book-card__rating">${book.rating}</span>
        </div>
      </div>
      `   
  ).join('');
  booksGrid.innerHTML = bookCards;
}

displayAllBooks(books);

const showNoBooksMessage = () => {
  booksGrid.innerHTML = `<h3 class="books__message">Sorry, we don't have books that are matching current filters </h3>`
}

const sortBy = (selectorValue, books) => {
  if(selectorValue == 'none') {
    let sortedBooks = [...books];
    return sortedBooks;
  } else {
  let sortedBooks = books.sort((a, b) => {
    const itemA = a[selectorValue];
    const itemB = b[selectorValue];

    if (itemA < itemB) {
      return -1;
    } else if (itemA > itemB) {
      return 1;
    } else {
      return 0;
    }

  })
  return sortedBooks;
  }
  
}

const filterByGenre = (genre, books) => {
  if(genre == 'all') {
    let filteredBooks = [...books];
    return filteredBooks;
  } else {
    const filteredBooks = books.filter((book)=>{
    return book.genre.toLowerCase().replace(/\s+/g, '') == genre;
  })
  return filteredBooks;
  }
  
}

const filterByRating = (checked, books) => {
  if(checked === false) {
    let filteredBooks = [...books];
    return filteredBooks;
  } else {
    let filteredBooks = books.filter((book)=>{
      return book.rating >= 4.5
    })
    return filteredBooks;
  }
}

const filterByCentury = (checked, books) => {
  if(checked === false) {
    let filteredBooks = [...books];
    return filteredBooks;
  } else {
    let filteredBooks = books.filter((book)=>{
      return book.year >= 2000;
    })
    return filteredBooks;
  }
}

const liveSearch = (keyword, books) => {
  if(keyword.length === 0){
    let searchResult = [...books];
    return searchResult;
  } else {
  let searchResult = books.filter((book) => {
    return book.title.toLowerCase().includes(keyword.toLowerCase()) || book.author.toLowerCase().includes(keyword.toLowerCase()) || book.description.toLowerCase().includes(keyword.toLowerCase())
  })
  return searchResult;
  }
  
}


const combineSettings = () => {
    let sortedBooks = sortBy(sortSelector.value, books);
    let filteredBooks = filterByGenre(genreSelector.value, sortedBooks)
    let ratedBooks = filterByRating(ratingCheckbox.checked, filteredBooks);
    let modernBooks = filterByCentury(centuryCheckbox.checked, ratedBooks);
    let searchResult = liveSearch(bookSearch.value, modernBooks);
    return searchResult;
}



sortSelector.addEventListener('change', () => {
  booksGrid.innerHTML = '';
  let sortedBooks = combineSettings();
  displayAllBooks(sortedBooks);
});

genreSelector.addEventListener('change', () => {
  booksGrid.innerHTML = '';
  let filteredBooks = combineSettings();
  if (filteredBooks.length != 0) {
    displayAllBooks(filteredBooks);
  } else {
     showNoBooksMessage();
  }
})

ratingCheckbox.addEventListener('change', () => {
    booksGrid.innerHTML = '';
    let filteredBooks = combineSettings();
    if (filteredBooks.length != 0) {
      displayAllBooks(filteredBooks);
    } else {
       showNoBooksMessage();
    }
})

centuryCheckbox.addEventListener('change', () => {
  booksGrid.innerHTML = '';
  let filteredBooks = combineSettings();
  if (filteredBooks.length != 0) {
    displayAllBooks(filteredBooks);
  } else {
     showNoBooksMessage();
  }
})

bookSearch.addEventListener('input', () => {
  booksGrid.innerHTML = '';
  let filteredBooks = combineSettings();
  if (filteredBooks.length != 0) {
    displayAllBooks(filteredBooks);
  } else {
     showNoBooksMessage();
  }
  
})