import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const App = () => {
  return (
    <main>
      <Header />
      <hr />
      <Routes />
      <GlobalStyle />
    </main>
  );
};

export default App;
