import { TextField } from "@mui/material";
import { useState } from "react";

export const SignUpPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div className="signup-page-wrapper">
      <div
        className="signup-page-inner-wrapper"
        style={{
          marginTop: "100px",
          display: "flex",
          marginLeft: "32px",
          marginRight: "32px",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <div style={{ display: "flex" }}>
          <TextField
            label="아이디(이메일)"
            type="email"
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "16px",
                color: "black",
                fontFamily: "Pretendard",
                fontWeight: "bold",
              },
            }}
            placeholder="이메일 주소"
            variant="standard"
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontSize: "13px", // 원하는 폰트 크기로 변경
                fontFamily: "Pretendard",
              },
            }}
          />
          <button
            style={{
              borderRadius: "24.5px",
              width: "83px",
              height: "28px",
              border: "1px solid #191600",
              backgroundColor: "white",
              marginTop: "20px",
              marginLeft: "7px",
              color: "#191600",
              fontWeight: "bold",
            }}
          >
            중복확인
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            label="인증번호"
            type="email"
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "16px",
                color: "black",
                fontFamily: "Pretendard",
                fontWeight: "bold",
              },
            }}
            placeholder="인증번호 입력"
            variant="standard"
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontSize: "13px", // 원하는 폰트 크기로 변경
                fontFamily: "Pretendard",
              },
            }}
          />
          <button
            style={{
              borderRadius: "24.5px",
              width: "100px",
              height: "28px",
              border: "1px solid #191600",
              backgroundColor: "white",
              marginTop: "20px",
              marginLeft: "7px",
              color: "#191600",
              fontWeight: "bold",
            }}
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
              fontSize: "16px",
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="비밀번호"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: "13px", // 원하는 폰트 크기로 변경
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="비밀번호 확인"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: "16px",
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="비밀번호 확인"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: "13px", // 원하는 폰트 크기로 변경
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="이름"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: "16px",
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="실명을 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: "13px", // 원하는 폰트 크기로 변경
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="주소"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: "16px",
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="거주중인 주소를 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: "13px", // 원하는 폰트 크기로 변경
              fontFamily: "Pretendard",
            },
          }}
        />
        <TextField
          label="생년월일"
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: "16px",
              color: "black",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            },
          }}
          placeholder="생년월일을 입력해주세요"
          variant="standard"
          sx={{
            "& .MuiInputBase-input::placeholder": {
              fontSize: "13px", // 원하는 폰트 크기로 변경
              fontFamily: "Pretendard",
            },
          }}
        />
      </div>
      <button
        style={{
          width: "340px",
          height: "49px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "24.5px",
          marginTop: "98px",
          marginLeft: "25px",
        }}
      >
        조금이 시작하기
      </button>
    </div>
  );
};
