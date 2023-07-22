export default function Shop({
  login,
  newAccount,
  selectedAcount,
  products,
  showCard,
  card,
  addToCard,
  selectedAcountIsOpen,
  deleteProduct,
  productsAdded
}) {
   
  return (
    <div className="shop">
      <div className="navbar">
        <p>{selectedAcount.username}</p>
        <div className="account__List">
          <span className="newAccount" onClick={login}>
            Login
          </span>
          <span className="newAccount" onClick={newAccount}>
            Sing Up
          </span>
        </div>
        <div>
          <span onClick={card} className="card__icon">
            🛒
          </span>
          {showCard && (
            <div className="card__body">
              { productsAdded && productsAdded.map((oewnProduct) => (
                <li key={Math.random() * 100}>
                  <p>{oewnProduct.name}</p>
                  <img src={oewnProduct.src} alt={oewnProduct.src}  />
                  <span onClick={() => deleteProduct(oewnProduct)} className="close">✖</span>
                </li>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
      <ul className="card">
        {products.map((product) => (
          <li key={Math.random() * 100}>
            <img src={product.src} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCard(product, selectedAcount)} className="btn">
              Add to cards 🛒
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
