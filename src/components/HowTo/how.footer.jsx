import BarcodeImage from "../../assets/images/barcode.png";
import "./how.style.scss";
const HowImageBox = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        e-dugun.com'da yer alan kullanıcıların oluşturduğu tüm içerik, görüş ve
        bilgilerin doğruluğu, eksiksiz ve değişmez olduğu, yayınlanması ile
        ilgili yasal yükümlülükler içeriği oluşturan kullanıcıya aittir. Bu
        içeriğin, görüş ve bilgilerin yanlışlık, eksiklik veya yasalarla
        düzenlenmiş kurallara aykırılığından e-dugun.com hiçbir şekilde sorumlu
        değildir. Sorularınız için ilan sahibi ile irtibata geçebilirsiniz. Yer
        Sağlayıcı Belge No : ….
      </div>
      <img src={BarcodeImage} />
    </div>
  );
};
export default HowImageBox;
