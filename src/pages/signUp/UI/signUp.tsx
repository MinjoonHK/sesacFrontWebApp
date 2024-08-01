import { Button, Form } from "antd";
import "./signUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

interface SignUpForm {
  email: string;
  authCode: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  birth: string;
}
export const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpForm] = Form.useForm();
  const handleSubmit = ({
    email,
    authCode,
    password,
    passwordConfirm,
    userName,
    birth,
  }: SignUpForm) => {
    console.log(email, authCode, password, passwordConfirm, userName, birth);
    navigate("/login");
  };
  return (
    <div className="signup-page-wrapper">
      <div
        className="signup-page-title"
        style={{
          marginTop: "3.673vh",
          marginLeft: "41.026vw",
          fontFamily: "Pretendard-Bold",
          fontSize: "5.128vw",
        }}
      >
        회원가입
      </div>
      <div
        className="signup-page-signup-content-wrapper"
        style={{ marginTop: "5.332vh" }}
      >
        <Form
          requiredMark={false}
          form={signUpForm}
          onFinish={handleSubmit}
          layout="vertical"
          style={{ padding: "0 8.205vw" }}
          initialValues={{
            email: "",
            authCode: "",
            password: "",
            passwordConfirm: "",
            userName: "",
            birth: "",
          }}
        >
          <Form.Item
            required
            rules={[
              { required: true, message: "아이디(이메일)을 입력해 주세요!" },
            ]}
            name="email"
            label="아이디(이메일)"
            style={{ width: "100%", fontFamily: "Pretendard-Regular" }}
          >
            <input
              type="email"
              className="signup-page-signup-content-input"
              placeholder="이메일 주소"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0" }}>
            <Form.Item
              name="authCode"
              label="인증번호"
              style={{
                fontFamily: "Pretendard-Regular",
                display: "inline-block",
                width: "calc(60.513vw - 2.051vw)",
              }}
            >
              <input
                className="signup-page-signup-content-input"
                placeholder="인증번호 입력"
              />
            </Form.Item>
            <Form.Item
              style={{
                display: "inline-block",
                position: "relative",
                height: "100%",
                marginTop: "3.555vh",
                marginLeft: "2.051vw",
              }}
            >
              <Button
                onClick={() => {
                  if (signUpForm.getFieldValue("email") === "") {
                    Swal.fire({
                      icon: "error",
                      title: "이메일을 입력해 주세요",
                    });
                    return;
                  }
                  axios
                    .post("/mail/send", {
                      to: signUpForm.getFieldValue("email"),
                      subject: "당찬 이메일 인증",
                    })
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                style={{
                  borderRadius: "24.5px",
                  height: "3.318vh",
                  fontSize: "2.564vw",
                  fontFamily: "Pretendard-Medium",
                }}
              >
                인증번호 받기
              </Button>
            </Form.Item>
          </Form.Item>

          <Form.Item
            required
            rules={[
              () => ({
                validator(_, value) {
                  let pattern = /[!@#$%^&*()]/;
                  let patternCheck = pattern.test(value);
                  if (!value) {
                    return Promise.reject(
                      new Error("비밀번호를 입력해 주세요!")
                    );
                  } else if (!patternCheck) {
                    return Promise.reject(
                      new Error("특수문자를 포함해 주세요!")
                    );
                  } else if (value.length < 8) {
                    return Promise.reject(
                      new Error("비밀번호는 8자 이상이어야 합니다!")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            name="password"
            label="비밀번호"
            style={{ width: "100%", fontFamily: "Pretendard-Regular" }}
          >
            <input
              type="password"
              className="signup-page-signup-content-input"
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item
            required
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("비밀 번호가 일치하지 않습니다!")
                  );
                },
              }),
              { required: true, message: "비밀번호를 확인해 주세요!" },
            ]}
            name="passwordConfirm"
            label="비밀번호 확인"
            style={{ width: "100%", fontFamily: "Pretendard-Regular" }}
          >
            <input
              type="password"
              className="signup-page-signup-content-input"
              placeholder="비밀번호 확인"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "이름을 입력해 주세요!" }]}
            required
            name="userName"
            label="이름"
            style={{ width: "100%", fontFamily: "Pretendard-Regular" }}
          >
            <input
              className="signup-page-signup-content-input"
              placeholder="이메일 주소"
            />
          </Form.Item>

          <Form.Item
            required
            rules={[{ required: true, message: "생년월일을 입력해 주세요!" }]}
            name="birth"
            label="생년월일"
            style={{ width: "100%", fontFamily: "Pretendard-Regular" }}
          >
            <input
              className="signup-page-signup-content-input"
              placeholder="이메일 주소"
            />
          </Form.Item>
          <Form.Item style={{ marginTop: "11.611vh" }}>
            <button
              type="submit"
              style={{
                height: "5.806vh",
                width: "100%",
                borderRadius: "24.5px",
                fontFamily: "Pretendard-Bold",
                color: "white",
                fontSize: "4.103vw",
                backgroundColor: "#3561FF",
                border: "none",
              }}
            >
              당찬 시작하기
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
