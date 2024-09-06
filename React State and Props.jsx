class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        
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

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller.' },
        { title: 'The Matrix', genre: 'Action', details: 'A hacker discovers reality.' },
        { title: 'Titanic', genre: 'Romance', details: 'A tragic love story.' }
    ]);

    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller.', showDetails: false },
        { title: 'The Matrix', genre: 'Action', details: 'A hacker discovers reality.', showDetails: false },
        { title: 'Titanic', genre: 'Romance', details: 'A tragic love story.', showDetails: false }
    ]);

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index} onClick={() => toggleDetails(index)}>
                        {movie.title}
                        {movie.showDetails && <p>{movie.details}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller.', showDetails: false },
        { title: 'The Matrix', genre: 'Action', details: 'A hacker discovers reality.', showDetails: false },
        { title: 'Titanic', genre: 'Romance', details: 'A tragic love story.', showDetails: false }
    ]);

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>
                            {movie.title}
                        </span>
                        {movie.showDetails && <p>{movie.details}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller.', showDetails: false },
        { title: 'The Matrix', genre: 'Action', details: 'A hacker discovers reality.', showDetails: false },
        { title: 'Titanic', genre: 'Romance', details: 'A tragic love story.', showDetails: false }
    ]);
    const [filter, setFilter] = useState('All');

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    const filteredMovies = filter === 'All' ? movies : movies.filter(movie => movie.genre === filter);

    return (
        <div>
            <h2>Favorite Movies</h2>
            <button onClick={() => setFilter(filter === 'All' ? 'Action' : 'All')}>
                {filter === 'All' ? 'Show Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>
                            {movie.title}
                        </span>
                        {movie.showDetails && <p>{movie.details}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
