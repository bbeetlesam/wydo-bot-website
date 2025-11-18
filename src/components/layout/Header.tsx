import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header className="w-screen bg-slate-100">
      <section className="flex">
        <div className="">
          WYDO!
        </div>
        <div className="">
          <nav>
            Home, Predict, About
          </nav>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </div>
      </section>
    </header>
  )
}

export default Header;
