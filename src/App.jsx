const Steps = () => (
  <>
    <div className="steps">
      <button className="numbers active">1</button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>

      <div>
        <h1 className="message">1: Passo entender o problema do cliente</h1>
      </div>

      <button className="buttons">Anterior</button>
      <button className="buttons">Próximo</button>
    </div>
  </>
);

const App = () => {
  return (
    <>
      <button className="close">Fechar</button>
      <Steps />
    </>
  );
};

export { App };
