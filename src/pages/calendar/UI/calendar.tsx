import { Calendar } from "antd";

export const CalendarPage = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "5.569vh",
          marginLeft: "8.205vw",
          fontSize: "6.154vw",
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
          marginTop: "3.081vh",
          marginLeft: "8.205vw",
          fontSize: "4.103vw",
          fontFamily: "Pretendard-bold",
        }}
      >
        <div>
          <span style={{ marginRight: "5.897vw" }}>지출</span>
          <span>1,012,500 원</span>
        </div>
        <div style={{ marginTop: "1.422vh" }}>
          <span style={{ marginRight: "5.897vw" }}>수입</span>
          <span style={{ color: "#3561FF" }}>1,200,000 원</span>
        </div>
      </div>
      <div
        style={{
          padding: "0 8.205vw",
          boxSizing: "border-box",
          height: "10.664vh",
          marginTop: "2.962vh",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "#3561FF",
            width: "100%",
            height: "100%",
            borderRadius: "22px",
            padding: "2.962vh 6.41vw",
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
              fontSize: "1.659vh",
              fontFamily: "Pretendard-bold",
              color: "white",
            }}
          >
            <div>이번 달은 대중교통 지출이 증가했어요!</div>
            <div>택시에 150,200 원을 썻네요.</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2.488vh", padding: "0 7.949vw" }}>
        <div
          style={{
            borderRadius: "22px",
          }}
        >
          <Calendar fullscreen={false} style={{ borderRadius: "22px" }} />
        </div>
      </div>
    </div>
  );
};
