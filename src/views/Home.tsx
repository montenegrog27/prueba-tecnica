import { useState } from "react";
import menus from "../utils/Datos De Prueba.json";

function Home() {
  const day = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMenus, setSelectedMenus] = useState({
    Lunes: null,
    Martes: null,
    Miércoles: null,
    Jueves: null,
    Viernes: null,
    Sábado: null,
    Domingo: null,
  });

  const openModal = (day) => {
    setSelectedDay(day);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="pt-[100px] grid grid-cols-7 h-screen">
      {day.map((d) => (
        <div className="m-1" key={d}>
          <div className="rounded-xl bg-gray-200 shadow-xl p-1 w-[160px] h-[170px] flex items-center flex-col ">
            <div className="h-10 ">{d}</div>
            {selectedMenus[d] ? (
              <>
                <div>{selectedMenus[d].menu.nombre}</div>
                {selectedMenus[d].plato && (
                  <div>{selectedMenus[d].plato.nombre}</div>
                )}
              </>
            ) : (
              <button
                type="button"
                className="bg-blue-200 px-6 py-4 rounded-xl text-gray-600 hover:scale-105 transition text-lg"
                onClick={() => openModal(d)}
              >
                +
              </button>
            )}
          </div>
        </div>
      ))}
      {isModalVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedDay}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500">
                  {selectedDay}.
                </p>
                <label>Selecciona un menú:</label>
                <select
                  value={
                    selectedMenus[selectedDay]
                      ? selectedMenus[selectedDay].menu.id
                      : ""
                  }
                  onChange={(e) => {
                    const selectedMenuId = e.target.value;
                    const menu = menus.menus.find(
                      (menu) => menu.id === parseInt(selectedMenuId)
                    );
                    const newSelectedMenus = { ...selectedMenus };
                    newSelectedMenus[selectedDay] = {
                      menu: menu,
                      plato: null,
                    };
                    setSelectedMenus(newSelectedMenus);
                  }}
                >
                  <option value="">Selecciona un menú</option>
                  {menus?.menus.map((menu) => (
                    <option key={menu.id} value={menu.id}>
                      {menu.nombre}
                    </option>
                  ))}
                </select>

                {selectedMenus[selectedDay] && (
                  <div>
                    <label>Selecciona un plato:</label>
                    <select
                      value={
                        selectedMenus[selectedDay].plato
                          ? selectedMenus[selectedDay].plato.id
                          : ""
                      }
                      onChange={(e) => {
                        const selectedPlatoId = e.target.value;
                        const plato = menus.recetas.find(
                          (receta) => receta.id === parseInt(selectedPlatoId)
                        );
                        const newSelectedMenus = { ...selectedMenus };
                        newSelectedMenus[selectedDay].plato = plato;
                        setSelectedMenus(newSelectedMenus);
                      }}
                    >
                      <option value="">Selecciona un plato</option>
                      {selectedMenus[selectedDay].menu.platos.map((platoId) => {
                        const plato = menus.recetas.find(
                          (receta) => receta.id === platoId.receta_id
                        );
                        return (
                          <option key={plato.id} value={plato.id}>
                            {plato.nombre}
                          </option>
                        );
                      })}
                    </select>
                    {selectedMenus[selectedDay].plato && (
                      <p>
                        Plato seleccionado:{" "}
                        {selectedMenus[selectedDay].plato.nombre}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center p-6 space-x-2 border-t">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
