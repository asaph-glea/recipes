import Page from "./pages/Page";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
    <GiKnifeFork/>
      <Logo className="App">  Delicious</Logo>
    </Nav>
        <Search/>
        <Category/>
        <Page />
    </BrowserRouter>
    </div>
  );
}

const Logo = styled.div`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}
`

export default App;
 
