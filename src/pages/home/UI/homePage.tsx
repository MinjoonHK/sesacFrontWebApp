export const HomePage = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "6.28vh",
          padding: "0 7.949vw",
          display: "flex",
        }}
      >
        <div>
          <img
            src="/img/home_sprout_icon.svg"
            alt="이미지를 표시할수 없습니다"
          />
        </div>
        <div style={{ marginLeft: "3.846vw" }}>
          <div style={{ fontFamily: "Pretendard-bold", fontSize: "5.128vw" }}>
            당찬 김새싹 님!
          </div>
          <div style={{ display: "flex", marginTop: "1.185vh" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                height: "3.318vh",
                width: "13.333vw",
                backgroundColor: "#3561FF",
                borderRadius: "24.5px",
                fontFamily: "Pretendard-semibold",
                fontSize: "3.333vw",
                marginRight: "1.282vw",
              }}
            >
              맨티
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "26.667vw",
                height: "3.318vh",
                color: "#3561FF",
                backgroundColor: "white",
                border: "1px solid #3561FF",
                borderRadius: "24.5px",
                fontSize: "3.333vw",
                fontFamily: "Pretendard-semibold",
              }}
            >
              실명 인증완료
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "4.502vh",
          width: "100%",
          justifyContent: "center",
          padding: "0 7.949vw",
        }}
      >
        <img
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/img/question_badge.svg"
          alt="이미지를 표시할 수 없습니다!"
        />
      </div>
      <div
        style={{
          marginTop: "4.976vh",
          border: "none",
          borderTop: "1px solid #DDDDDD",
          padding: "3.199vh 7.949vw",
        }}
      >
        <div
          style={{
            fontFamily: "Pretendard-Medium",
            fontSize: "3.846vw",
            color: "#B1B5B8",
          }}
        >
          고객센터
        </div>
        <div
          style={{
            fontFamily: "Pretendard-bold",
            fontSize: "4.103vw",
            display: "flex",
            flexDirection: "column",
            gap: "3.081vh",
            marginTop: "2.607vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>공지사항</div>
            <div>
              <img
                src="/img/home_right_arrow.svg"
                alt="이미지를 표시할수 없습니다!"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>FAQ</div>
            <div>
              <img
                src="/img/home_right_arrow.svg"
                alt="이미지를 표시할수 없습니다!"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>로그아웃</div>
            <div>
              <img
                src="/img/home_right_arrow.svg"
                alt="이미지를 표시할수 없습니다!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
