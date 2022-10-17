import React from "react";

import './style.css';

export const Footer = () => {
  return (
    <>
    <div className="footer">
      <section>
        <a href="https://github.com/AndersonCRodrigues" target={'blank'}><img src="https://andersonpadovani.online/static/media/github.a5527b5c02e754fc4a6d.png" alt="github-logo" /></a>
        <a href="https://www.linkedin.com/in/anderson-costa-rodrigues-31b48a74/" target={'blank'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="linkedin-logo" /></a>
      </section>
      <p>Este site foi desenvolvido  para prática de React por Anderson Costa Rodrigues - Outubro/2022.</p>
    </div>
    </>
  );
};