const App = () => (
  <div className="container">
    <div className="count">
      <button onClick={() => console.log("clicou no menos do intervalo")}>
        -
      </button>
      <h2>Intervalo:1 </h2>
      <button onClick={() => console.log("clicou no mais do intervalo")}>
        +
      </button>
    </div>
    <div className="count">
      <button onClick={() => console.log("clicou no menos da contagem")}>
        -
      </button>
      <h2>Contagem:0 </h2>
      <button onClick={() => console.log("clicou no mais da contagem")}>
        +
      </button>
    </div>
    <h2>Hoje é Segunda-feira, 27 de novembro de 2023</h2>
  </div>
);

export { App };
