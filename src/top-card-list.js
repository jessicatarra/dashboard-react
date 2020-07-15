import React from "react";
import "./top-card-list.css";
import Card from "./card";

const cardListData = [
  {
    username: "@jessicatarra",
    id: 1,
    followers: 1987,
    todayFollowers: 12,
    icon: "./icon-facebook.svg",
    color: "facebook",
  },
  {
    username: "@jessicatarra",
    id: 2,
    followers: 1044,
    todayFollowers: 12,
    icon: "./icon-twitter.svg",
    color: "twitter",
  },
  {
    username: "@jessicatarra",
    id: 3,
    followers: "11k",
    todayFollowers: 12,
    icon: "./icon-instagram.svg",
    color: "instagram",
  },
  {
    username: "@jessicatarra",
    id: 4,
    followers: 8239,
    todayFollowers: 12,
    icon: "./icon-youtube.svg",
    color: "youtube",
  },
];

export default function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/* <articles className="card twitter">
            <p className="card-title">
              <img src="../images/icon-twitter.svg" alt="" />
              <a href="https://www.twitter.com/jessicatarra" target="_blank">
                @jessicatarra
              </a>
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1044</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              12 Today
            </p>
          </articles>
          <articles className="card instagram">
            <p className="card-title">
              <img src="../images/icon-instagram.svg" alt="" />
              <a href="https://www.instagram.com/jessicatarra" target="_blank">
                @jessicatarra
              </a>
            </p>
            <p className="card-followers">
              <span className="card-followers-number">11k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              12 Today
            </p>
          </articles>
          <articles className="card youtube">
            <p className="card-title">
              <img src="../images/icon-youtube.svg" alt="" />
              <a href="https://www.youtube.com/jessicatarra" target="_blank">
                @jessicatarra
              </a>
            </p>
            <p className="card-followers">
              <span className="card-followers-number">8239</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="./images/icon-up.svg" alt="" />
              12 Today
            </p>
          </articles>
           */}
        </div>
      </div>
    </section>
  );
}
