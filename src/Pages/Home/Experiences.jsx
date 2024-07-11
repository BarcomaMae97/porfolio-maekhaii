import React from 'react';
import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="experiences">
      <div className="experience--container-box">
        <div className="experience--container">
          <h2 className="sections--heading">Experiences</h2>
        </div>
      </div>
      <div className="experience--section--container">
        {data?.Experiences?.map((item) => (
          <div key={item.id} className="experience--section--card">
            <p className="experience--description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
