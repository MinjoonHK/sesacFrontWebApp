import { CheckBox, Key, Person } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import "./loginInput.css";
import { useNavigate } from "react-router-dom";

export const LoginInputPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-input-page-wrapper">
      <div className="login-input-page-inner-wrapper">
        <div className="login-input-form-wrapper">
          <TextField
            placeholder="아이디 (이메일)"
            className="login-input-page-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            placeholder="비밀번호"
            className="login-input-page-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button
            className="login-input-page-login-button"
            variant="outlined"
            style={{
              width: "340px",
              height: "3.0625rem",
              marginTop: "15px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "none",
              backgroundColor: "#131313",
              color: "white",
              fontFamily: "Pretendard",
            }}
          >
            조금이 로그인하기
          </Button>
        </div>
        <div className="login-input-page-sub__menu-wrapper">
          <div className="login-input-page-sub__menu">
            <div>
              <span>
                <CheckBox />
              </span>
              <span style={{ marginBottom: "3px" }}>로그인 유지</span>
            </div>
            <div>
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </span>
              <span style={{ margin: "0 9.5px" }}>|</span>
              <span>정보찾기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
