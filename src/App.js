import React from "react";
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Burger from "./components/Burger/Burger";
class App extends React.Component {
  render() {
    return <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>;
  }
}
export default App;
