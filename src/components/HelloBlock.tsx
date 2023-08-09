import React, { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

const HelloBlock: FC = () => {
  return (
    <div className="h-screen w-full bg-bg bg-cover text-white relative flex items-center justify-center">
      <div className="flex justify-center items-center flex-col bg-gray-400 bg-opacity-25 h-screen pl-32 pr-32">
        <p className="text-2xl z-10">ТУРИСТИЧЕСКОЕ АГЕНТСТВО</p>
        <p className="text-8xl font-bold z-10 m-5">Навигатор</p>
        <p className="z-10 text-xl">Твои путешествия начинаются здесь</p>
      </div>
    </div>
  );
};

export default observer(HelloBlock);
