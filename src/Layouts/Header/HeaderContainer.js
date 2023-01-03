import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import {
  VIDEOCLASES,
  VIDEOCLASES_THREE,
  VIDEOCLASES_TWO,
} from "../../Components/Shared/Constants";
import Header from "./Header";
import "./Header.css";
import LibraryHeader from "./LibraryHeader";

function HeaderContainer() {
  var location = useLocation();
  var secondHeader =
    location.pathname === VIDEOCLASES ||
    location.pathname === VIDEOCLASES_TWO ||
    location.pathname === VIDEOCLASES_THREE;
  return <>{secondHeader ? <LibraryHeader /> : <Header />}</>;
}

export default HeaderContainer;
