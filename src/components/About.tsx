import React, { FC } from "react";
import { observer } from "mobx-react-lite";

const AboutBlock: FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="w-1/2 mt-20 mb-20 text-center text-lg ">
        <p>
          Хотите провести свой отпуск незабываемо? Ещё и так, чтобы понравилось
          всем членам семьи?
        </p>
        <p>
          Тогда вы обратились по адресу, ведь в турагенсте "Навигатор" вам
          индивидуально подберут тур, исходя из вашего бюджета и предпочтений.
          Ежегодно наши туристы отправляются в путешествие более чем в 15
          направлениях: Турция, Египет, Россия, Куба, Испания и многие другие.
        </p>
        <p className="">Нам можно доверить ваш оттпуск!</p>
      </div>
    </div>
  );
};

export default observer(AboutBlock);
