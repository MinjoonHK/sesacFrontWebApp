import { TextField } from "@mui/material";
import { useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

const labelSize = "1rem";
const placeholderSize = "0.8125rem";

const inputLabelProps = {
  shrink: true,
  style: {
    fontSize: labelSize,
    color: "black",
    fontFamily: "Pretendard",
  },
};

const sxPlaceholder = {
  "& .MuiInputBase-input::placeholder": {
    fontSize: placeholderSize,
    fontFamily: "Pretendard",
  },
};

export const SignUpPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="signup-page-wrapper">
      <div className="signup-page-inner-wrapper">
        <div className="input-group">
          <TextField
            required
            style={{ width: "236px" }}
            label="아이디(이메일)"
            type="email"
            InputLabelProps={inputLabelProps}
            placeholder="이메일 주소"
            variant="standard"
            sx={sxPlaceholder}
          />
          <button className="check-button">중복확인</button>
        </div>
        <div className="input-group">
          <TextField
            required
            style={{ width: "236px" }}
            label="인증번호"
            type="email"
            InputLabelProps={inputLabelProps}
            placeholder="이메일로 전송된 인증번호를 입력해주세요"
            variant="standard"
            sx={sxPlaceholder}
          />
          <button
            className="send-button"
            onClick={() => {
              if (emailSent) return;
              setEmailSent(true);
            }}
          >
            {emailSent ? "확인" : "인증번호 전송"}
          </button>
        </div>

        <TextField
          required
          label="비밀번호"
          type="password"
          InputLabelProps={inputLabelProps}
          placeholder="비밀번호"
          variant="standard"
          sx={sxPlaceholder}
        />
        <TextField
          required
          label="비밀번호 확인"
          type="password"
          InputLabelProps={inputLabelProps}
          placeholder="비밀번호 확인"
          variant="standard"
          sx={sxPlaceholder}
        />
        <TextField
          required
          label="이름"
          InputLabelProps={inputLabelProps}
          placeholder="실명을 입력해주세요"
          variant="standard"
          sx={sxPlaceholder}
        />
        <TextField
          required
          label="주소"
          InputLabelProps={inputLabelProps}
          placeholder="거주중인 주소를 입력해주세요"
          variant="standard"
          sx={sxPlaceholder}
        />
        <TextField
          required
          label="생년월일"
          InputLabelProps={inputLabelProps}
          placeholder="생년월일을 입력해주세요"
          variant="standard"
          sx={sxPlaceholder}
        />
      </div>
      <div className="signup-form-submit-button-wrapper">
        <button
          onClick={() => {
            navigate("/login");
          }}
          type="submit"
          className="submit-button"
        >
          조금이 시작하기
        </button>
      </div>
    </div>
  );
};
