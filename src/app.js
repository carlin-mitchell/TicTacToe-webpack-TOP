//################# LOGIC IMPORTS ###################
import GameController from "./logic/GameController";

//############### COMPONENT IMPORTS #################
import Footer from "./components/Footer/Footer";
import Content from "./components/Content";

//################# STYLE IMPORTS ###################
import "./style.css";

const game = GameController();

document.body.appendChild(Content());
document.body.appendChild(Footer());
