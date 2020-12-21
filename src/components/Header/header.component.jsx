import "./header.style.scss";
import Logo from "./header.logo";
const Header = () => {
  return (
    <div className="header">
      <div className="header__top" />
      <div className="header__bottom">
        <div className="header__logo-box">
          <Logo />
          <span>Türkiye’nin Yeni Düğün Platformu</span>
        </div>
        <div className="header__links">
          <a href="/test">Giriş Yap</a>
          <span>|</span>
          <a href="/test">Üye Ol (Ücretsiz)</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
