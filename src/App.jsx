const Steps = () => {
  const handleClickPrevius = (event) => {
    console.log(event.target.textContent);
  };

  const handleClickNext = (event) => {
    console.log(event.target.textContent);
  };
  return (
    <>
      <div className="steps">
        <button className="numbers active">1</button>
        <button className="numbers">2</button>
        <button className="numbers">3</button>

        <div>
          <h1 className="message">1: Passo entender o problema do cliente</h1>
        </div>

        <button onClick={handleClickPrevius} className="buttons">
          Anterior
        </button>
        <button onClick={handleClickNext} className="buttons">
          Próximo
        </button>
      </div>
    </>
  );
};

const App = () => {
  const handleClickToggle = (event) => {
    console.log(event.target.textContent);
  };
  return (
    <>
      <button onClick={handleClickToggle} className="close">
        Fechar
      </button>
      <Steps />
    </>
  );
};

export { App };
