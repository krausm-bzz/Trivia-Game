const questions = [
    // General Knowledge
    { category: 'General Knowledge', question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { category: 'General Knowledge', question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
    { category: 'General Knowledge', question: 'What is the largest mammal?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'], answer: 'Blue Whale' },
    { category: 'General Knowledge', question: 'Who wrote "Romeo and Juliet"?', options: ['Shakespeare', 'Hemingway', 'Twain', 'Dickens'], answer: 'Shakespeare' },
    { category: 'General Knowledge', question: 'What is the boiling point of water?', options: ['90°C', '100°C', '120°C', '80°C'], answer: '100°C' },

    // Science
    { category: 'Science', question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 'Au' },
    { category: 'Science', question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Diamond', 'Iron', 'Platinum'], answer: 'Diamond' },
    { category: 'Science', question: 'What planet is closest to the sun?', options: ['Venus', 'Mars', 'Mercury', 'Earth'], answer: 'Mercury' },
    { category: 'Science', question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], answer: 'Carbon Dioxide' },
    { category: 'Science', question: 'What is the most abundant gas in Earth’s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'], answer: 'Nitrogen' },

    // History
    { category: 'History', question: 'Who was the first person to walk on the moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'], answer: 'Neil Armstrong' },
    { category: 'History', question: 'In which year did the Titanic sink?', options: ['1905', '1912', '1923', '1930'], answer: '1912' },
    { category: 'History', question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'George Washington', 'John Adams', 'Thomas Jefferson'], answer: 'George Washington' },
    { category: 'History', question: 'Which war was fought between the North and South regions in the United States?', options: ['World War I', 'World War II', 'The Civil War', 'The Revolutionary War'], answer: 'The Civil War' },
    { category: 'History', question: 'What ancient civilization built the pyramids?', options: ['Romans', 'Greeks', 'Egyptians', 'Mayans'], answer: 'Egyptians' },

    // Geography
    { category: 'Geography', question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 'Pacific Ocean' },
    { category: 'Geography', question: 'Which country has the longest coastline?', options: ['United States', 'Canada', 'Russia', 'Australia'], answer: 'Canada' },
    { category: 'Geography', question: 'Which is the largest desert in the world?', options: ['Sahara', 'Gobi', 'Arctic', 'Antarctica'], answer: 'Antarctica' },
    { category: 'Geography', question: 'What is the capital city of Australia?', options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'], answer: 'Canberra' },
    { category: 'Geography', question: 'What is the smallest country in the world?', options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'], answer: 'Vatican City' },

    // Entertainment
    { category: 'Entertainment', question: 'Which movie won the Academy Award for Best Picture in 1994?', options: ['The Shawshank Redemption', 'Forrest Gump', 'Pulp Fiction', 'The Lion King'], answer: 'Forrest Gump' },
    { category: 'Entertainment', question: 'Who is known as the "King of Pop"?', options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Madonna'], answer: 'Michael Jackson' },
    { category: 'Entertainment', question: 'Which band released the album "Abbey Road"?', options: ['The Beatles', 'The Rolling Stones', 'Pink Floyd', 'Led Zeppelin'], answer: 'The Beatles' },
    { category: 'Entertainment', question: 'Who directed the movie "Inception"?', options: ['Steven Spielberg', 'Christopher Nolan', 'James Cameron', 'Quentin Tarantino'], answer: 'Christopher Nolan' },
    { category: 'Entertainment', question: 'Which video game franchise includes characters like Mario, Luigi, and Bowser?', options: ['The Legend of Zelda', 'Pokemon', 'Super Mario', 'Final Fantasy'], answer: 'Super Mario' },

    // Sports
    { category: 'Sports', question: 'How many players are on a soccer team?', options: ['9', '10', '11', '12'], answer: '11' },
    { category: 'Sports', question: 'In which sport would you perform a slam dunk?', options: ['Baseball', 'Football', 'Basketball', 'Tennis'], answer: 'Basketball' },
    { category: 'Sports', question: 'What is the national sport of Japan?', options: ['Karate', 'Sumo Wrestling', 'Baseball', 'Judo'], answer: 'Sumo Wrestling' },
    { category: 'Sports', question: 'Which country has won the most FIFA World Cups?', options: ['Germany', 'Brazil', 'Argentina', 'Italy'], answer: 'Brazil' },
    { category: 'Sports', question: 'In which sport do players use a shuttlecock?', options: ['Tennis', 'Badminton', 'Squash', 'Ping Pong'], answer: 'Badminton' },

    // Literature
    { category: 'Literature', question: 'Who wrote "Moby-Dick"?', options: ['Mark Twain', 'Herman Melville', 'Charles Dickens', 'F. Scott Fitzgerald'], answer: 'Herman Melville' },
    { category: 'Literature', question: 'Which novel begins with "Call me Ishmael"?', options: ['Moby-Dick', 'The Great Gatsby', 'To Kill a Mockingbird', 'Pride and Prejudice'], answer: 'Moby-Dick' },
    { category: 'Literature', question: 'Who wrote the Harry Potter series?', options: ['J.R.R. Tolkien', 'George R.R. Martin', 'J.K. Rowling', 'Suzanne Collins'], answer: 'J.K. Rowling' },
    { category: 'Literature', question: 'Which book features the character Jay Gatsby?', options: ['The Great Gatsby', '1984', 'The Catcher in the Rye', 'To Kill a Mockingbird'], answer: 'The Great Gatsby' },
    { category: 'Literature', question: 'Who wrote "The Catcher in the Rye"?', options: ['Ernest Hemingway', 'J.D. Salinger', 'F. Scott Fitzgerald', 'John Steinbeck'], answer: 'J.D. Salinger' },

    // Music
    { category: 'Music', question: 'Who composed the "Fifth Symphony"?', options: ['Mozart', 'Bach', 'Beethoven', 'Tchaikovsky'], answer: 'Beethoven' },
    { category: 'Music', question: 'Which band is known for the album "Dark Side of the Moon"?', options: ['Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Queen'], answer: 'Pink Floyd' },
    { category: 'Music', question: 'What is the name of the lead singer of the Rolling Stones?', options: ['Freddie Mercury', 'Mick Jagger', 'Robert Plant', 'Steven Tyler'], answer: 'Mick Jagger' },
    { category: 'Music', question: 'Which classical composer was deaf?', options: ['Mozart', 'Beethoven', 'Bach', 'Handel'], answer: 'Beethoven' },
    { category: 'Music', question: 'Who sang "Like a Rolling Stone"?', options: ['Bob Dylan', 'Elvis Presley', 'Johnny Cash', 'David Bowie'], answer: 'Bob Dylan' },

    // Technology
    { category: 'Technology', question: 'What does CPU stand for?', options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Control Processing Unit'], answer: 'Central Processing Unit' },
    { category: 'Technology', question: 'Who is the founder of Microsoft?', options: ['Steve Jobs', 'Bill Gates', 'Larry Page', 'Mark Zuckerberg'], answer: 'Bill Gates' },
    { category: 'Technology', question: 'What was the first programming language?', options: ['FORTRAN', 'COBOL', 'Assembly', 'BASIC'], answer: 'FORTRAN' },
    { category: 'Technology', question: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'HyperText Transmission Protocol', 'HyperTool Transfer Protocol', 'HyperTool Transmission Protocol'], answer: 'HyperText Transfer Protocol' },
    { category: 'Technology', question: 'Which company developed the Android operating system?', options: ['Apple', 'Microsoft', 'Google', 'Samsung'], answer: 'Google' },

    // Art
    { category: 'Art', question: 'Who painted the "Mona Lisa"?', options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], answer: 'Leonardo da Vinci' },
    { category: 'Art', question: 'Which artist is known for cutting off part of his ear?', options: ['Pablo Picasso', 'Vincent Van Gogh', 'Salvador Dalí', 'Claude Monet'], answer: 'Vincent Van Gogh' },
    { category: 'Art', question: 'What is the art movement associated with Salvador Dalí?', options: ['Cubism', 'Surrealism', 'Impressionism', 'Baroque'], answer: 'Surrealism' },
    { category: 'Art', question: 'What is the name of the famous painting "The Persistence of Memory"?', options: ['Vincent Van Gogh', 'Salvador Dalí', 'Claude Monet', 'Pablo Picasso'], answer: 'Salvador Dalí' },
    { category: 'Art', question: 'Which artist painted "The Starry Night"?', options: ['Pablo Picasso', 'Claude Monet', 'Leonardo da Vinci', 'Vincent Van Gogh'], answer: 'Vincent Van Gogh' },

    // Math
    { category: 'Math', question: 'What is the value of Pi (π) to two decimal places?', options: ['3.12', '3.14', '3.16', '3.18'], answer: '3.14' },
    { category: 'Math', question: 'What is the square root of 64?', options: ['6', '7', '8', '9'], answer: '8' },
    { category: 'Math', question: 'What is the sum of the angles in a triangle?', options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'], answer: '180 degrees' },
    { category: 'Math', question: 'What is 7 multiplied by 8?', options: ['48', '54', '56', '64'], answer: '56' },
    { category: 'Math', question: 'What is the derivative of x^2?', options: ['1', '2x', 'x', 'x^2'], answer: '2x' },

    // Animals
    { category: 'Animals', question: 'What is the fastest land animal?', options: ['Lion', 'Cheetah', 'Eagle', 'Horse'], answer: 'Cheetah' },
    { category: 'Animals', question: 'What is the largest species of shark?', options: ['Great White Shark', 'Hammerhead Shark', 'Whale Shark', 'Tiger Shark'], answer: 'Whale Shark' },
    { category: 'Animals', question: 'How many legs does a spider have?', options: ['6', '8', '10', '12'], answer: '8' },
    { category: 'Animals', question: 'What is the only mammal capable of true flight?', options: ['Bat', 'Bird', 'Flying Squirrel', 'Sugar Glider'], answer: 'Bat' },
    { category: 'Animals', question: 'Which animal is known as the "King of the Jungle"?', options: ['Tiger', 'Lion', 'Elephant', 'Bear'], answer: 'Lion' },

    // Food
    { category: 'Food', question: 'Which fruit is known for having seeds on the outside?', options: ['Apple', 'Strawberry', 'Banana', 'Grapes'], answer: 'Strawberry' },
    { category: 'Food', question: 'What is the main ingredient in guacamole?', options: ['Tomato', 'Avocado', 'Onion', 'Lemon'], answer: 'Avocado' },
    { category: 'Food', question: 'Which country is famous for sushi?', options: ['China', 'Korea', 'Japan', 'Thailand'], answer: 'Japan' },
    { category: 'Food', question: 'Which Italian dish consists of layers of pasta, cheese, and meat sauce?', options: ['Spaghetti', 'Risotto', 'Lasagna', 'Pizza'], answer: 'Lasagna' },
    { category: 'Food', question: 'What is the main ingredient in hummus?', options: ['Chickpeas', 'Lentils', 'Beans', 'Peas'], answer: 'Chickpeas' }
];
