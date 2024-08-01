export const CommunityPage = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "27px",
          width: "100%",
          boxSizing: "border-box",
          padding: "0 31px",
          height: "21.445vh",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",

            border: "1px solid #E0E0E0",
            borderRadius: "22px",
          }}
        >
          <div style={{ padding: "21px" }}>
            <div
              style={{
                fontFamily: "Pretendard-extrabold",
                fontSize: "16px",
                color: "#3561FF",
              }}
            >
              당찬 게시물
            </div>
            <div
              style={{
                fontSize: "15px",
                marginTop: "9px",
                fontFamily: "Pretendard-bold",
                color: "#131313",
              }}
            >
              이제 막 쉼터 퇴소해서 자금 모으고 있는 친구들
            </div>
            <div style={{ marginTop: "9px", width: "283px", fontSize: "12px" }}>
              <p>
                살 곳 구할 때 꼭!! 멘토 선생님이나 쉼터 관계자분이랑 같이 가서
                계약해.. 혼자 이것저것 알아봤다고 해도, 집 구한 경험 많다고 해도
                사기당할 위험이 너무 크니까 번거로워도...
              </p>
            </div>
            <div style={{ marginTop: "16px" }}>좋아요 댓글</div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "27px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        {CommunityData.map((data, index) => {
          return (
            <div
              key={`${index}communityData`}
              style={{
                boxSizing: "border-box",
                padding: "21px",
                borderTop: "1px solid #E0E0E0",
                width: "100vw",
              }}
            >
              <div
                style={{
                  fontFamily: "Pretendard-extrabold",
                  fontSize: "16px",
                  color: "#3561FF",
                }}
              >
                {data.title}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  marginTop: "9px",
                  fontFamily: "Pretendard-bold",
                  color: "#131313",
                }}
              >
                {data.content}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "12.915vh",
          right: "8.205vw",
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
          border: "1px solid #DEDEDE",
          padding: "10px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <img
          src="/img/community_pencil_icon.svg"
          alt="이미지를 표시할 수 없습니다!"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
    </div>
  );
};

const CommunityData = [
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
  {
    title: "취업훈련 서치할때 꿀팁",
    content: `구글에 직업훈련 지식포털 검색하고 들어가면 훈련과정 - 전체 훈련과정 있음 선택하고 자기가 원하는 거 신청하면 됨`,
  },
];
