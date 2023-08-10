import React, { FC } from "react";
import { observer } from "mobx-react-lite";

const AboutBlock: FC = () => {
  return (
    <div className="italic w-2/3 mt-20 mb-20 text-center">
      <p>Информация о комании</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        laborum sequi iusto inventore! Dolore nulla dicta fugit veniam quam ad
        inventore facere deserunt, obcaecati, qui eum nihil. Ullam, doloribus
        reprehenderit.
      </p>
    </div>
  );
};

export default observer(AboutBlock);
