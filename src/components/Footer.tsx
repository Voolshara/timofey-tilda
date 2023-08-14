import React, { FC } from "react";
import { observer } from "mobx-react-lite";

const ContactsBlock: FC = () => {
  return (
    <div className="text-gray-300  flex items-center justify-center flex-col bg-black  pt-16 pb-16 w-full">
      <p>Номер в Едином федеральном реестре турагентов, субагентов: РТА 0004304</p>
      <p>© ООО ТК "Навигатор"</p>
      <p>navigator-tk@mail.ru</p>
    </div>
  );
};

export default observer(ContactsBlock);
