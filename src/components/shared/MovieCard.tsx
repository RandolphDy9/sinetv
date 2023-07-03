
const MovieCard = () => {
  return (
    <div className="flex flex-col bg-slate-900 mx-4">
      <img src="https://picsum.photos/200" alt="movie-img" height="100" />
      <div className="px-6 pb-6 pt-3">
        <div className="flex flex-row gap-2 my-2">
        <img src={require('../../assets/star.png')} alt="play-icon" width="24" />
          8.8
        </div>
        <div>
          Spiderman: Into the Spider-verse
        </div>
        <button className="flex flex-row justify-center items-center gap-2 mx-auto my-2 w-full p-1 border border-white">
          <img src={require('../../assets/play.png')} alt="play-icon" width="15" /> Trailer
        </button>
      </div>
    </div>
  )
}

export default MovieCard;