import { Box, Button, styled } from "@mui/material";
import "./login.css";
import { useNavigate } from "react-router-dom";

// import { HTTPClient } from "../../../helpers/HTTPClient";
// import { useCallback } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  // const handleGetUsers = useCallback(() => {
  //   HTTPClient.getUser({ permission: "user" }).then((response) => {
  //     const users = response.data;
  //     // 유저에 대한 처리
  //   });
  // }, []);

  return (
    <div className="login-page-wrapper">
      <div className="login-page-upper-wrapper"></div>
      <div className="login-page-bottom-wrapper">
        <Button
          className="login-page-button login-page-google-button"
          variant="contained"
        >
          <Box className="button-content-wrapper">
            {/* srcSet 찾아보기*/}
            <img src="/img/appleIcon.svg" className="button-icon" />
            <span className="button-text">Apple로 로그인</span>
          </Box>
        </Button>

        <Button
          className="login-page-button login-page-kakao-button"
          variant="contained"
        >
          <Box className="button-content-wrapper">
            <img src="/img/kakaoIcon.svg" className="button-icon" />
            <span className="button-text">카카오톡으로 로그인</span>
          </Box>
        </Button>
        <Button
          className="login-page-button login-page-naver-button"
          variant="contained"
        >
          <Box className="button-content-wrapper">
            <img
              src="/img/naverIcon.svg"
              className="button-icon"
              style={{ width: "19px", height: "19px" }}
            />
            <span className="button-text">네이버로 로그인</span>
          </Box>
        </Button>
        <Button
          className="login-page-button login-page-email-button"
          variant="outlined"
          onClick={() => {
            navigate("/login");
          }}
        >
          <Box className="button-content-wrapper">
            <img
              src="/img/emailIcon.svg"
              className="button-icon"
              style={{ width: "21px", height: "15px" }}
            />
            <span className="button-text">이메일로 로그인 - 회원가입</span>
          </Box>
        </Button>
      </div>
    </div>
  );
};
