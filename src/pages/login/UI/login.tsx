import "./login.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="login-page-wrapper"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#3561FF" }}
    >
      <div
        style={{
          paddingTop: "26.422vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/img/dangchanWordIcon.svg"
          alt="이미지를 표시할수 없습니다!"
        />
      </div>
      <div
        style={{
          marginTop: "3.519vh",
          fontFamily: "SCDream6",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        당신의 찬란한 시작을 응원합니다
      </div>
      <div style={{ marginTop: "18.483vh", padding: "0 25px" }}>
        <div
          style={{
            height: "5.806vh",
            width: "100%",
            backgroundColor: "#131313",
            border: "none",
            alignItems: "center",
            display: "flex",
            color: "white",
            fontFamily: "Pretendard-Medium",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        >
          <span style={{ marginLeft: "21.19px", marginRight: "80.84px" }}>
            <img src="/img/appleIcon.svg" alt="이미지를 표시할수 없습니다" />
          </span>
          <span>Apple로 로그인</span>
        </div>
        <div
          style={{
            height: "5.806vh",
            width: "100%",
            backgroundColor: "#FEE500",
            border: "none",
            alignItems: "center",
            display: "flex",
            color: "#191600",
            fontFamily: "Pretendard-Medium",
            fontSize: "16px",
            borderRadius: "8px",
            marginTop: "11px",
          }}
        >
          <span style={{ marginLeft: "21.19px", marginRight: "65px" }}>
            <img src="/img/kakaoIcon.svg" alt="이미지를 표시할수 없습니다" />
          </span>
          <span>카카오톡으로 로그인</span>
        </div>
        <div
          style={{
            height: "5.806vh",
            width: "100%",
            backgroundColor: "#04C75A",
            border: "none",
            alignItems: "center",
            display: "flex",
            color: "white",
            fontFamily: "Pretendard-Medium",
            fontSize: "16px",
            borderRadius: "8px",
            marginTop: "11px",
          }}
        >
          <span style={{ marginLeft: "21.19px", marginRight: "80px" }}>
            <img src="/img/naverIcon.svg" alt="이미지를 표시할수 없습니다" />
          </span>
          <span>네이버로 로그인</span>
        </div>
        <div
          onClick={() => {
            navigate("/login");
          }}
          style={{
            height: "5.806vh",
            width: "100%",
            backgroundColor: "transparent",
            border: "1px solid white",
            alignItems: "center",
            display: "flex",
            color: "white",
            fontFamily: "Pretendard-Medium",
            fontSize: "16px",
            borderRadius: "8px",
            marginTop: "11px",
          }}
        >
          <span style={{ marginLeft: "21.19px", marginRight: "45px" }}>
            <img src="/img/emailIcon.svg" alt="이미지를 표시할수 없습니다" />
          </span>
          <span>이메일로 로그인 · 회원가입</span>
        </div>
      </div>
    </div>
  );
};
