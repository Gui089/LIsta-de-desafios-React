const faqs = [
  {
    id: crypto.randomUUID(),
    title: "Quem é a maior celebridade do mundo dos games no BR?",
    answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
    number: 1,
  },
  {
    id: crypto.randomUUID(),
    title: "Onde fica a europa da américa do sul?",
    answer: "Argentina. BR vive como rei em Buenos Aires.",
    number: 2,
  },
  {
    id: crypto.randomUUID(),
    title: "Qual é a grande oportunidade para desenvolvedores BR?",
    answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
    number: 3,
  },
];

const App = () => {
  return (
    <div className="accordion">
      <ul>
        {faqs.map((item) => {
          return (
            <li className="item " key={item.id}>
              <p className="number">{item.number}</p>
              {item.title}
              <p className="answer">{item.answer}</p>
              <p className="icon">-</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { App };
