
const Navbar = () => {
  return (
    <nav className="bg-black my-4">
      <div className="flex flex-row justify-between items-center h-12">
        <div className="bg-yellow-400 text-xl text-black font-bold p-1 rounded-lg">Sine TV</div>
        <div className="text-black flex flex-row gap-2 bg-white">
          <input type="text" className="px-4 py-1 outline-none" placeholder="Search movie" />
          <img src={require('../../assets/search.png')} alt="search-icon" width="24" className="m-2 p-1 cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;