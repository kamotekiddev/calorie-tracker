import React from "react";

function CurrentlyUsedPlan() {
  const maxProgress = 1558;
  const currentProgress = 779.2;

  const fillterWidth = (currentProgress / maxProgress) * 100;

  return (
    <section>
      <div className="p-8 relative border-primary border text-white rounded-lg">
        <div className="relative z-10">
          <h1 className="capitalize font-medium">calories</h1>
          <h1 className="text-3xl font-black">779.2 / 1,558</h1>
        </div>
        <div
          style={{ width: `${fillterWidth}%` }}
          className="absolute inset-0 bg-primary"
        ></div>
      </div>
    </section>
  );
}

export default CurrentlyUsedPlan;
