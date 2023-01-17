import React from "react";

export default function FeaturesCards({
  cardTitle,
  cardDescription,
  children,
}) {
  return (
    <div>
      <div className="feature-card border-solid border-2 border-transparent  text-xl p-14  text-white bg-blue-400 hover:bg-white hover:text-black hover:delay-150	cursor-pointer">
        <div className="w-6 h-6 py-2"> {children}</div>
        <h3 className="text-3xl py-2">{cardTitle}</h3>
        <p className="py-4">{cardDescription}</p>
      </div>
    </div>
  );
}
