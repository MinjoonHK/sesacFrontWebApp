import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "9.834vh",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 33.98px",
        justifyContent: "space-between",
        borderTop: "1px solid #E0E0E0",
        backgroundColor: "white",
      }}
    >
      <div>
        <Link to="/main/home">
          <img src="/img/footer_icon_home.svg" alt="홈 아이콘" />
        </Link>
      </div>
      <div>
        <Link to="/main/calendar">
          <img src="/img/footer_icon_span.svg" alt="내 소비 아이콘" />
        </Link>
      </div>
      <div>
        <Link to="/chat">
          <img
            src={
              selected == "chat"
                ? "/img/footer_icon_dangchan.svg"
                : "/img/footer_icon_dangchan.svg"
            }
            alt="커뮤니티 아이콘"
          />
        </Link>
      </div>
      <div
        onClick={() => {
          setSelected("community");
        }}
      >
        <Link to="/main/community">
          <img
            src={
              selected == "community"
                ? "/img/footer_icon_community_clicked.svg"
                : "/img/footer_icon_community.svg"
            }
            alt="마이 아이콘"
          />
        </Link>
      </div>
    </div>
  );
};
