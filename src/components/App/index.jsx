import { useEffect } from "react";

import { getListCities } from "../../api/api";

const App = () => {
  useEffect(() => {
    console.log("Запуск");
    getListCities();
  }, []);

  return (
    <main className="mx-auto max-w-screen-xl pt-8">
      <h1 className="text-center text-3xl font-bold">
        Калькулятор CDEK | Vite + React
      </h1>
      <hr className="mt-8" />
      <section className="ml-auto mt-8 max-w-screen-sm">
        <p>Укажите населенный пункт отправки:</p>
        <input className="mt-4" placeholder="Населенный пункт" type="text" />
      </section>
    </main>
  );
};

export default App;
