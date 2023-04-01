import React from "react";

function Card({ children }) {
  return (
    <article className="flex flex-col m-4 p-9 rounded-2xl w-11/12 sm:w-[460px] gap-8 bg-white">
      {children}
    </article>
  );
}

export { Card };
