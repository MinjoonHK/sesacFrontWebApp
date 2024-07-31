import { useNavigate } from "react-router-dom";
import "./chatbot.css";

export const ChatUI = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div
          onClick={() => {
            navigate("/main/calendar");
          }}
          style={{ position: "fixed", top: "5.45vh", left: "7.949vw" }}
        >
          <img
            style={{ width: "5vw", height: "1.896vh" }}
            src="/img/back_arrow_icon.svg"
            alt="이미지를 표시할수 없습니다"
          />
        </div>
        <div
          style={{
            marginTop: "95px",
            display: "flex",
            justifyContent: "center",
          }}
          className="chat-page-icon"
        >
          <img width="69px" height="69px" src="/img/dangchanIcon.svg" />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "18px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          김새싹님, 무엇을 도와드릴까요?
        </div>
        <div
          style={{
            bottom: "47px",
            position: "absolute",
          }}
        >
          <input
            placeholder="메시지를 입력해주세요"
            style={{
              backgroundColor: "#EEF2F5",
              marginLeft: "31px",
              borderRadius: "24.5px",
              paddingLeft: "21px",
              width: "328px",
              height: "47px",
              marginRight: "31px",
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};
