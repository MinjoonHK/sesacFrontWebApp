import { Checkbox, Form, Input } from "antd";
import "./loginInput.css";
import { useNavigate } from "react-router-dom";

export const LoginInputPage = () => {
  const userName = "admin@gmail.com";
  const userPass = "1234";
  const navigate = useNavigate();
  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email === userName && password === userPass) {
      navigate("/chat");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <div className="login-input-page-wrapper">
      <div
        className="login-page-title"
        style={{
          marginTop: "3.673vh",
          marginLeft: "43.333vw",
          fontSize: "20px",
          fontFamily: "Pretendard-bold",
        }}
      >
        로그인
      </div>
      <div style={{ marginTop: "15.877vh" }}>
        <Form
          onFinish={handleSubmit}
          requiredMark={false}
          style={{ padding: "0 25px" }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "올바른 이메일 형식이 아닙니다.",
              },
              {
                required: true,
                message: "이메일을 입력해주세요.",
              },
            ]}
            required
            style={{ marginBottom: "0" }}
          >
            <Input
              style={{ width: "100%", height: "5.806vh" }}
              prefix={
                <img
                  src="/img/login_user_icon.svg"
                  style={{ marginRight: "20.21px" }}
                />
              }
              placeholder="아이디(이메일)"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요.",
              },
            ]}
            name="password"
            required
            style={{ marginTop: "14px" }}
          >
            <Input
              type="password"
              style={{ width: "100%", height: "5.806vh" }}
              prefix={
                <img
                  src="/img/login_password_icon.svg"
                  style={{ marginRight: "20.21px" }}
                />
              }
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item style={{ marginTop: "5.213vh" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                height: "5.806vh",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#3561FF",
                fontFamily: "Pretendard-Bold",
                fontSize: "16px",
                color: "white",
              }}
            >
              당찬 로그인하기
            </button>
          </Form.Item>
          <div
            style={{
              marginTop: "3.91vh",
              display: "flex",
              justifyContent: "space-between",
              color: "#B1B5B8",
              fontSize: "13px",
              fontFamily: "Pretendard-Medium",
            }}
          >
            <div>
              <Checkbox style={{ marginRight: "8px" }} />
              로그인 유지
            </div>
            <div style={{ display: "flex", columnGap: "9.5px" }}>
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </span>
              <span> | </span>
              <span>정보찾기</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
