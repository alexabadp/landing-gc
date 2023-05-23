import { withRouter } from "react-router-dom";
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
