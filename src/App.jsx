const App = () => (
  <div className="container">
    <div className="count">
      <button onClick={() => console.log("clicou no menos do intervalo")}>
        -
      </button>
      <p>Intervalo:1 </p>
      <button onClick={() => console.log("clicou no mais do intervalo")}>
        +
      </button>
    </div>
    <div className="count">
      <button onClick={() => console.log("clicou no menos da contagem")}>
        -
      </button>
      <p>Contagem:0 </p>
      <button onClick={() => console.log("clicou no mais da contagem")}>
        +
      </button>
    </div>
  </div>
);

export { App };
