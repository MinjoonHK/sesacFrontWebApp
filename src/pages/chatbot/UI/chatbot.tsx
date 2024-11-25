import { useNavigate } from "react-router-dom";
import "./chatbot.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
import { jwtDecode } from "jwt-decode";
import { Button, Modal } from "antd";

interface DecodedToken {
  exp: number;
  name: string;
  iat: number;
  userId: string;
  email: string;
}

export const ChatUI = () => {
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    let accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      let decoded: DecodedToken = jwtDecode<DecodedToken>(accessToken);
      setUsername(decoded.name);
    }
  }, []);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "반가워요! 어떤 정보를 찾고 계신가요?",
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const handleKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim()) {
      const newMessage = { sender: "user", text: message };
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");

      try {
        const res = await axios.post("http://203.234.62.82/api/question/chat", {
          content: JSON.stringify({ message }),
        });
        if (res.data.answer.is_negative === true) {
          setOpenModal(true);
        }
        const botMessage = {
          sender: "bot",
          text:
            res.data.answer.response ||
            "오류가 발생했습니다. 다시 시도해주세요.",
        };
        setChatMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (err) {
        console.log(err);
        const errorMessage = {
          sender: "bot",
          text: "서버와의 통신 중 오류가 발생했습니다.",
        };
        setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

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
            alt="이미지를 표시할 수 없습니다"
          />
        </div>
        <div
          style={{
            marginTop: "10.19vh",
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
            marginTop: "2.133vh",
            textAlign: "center",
            fontSize: "4.615vw",
            fontWeight: "bold",
          }}
        >
          {username}님, 무엇을 도와드릴까요?
        </div>
        <div
          ref={chatContainerRef}
          style={{
            marginTop: "7.346vh",
            padding: "29px",
            width: "100%",
            height: "55vh",
            overflowY: "scroll",
            borderTop: "1px solid #DEDEDE",
            borderBottom: "1px solid #DEDEDE",
          }}
        >
          {chatMessages.map((chat, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  chat.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              {chat.sender === "bot" && (
                <div>
                  <img
                    src="/img/chat_dangchan_icon.svg"
                    alt="이미지를 표시할 수 없습니다!"
                  />
                </div>
              )}
              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Pretendard-medium",
                  fontSize: "13px",
                  marginBottom: "15px",
                }}
              >
                {chat.sender === "bot" && (
                  <div style={{ marginBottom: "8px" }}>당찬이</div>
                )}
                <div
                  style={{
                    color: chat.sender === "bot" ? "#B1B5B8" : "white",
                    backgroundColor:
                      chat.sender === "bot" ? "#EEF2F5" : "#3561FF",
                    borderRadius: "10px",
                    padding: "13px",
                  }}
                >
                  <TypeAnimation
                    sequence={[`${chat.text}`]}
                    speed={50}
                    cursor={false}
                    style={{ whiteSpace: "pre-line" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            bottom: "4.569vh",
            position: "fixed",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 7.949vw",
          }}
        >
          <input
            onKeyUp={handleKeyUp}
            onChange={handleOnChange}
            value={message}
            placeholder="메시지를 입력해주세요"
            style={{
              backgroundColor: "#EEF2F5",
              borderRadius: "24.5px",
              paddingRight: "21px",
              paddingTop: "13px",
              paddingLeft: "21px",
              height: "5.569vh",
              width: "100%",
            }}
          ></input>
        </div>
      </div>
      <Modal
        closeIcon={null}
        footer={[
          <Button
            key="cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            아니요
          </Button>,
          <Button
            key="ok"
            type="primary"
            onClick={() => {
              window.open("https://www.kfsp.or.kr/home/kor/main.do", "_blank");
              setOpenModal(false);
            }}
          >
            네
          </Button>,
        ]}
        centered={true}
        open={openModal}
      >
        <p style={{ fontFamily: "Pretendard-Medium" }}>
          많이 힘드신 것 같아요.
          <br /> 한국 생명존중희망재단의 상담을 <br />
          받아보시는것을 권장드려요.
        </p>
        <p style={{ fontFamily: "Pretendard-Medium" }}>
          해당 페이지로 이동하시겠어요?
        </p>
      </Modal>
    </div>
  );
};
