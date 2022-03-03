const products = [
  {
    id: 'Cheesecake',
    lbl: 'CheesecakeLbl',
    price: 199.99,
  },
  {
    id: 'Tiramisu',
    lbl: 'TiramisuLbl',
    price: 249.99,
  },
  {
    id: 'TresLeches',
    lbl: 'TresLechesLbl',
    price: 299.99,
  },
  {
    id: 'ChocoFlan',
    lbl: 'ChocoFlanLbl',
    price: 149.99,
  },
  {
    id: 'Opera',
    lbl: 'OperaLbl',
    price: 349.99,
  },
  {
    id: 'TartaSantiago',
    lbl: 'TartaSantiagoLbl',
    price: 249.99,
  },
  {
    id: 'Globos',
    lbl: 'GlobosLbl',
    price: 19.99,
  },
  {
    id: 'Aniversario',
    lbl: 'AniversarioLbl',
    price: 9.99,
  },
  {
    id: 'Cumpleaños',
    lbl: 'CumpleañosLbl',
    price: 9.99,
  },
];

const getRndNum = (min, max) => Math.round(Math.random() * (max - min) + min);

function setTotal() {
  let total = 0;
  products.forEach(product => {
    const value = document.getElementById(`${product.id}`).value;
    console.log(value);
    total += (product.price * parseInt(value));
  });

  const modal = document.getElementById('price');
  modal.textContent = `$${total.toFixed(2)}`;
}

(() => {
  let total = 0;
  products.forEach(product => {
    const productElement = document.getElementById(`${product.lbl}`);
    const rNumber = getRndNum(0, 300);
    if (productElement) productElement.append(` restantes: ${rNumber}`);
    total += rNumber;
  });
})();