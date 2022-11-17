import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { SECOND_HEADER } from "../../Components/Shared/Constants";
import Header from "./Header";
import "./Header.css";
import LibraryHeader from "./LibraryHeader";

function HeaderContainer() {
  var location = useLocation();
  var secondHeader = location.pathname === SECOND_HEADER;
  return <>{secondHeader ? <LibraryHeader /> : <Header />}</>;
}

export default HeaderContainer;
