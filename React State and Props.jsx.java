react-app/
│
├── public/
│   └── index.html
|
├── src/
│   ├── components/
│   │   ├── UserProfile.jsx
│   │   ├── MoviesList.jsx
│   ├── App.js
│   ├── index.js
│   └── App.css
|
├── package.json
└── README.md

{
    "name": "react-app",
    "version": "1.0.0",
    "description": "React app for exploring state, props, hooks, and conditional rendering.",
    "main": "index.js",
    "dependencies": {
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "react-scripts": "5.0.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "author": "Your Name",
    "license": "ISC"
  }

  import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import UserProfile from './components/UserProfile';
import MoviesList from './components/MoviesList';

const App = () => {
  return (
    <div className="App">
      <UserProfile />
      <MoviesList />
    </div>
  );
};

export default App;

import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Alex' };

    // Binding the method to the class instance
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({ name: 'Charlie' });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default UserProfile;

import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', genre: 'Action', description: 'A mind-bending thriller.' },
    { title: 'Titanic', genre: 'Romance', description: 'A tragic love story.' },
    { title: 'The Dark Knight', genre: 'Action', description: 'A superhero action film.' }
  ]);

  const [showGenre, setShowGenre] = useState('All');
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const toggleGenre = () => {
    setShowGenre(showGenre === 'All' ? 'Action' : 'All');
  };

  const filteredMovies = showGenre === 'All' ? movies : movies.filter(movie => movie.genre === 'Action');

  return (
    <div>
      <h2>Favorite Movies</h2>
      <button onClick={toggleGenre}>
        Show {showGenre === 'All' ? 'Action' : 'All'} Movies
      </button>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong>
            <button onClick={() => toggleDetails(index)}>
              {showDetails[index] ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={() => removeMovie(index)}>Remove</button>
            {showDetails[index] && <p>{movie.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

body {
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    color: #333;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  