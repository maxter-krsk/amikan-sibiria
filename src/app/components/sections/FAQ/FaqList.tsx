"use client";

import { useState } from "react";

type FaqListProps = {
  name: string;
  descr: string;
  className?: string;
};

export default function FaqList({ name, descr, className }: FaqListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button className="cursor-pointer" onClick={HandleClick}>
        {name}
      </button>
      {isOpen && (
        <div>
          <p>{descr}</p>
        </div>
      )}
    </div>
  );
}
