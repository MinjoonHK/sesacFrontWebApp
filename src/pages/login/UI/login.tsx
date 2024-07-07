import { Box, Button } from "@mui/material";
import "./login.css";

export const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-page-upper-wrapper">ㅎㅇ</div>
      <div className="login-page-bottom-wrapper">
        <div className="login-page-button-wrapper">
          <Button
            className="login-page-button login-page-google-button"
            variant="contained"
          >
            <Box className="button-content-wrapper">
              <img src="/public/img/appleIcon.png" className="button-icon" />
              <span className="button-text">Apple로 로그인</span>
            </Box>
          </Button>

          <Button
            className="login-page-button login-page-kakao-button"
            variant="contained"
          >
            <Box className="button-content-wrapper">
              <img src="/public/img/kakaoIcon.png" className="button-icon" />
              <span className="button-text">카카오톡으로 로그인</span>
            </Box>
          </Button>
          <Button
            className="login-page-button login-page-naver-button"
            variant="contained"
          >
            <Box className="button-content-wrapper">
              <img
                src="/public/img/naverIcon.png"
                className="button-icon"
                style={{ width: "19px", height: "19px" }}
              />
              <span className="button-text">네이버로 로그인</span>
            </Box>
          </Button>
          <Button
            className="login-page-button login-page-email-button"
            variant="outlined"
          >
            <Box className="button-content-wrapper">
              <span className="button-text">이메일로 로그인</span>
            </Box>
          </Button>
        </div>
      </div>
    </div>
  );
};
