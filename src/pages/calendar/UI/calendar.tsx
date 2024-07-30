import { Calendar } from "antd";

export const CalendarPage = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "47px",
          marginLeft: "32px",
          fontSize: "24px",
          fontFamily: "Pretendard-extraBold",
        }}
      >
        <p>
          당찬 김새싹님,
          <br />
          이번 달은 소비가 늘었어요!
        </p>
      </div>

      <div
        style={{
          marginTop: "26px",
          marginLeft: "32px",
          fontSize: "16px",
          fontFamily: "Pretendard-bold",
        }}
      >
        <div>
          <span style={{ marginRight: "23px" }}>지출</span>
          <span>1,012,500 원</span>
        </div>
        <div style={{ marginTop: "12px" }}>
          <span style={{ marginRight: "23px" }}>수입</span>
          <span style={{ color: "#3561FF" }}>1,200,000 원</span>
        </div>
      </div>
      <div
        style={{
          padding: "0 32px",
          boxSizing: "border-box",
          height: "10.664vh",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "#3561FF",
            width: "100%",
            height: "100%",
            borderRadius: "22px",
            padding: "25px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src="/img/dangchan_icon_calendar.svg"
              alt="당찬 아이콘 이미지"
              style={{
                width: "56.33px",
                height: "44.53px",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard-bold",
              color: "white",
            }}
          >
            <div>이번 달은 대중교통 지출이 증가했어요!</div>
            <div>택시에 150,200 원을 썻네요.</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "21px", padding: "0 31px" }}>
        <div
          style={{
            height: "411px",
            border: "1px solid #E0E0E0",
            borderRadius: "22px",
          }}
        >
          <Calendar fullscreen={false} style={{ borderRadius: "22px" }} />
        </div>
      </div>
    </div>
  );
};
