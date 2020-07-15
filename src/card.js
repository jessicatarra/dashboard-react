import React from "react";

export default function Card({
  username,
  followers,
  todayFollowers,
  icon,
  color,
}) {
  const cardClass = `card ${color}`;
  return (
    <articles className={cardClass}>
      <p className="card-title">
        <img src={icon} alt="" />
        <a href="https://www.facebook.com/jessictarra" target="_blank">
          {username}
        </a>
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="public\icon-up.svg" alt="" />
        {todayFollowers} Today
      </p>
    </articles>
  );
}
