import React from "react";

export default function CardSmall({ growth, pageViews, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="./icon-up.svg" alt="" />
          {growth}%
        </span>
      </p>
    </div>
  );
}
