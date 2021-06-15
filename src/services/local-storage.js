//Creo este módulo que me retornará 2 funciones: una de get (leer en el ls) y otra de set (guardar en el ls)

//Estas funciones deben recibir datos en general. En el local storage esa información funciona teniendo una key y un valor.
//En el get únicamente recibo una key no el value

const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

//Este siempre es guardo en el local storage con una key y un valor.
//JSON.stringify siempre va porque guardo datos complejos que al ser un array en este caso entonces coloco el stringify

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objToExport = {
  get: get,
  set: set,
};

//exporto estos datos que para mí son un objeto entonces exporto get como get y set como set
//Estos objetos tienen c/u una función get y set

export default objToExport;
