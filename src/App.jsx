const cardsInfo = [
  {
    id: 7336,
    question: "Do quê aplicações React são feitas?",
    answer: "Componentes",
  },
  {
    id: 8832,
    question: "Qual é o nome da sintaxe usada para descrever UI no React?",
    answer: "JSX",
  },
  {
    id: 3457,
    question: "Em qual linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 9103,
    question: "Qual método usar para renderizar uma lista no React?",
    answer: "map",
  },
  {
    id: 1297,
    question: "Qual empresa criou o React?",
    answer: "Meta",
  },
  {
    id: 2002,
    question: "Como passar informações para um componente React?",
    answer: "Através de props",
  },
];

const App = () => {
  const showId = () => {
    cardsInfo.reduce((acc, info) => {
      console.log(acc, info);
    }, 0);
  };
  return (
    <>
      <div className="flashcards">
        <ul style={{ listStyle: "none" }}>
          {cardsInfo.map((info) => (
            <li onClick={showId} key={info.id}>
              <h4 className="card">{info.question}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { App };
