import { useContext } from "react";
import { withRouter } from "react-router-dom";
import { HeaderContext } from "../../App";
import { MAIN_HEADER } from "../../Components/Shared/Constants";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";

const PageContainer = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
};

export default withRouter(PageContainer);
