//Los datos del API los guardamos en un fichero dentro carpeta services.

const getApiData = () => {
  //Llamar al API con un fetch
  return (
    fetch("https://rickandmortyapi.com/api/character/")
      //Me convierte los datos a json
      .then((response) => response.json())
      .then((data) => {
        //creo una variable que será igual a un array. Lo voy a iterar con un map y nos devolverá un array con datos modificados.

        //(user) son los usuarios de uno en uno. El resultado de map me lo guarda en cleanData.
        const cleanData = data.results.map((character) => {
          return {
            image: character.image,
            name: character.name,
            species: character.species,
            id: character.id,
          };
        });

        return cleanData;
      })
  );
};

//En al Api lo que retorno como cleanData, lo recibo en App como usersData
//Entre funciones no viajan variables, sí el contenido de las variables.

//Exporto un objeto, un array o una función como aquí.
export default getApiData;
