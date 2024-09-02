import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import useOnlineStatus from "../../utils/useOnlineStatus";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  return onlineStatus === false ? (
    <h2>Looks like you are offline </h2>
  ) : (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
