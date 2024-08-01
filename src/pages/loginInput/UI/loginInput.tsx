import { Checkbox, Form, Input } from "antd";
import "./loginInput.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginInputPage = () => {
  const navigate = useNavigate();
  const handleSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    axios
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data.data.access_token);
          localStorage.setItem("access_token", res.data.data.access_token);
          navigate("/main/home");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      });
  };
  return (
    <div className="login-input-page-wrapper">
      <div
        className="login-page-title"
        style={{
          marginTop: "8.649vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/img/login_input_icon.svg" alt="이미지를 표시할수 없습니다" />
      </div>
      <div style={{ marginTop: "7.109vh" }}>
        <Form
          onFinish={handleSubmit}
          requiredMark={false}
          style={{ padding: "0 6.41vw" }}
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
                  style={{ marginRight: "5.182vw" }}
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
            style={{ marginTop: "1.659vh" }}
          >
            <Input
              type="password"
              style={{ width: "100%", height: "5.806vh" }}
              prefix={
                <img
                  src="/img/login_password_icon.svg"
                  style={{ marginRight: "5.182vw" }}
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
              <Checkbox style={{ marginRight: "2.051vw" }} />
              로그인 유지
            </div>
            <div style={{ display: "flex", columnGap: "1.126vh" }}>
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
