const Navbar = () => {
  return (
    <div className="main-header pt-14 flex justify-center mr-1">
      <div className="logo">
        <img className="flex w-auto h-10" src="/logo.png" alt="logo" />
      </div>
      <div className="navbar">
        <ul className="nav-items uppercase font-bold flex flex-row mt-1">
          <li className="item relative mr-10 pl-10 pb-2"><a href="#">Falcon 9</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Falcon Heavy</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Dragon</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Starship</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Human Spaceflight</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Rideshare</a></li>
          <li className="item relative mr-10 pb-2"><a href="#">Starlink</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
