// import { useState } from "react";
import menu from "../utils/Datos De Prueba.json";

const MenuBuilder = () => {
  //   const [selectedMenu, setSelectedMenu] = useState("");
  //   const [selectedRecipe, setSelectedRecipe] = useState("");
  //   const [menus, setMenus] = useState([]); // Llena esta variable con las opciones de menú
  //   const [recipes, setRecipes] = useState([]); // Llena esta variable con las opciones de recetas según el menú seleccionado

  //   const handleMenuChange = (event) => {
  //     const menuId = event.target.value;
  //     setSelectedMenu(menuId);
  //     // Aquí puedes agregar lógica para cargar las recetas según el menú seleccionado
  //   };

  //   const handleRecipeChange = (event) => {
  //     const recipeId = event.target.value;
  //     setSelectedRecipe(recipeId);
  //   };

  const handleAddRecipe = () => {
    // Aquí puedes agregar la lógica para agregar la receta al menú seleccionado
    // Puedes utilizar los valores de selectedMenu y selectedRecipe para realizar esta acción
    // Puedes imprimirlos en la consola para verificar si se seleccionaron correctamente
    // console.log("Menú seleccionado:", selectedMenu);
    // console.log("Receta seleccionada:", selectedRecipe);
  };

  return (
    <div>
      <div>
        <label>Selecciona un menú:</label>
        <select
        // onChange={handleMenuChange} value={selectedMenu}
        >
          <option value="">Selecciona un menú</option>
          {/* {menus.map((menu) => (
            <option key={menu.id} value={menu.id}>
            </option>
          ))} */}
        </select>
      </div>
      <div>
        <label>Selecciona una receta:</label>
        <select
        // onChange={handleRecipeChange} value={selectedRecipe}
        >
          <option value="">Selecciona una receta</option>
          {/* {recipes.map((recipe) => (
            <option key={recipe.receta_id} value={recipe.receta_id}>
              {recipe.nombre}
            </option>
          ))} */}
        </select>
      </div>
      <button onClick={handleAddRecipe}>Agregar Receta</button>
    </div>
  );
};

export default MenuBuilder;
