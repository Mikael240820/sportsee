import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img src="/assets/logos/logo.svg" alt="sportsee" className="header__logo" />
      <nav className="header__nav">
        <a href="#" className="header__link">Accueil</a>
        <a href="#" className="header__link">Profil</a>
        <a href="#" className="header__link">Réglage</a>
        <a href="#" className="header__link">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;
