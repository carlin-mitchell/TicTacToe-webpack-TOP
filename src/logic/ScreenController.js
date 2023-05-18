import Footer from "../components/Footer/Footer";
import Content from "../components/Content";

const ScreenController = (() => {
  const setInitialView = () => {
    document.body.appendChild(Content());
    document.body.appendChild(Footer());
  };

  return { setInitialView };
})();

export default ScreenController;
