import "./communityWrite.css";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

export const CommunityWritePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          padding: "0 7.436vw",
          marginTop: "3.199vh",
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            navigate("/main/community");
          }}
        >
          <img
            src="/img/back_arrow_icon.svg"
            alt="이미지를 표시할수 없습니다!"
          />
        </div>
        <div
          style={{
            textWrap: "nowrap",
            fontFamily: "Pretendard-bold",
            fontSize: "5.128vw",
            marginLeft: "27.051vw",
            marginRight: "22.821vw",
          }}
        >
          글 쓰기
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "14.872vw",
            borderRadius: "25px",
            fontSize: "14px",
            fontFamily: "Pretendard-bold",
            backgroundColor: "#3561FF",
            color: "white",
          }}
        >
          완료
        </div>
      </div>
      <Form>
        <Form.Item
          name="title"
          style={{
            marginTop: "5.924vh",
            padding: "0 7.692vw",
            marginBottom: "0",
          }}
        >
          <input
            placeholder="제목"
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid #B1B5B8",
            }}
          />
        </Form.Item>
        <Form.Item
          name="content"
          style={{ marginTop: "1.777vh", padding: "0 7.692vw" }}
        >
          <textarea
            style={{
              padding: "0",
              border: "none",
              height: "70vh",
              width: "100%",
            }}
            placeholder="내용을 입력하세요"
          />
        </Form.Item>
      </Form>
    </div>
  );
};
