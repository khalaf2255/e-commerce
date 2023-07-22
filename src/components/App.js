import { useState } from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Shop from "./Shop.js";
import { useLocalStorageState } from "./useLocalStorageState";

const products = [
  {
    id: 1,
    name: "Shirt",
    src: "./shirts/1.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
  {
    id: 2,
    name: "Coat",
    src: "./shirts/2.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
  {
    id: 3,
    name: "Hat",
    src: "./shirts/3.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
  {
    id: 4,
    name: "Shose",
    src: "./shirts/4.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
  {
    id: 5,
    name: "Pants",
    src: "./shirts/6.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
  {
    id: 6,
    name: "pull",
    src: "./shirts/5.jpg",
    describtion:
      "Anytxt is a powerful file content search Windows freeware, not only text files but also PDF, MS Office, code, eBook, image(OCR)... 1000+ file formats.",
    price: "100$",
    owenProducts: null,
    seleced: false,
  },
];

export default function App() {
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [repasswordSignUp, setRePasswordSignUp] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [selectedAcount, setSelectedAcount] = useState(null);
  const [selectedAcountIsOpen, setSelectedAcountIsOpen] = useState(false);
  // const [accounts, setAccounts] = useState([]);
  const [accounts, setAccounts] = useLocalStorageState([], "accounts");

  const [showWrong, setShowWrong] = useState(false);

  let [productsAdded, setProductsAdded] = useState([]);
  let [showCard, setshowCard] = useState(false);
  let [signupForm, setSignupForm] = useState(true);
  let [logninForm, setLogninForm] = useState(false);
  let [showShop, setShowShop] = useState(false);

  function SignupFun(e) {
    e.preventDefault();

    if (
      usernameSignUp === "" ||
      passwordSignUp === "" ||
      repasswordSignUp === ""
    )
      return false;
    const newAccount = {
      username: usernameSignUp,
      password: passwordSignUp,
      re_password: repasswordSignUp,
      owenProducts: [],
    };
    setSignupForm(
      passwordSignUp === repasswordSignUp
        ? (signupForm = !signupForm)
        : (signupForm = true)
    );
    if (repasswordSignUp !== passwordSignUp) {
      setShowWrong(true);
    } else {
      setShowWrong(false);
    }
    setLogninForm(passwordSignUp === repasswordSignUp);
    setAccounts([...accounts, newAccount]);
  }

  function LoginFun(e) {
    e.preventDefault();

    if (!usernameLogin || !passwordLogin) return;

    // setLogninForm(
    //   usernameSignUp === usernameLogin && passwordSignUp === passwordLogin
    //     ? (logninForm = !logninForm)
    //     : (logninForm = true)
    // );

    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i];

      if (
        account.password === passwordLogin &&
        account.username === usernameLogin
      ) {
        setLogninForm((logninForm = !logninForm));
        setSelectedAcount(account);

        setShowWrong(false);
      } else {
        setShowWrong(true);
        setSelectedAcountIsOpen(false);
      }
    }

    setShowShop(!logninForm && passwordSignUp === repasswordSignUp);
  }
  function newAccount() {
    setUsernameSignUp("");
    setPasswordSignUp("");
    setRePasswordSignUp("");
    setUsernameLogin("");
    setPasswordLogin("");

    setSignupForm(true);
    setLogninForm(false);
    setShowShop(false);
  }

  function login() {
    setUsernameSignUp("");
    setPasswordSignUp("");
    setRePasswordSignUp("");
    setUsernameLogin("");
    setPasswordLogin("");

    setShowShop(false);
    setLogninForm(true);
    setSignupForm(false);
  }
  function card() {
    setshowCard((showCard = !showCard));
  }
  function addToCard(product) {
    setProductsAdded([...productsAdded, product]);

    // accounts.filter((account) =>
    //   account.id === selectedAcount.id
    //     ? (selectedAcount.owenProducts = productsAdded)
    //     : ""
    // );

    //   setAccounts((accounts) =>
    //   accounts.map((item) =>
    //     item.id === selectedAcount.id
    //       ? alert("yrs")
    //       : item
    //   )
    // );
  }

  console.log(accounts);
  console.log(productsAdded);

  function deleteProduct(product) {
    setProductsAdded((productsAdded, selectedAcount) =>
      productsAdded.filter((productsAdded) => productsAdded.id !== product.id)
    );
    // setProductsAdded((selectedAcount) =>
    //   selectedAcount.owenProducts
    //     .map((owe) => owe)
    //     .filter((acc) => acc.id !== product.id)
    // );
    console.log(selectedAcount);
    console.log(product);
  }

  return (
    <div className="app">
      {signupForm && (
        <Signup
          usernameSignUp={usernameSignUp}
          passwordSignUp={passwordSignUp}
          repasswordSignUp={repasswordSignUp}
          setUsernameSignUp={setUsernameSignUp}
          setPasswordSignUp={setPasswordSignUp}
          setRePasswordSignUp={setRePasswordSignUp}
          SignupFun={SignupFun}
          signupForm={signupForm}
          login={login}
          accounts={accounts}
          showWrong={showWrong}
        />
      )}
      {logninForm && (
        <Login
          usernameLogin={usernameLogin}
          setUsernameLogin={setUsernameLogin}
          passwordLogin={passwordLogin}
          setPasswordLogin={setPasswordLogin}
          LoginFun={LoginFun}
          newAccount={newAccount}
          logninForm={logninForm}
          showWrong={showWrong}
        />
      )}

      {showShop && (
        <Shop
          newAccount={newAccount}
          selectedAcount={selectedAcount}
          login={login}
          products={products}
          card={card}
          showCard={showCard}
          addToCard={addToCard}
          productsAdded={productsAdded}
          selectedAcountIsOpen={selectedAcountIsOpen}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
}
