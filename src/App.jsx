const burgers = [
  {
    name: "Duo",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
    price: 37,
    photoName: "img/burgers/duo.jpg",
    soldOut: false,
  },
  {
    name: "Kids",
    ingredients:
      "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
    price: 29,
    photoName: "img/burgers/kids.jpg",
    soldOut: false,
  },
  {
    name: "Master",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 51,
    photoName: "img/burgers/master.jpg",
    soldOut: false,
  },
  {
    name: "Monster",
    ingredients:
      "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 47,
    photoName: "img/burgers/monster.jpg",
    soldOut: false,
  },
  {
    name: "Prime",
    ingredients:
      "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
    price: 43,
    photoName: "img/burgers/prime.jpg",
    soldOut: true,
  },
  {
    name: "Slim",
    ingredients:
      "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
    price: 27,
    photoName: "img/burgers/slim.jpg",
    soldOut: false,
  },
];

const Header = () => (
  <div className="container">
    <img className="logo" src="../img/logo-burgao-do-ze.jpg" alt="" />
  </div>
);

const Menu = () => (
  <>
    <div className="menu">
      <h2>Cardápio</h2>
      <p>
        Depois de uma semana desafiadora, nada melhor do que saborear um burger
        onde cada mordida é um abraço saboroso, não é mesmo?🍔✨
      </p>
    </div>

    <div>
      <ul className="burgers">
        {burgers.map((burger) => {
          return (
            <li key={burger.name} className="burger">
              <img src={burger.photoName} alt="Foto do Hamburger" />
              <h3>{burger.name}</h3>
              <p className="ingredients">{burger.ingredients}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </>
);

const App = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

export { App };
