import { TextField } from "@mui/material";
import { useState } from "react";
import "./signUp.css";

const labelSize = "1rem";
const placeholderSize = "0.8125rem";

export const SignUpPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div className="signup-page-wrapper">
      <div className="signup-page-inner-wrapper">
        <div className="input-group">
          <TextField
            label="아이디(이메일)"
            type="email"
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: labelSize,
                color: "black",
                fontFamily: "Pretendard",
                fontWeight: "bold",
              },
            }}
            placeholder="이메일 주소"
            variant="standard"
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontSize: placeholderSize,
                fontFamily: "Pretendard",
              },
            }}
          />
          <button className="check-button">중복확인</button>
        </div>
        <div className="input-group">
          <TextField
            label="인증번호"
            type="email"
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: labelSize,
                color: "black",
                fontFamily: "Pretendard",
                fontWeight: "bold",
              },
            }}
            placeholder="인증번호 입력"
            variant="standard"
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontSize: placeholderSize,
                fontFamily: "Pretendard",
              },
            }}
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
          label="비밀번호"
          type="password"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: labelSize,
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="비밀번호"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: placeholderSize,
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="비밀번호 확인"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: labelSize,
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="비밀번호 확인"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: placeholderSize,
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="이름"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: labelSize,
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="실명을 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: placeholderSize,
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="주소"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: labelSize,
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="거주중인 주소를 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: placeholderSize,
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="생년월일"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: labelSize,
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="생년월일을 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: placeholderSize,
              fontFamily: "Pretendard",
            },
          }}
        />
      </div>
      <button className="submit-button">조금이 시작하기</button>
    </div>
  );
};
