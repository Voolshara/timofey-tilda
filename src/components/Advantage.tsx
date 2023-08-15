import React, { FC } from "react";
import { observer } from "mobx-react-lite";

const AdvantagesBlock: FC = () => {
  const grid = [
    {
      icon: (
        <svg
          className="w-14 h-14 text-gray-800 dark:text-white m-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
          />
        </svg>
      ),
      name: "Опыт",
      desc: "Работаем в сфере туризма более 15 лет.",
    },
    {
      icon: (
        <svg
          className="w-14 h-14 text-gray-800 dark:text-whitem m-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
          />
        </svg>
      ),
      name: "Индивидуальный подход",
      desc: "Подбираем туры, исходя исключительно из ваших пожеланий и запросов.",
    },
    {
      icon: (
        <svg
          className="w-14 h-14 text-gray-800 dark:text-white m-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      ),
      name: "Цена",
      desc: "Широкий ассортимент туров для любого бюджета",
    },
  ];

  return (
    <div className="mt-20 mb-20 flex flex-col items-center">
      <p className="text-3xl font-bold mb-14">Наши преимущества</p>
      {/* <p>Почему нам стоит доверять свой отпуск?</p> */}
      <div className="flex flex-row justify-around">
        {grid.map((el, index) => (
          <div key={index} className="w-1/5 flex flex-col items-center">
            <div className="bg-gray-400 bg-opacity-30 m-5 p-6 rounded-icon-circle  border-gray-600">
              {el.icon}
            </div>
            <p className="text-2xl font-semibold mt-3 mb-6 text-center">
              {el.name}
            </p>
            <p className="text-center">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(AdvantagesBlock);
