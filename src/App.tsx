import './App.css';
import Jumbotron from './components/Jumbotron';
import MovieSection from './components/MovieSection';
import Footer from './components/shared/Footer';
import Heading from './components/shared/Heading';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="flex flex-col bg-black min-h-screen mx-auto text-white">
      <div className="mx-28">
        <Navbar />
        <Jumbotron />
        <Heading title="What to watch" />
        <MovieSection isMovie={true} sectionTitle="Now Playing" sectionDescription="Currently being watch." itemsToShow={3} />
        <MovieSection isMovie={true} sectionTitle="Trending Movies" sectionDescription="Here are the trending movies." itemsToShow={6} />
        <MovieSection isMovie={true} sectionTitle="TV Series to watch" sectionDescription="Here are the trending TV series." itemsToShow={6} />
        <MovieSection isMovie={true} sectionTitle="Top Rated" sectionDescription="The top rated movies." itemsToShow={4} />
        <MovieSection isMovie={false} sectionTitle="Movie stars" sectionDescription="The leading actors and actresses." />
        <Footer />
      </div>
    </div>
  );
}

export default App;
