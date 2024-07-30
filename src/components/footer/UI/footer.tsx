export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "9.834vh",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 33.98px",
        justifyContent: "space-between",
        borderTop: "1px solid #E0E0E0",
        backgroundColor: "white",
      }}
    >
      <div>
        <img src="/img/footer_icon_home.svg" alt="홈 아이콘" />
      </div>
      <div>
        <img src="/img/footer_icon_span.svg" alt="내 소비 아이콘" />
      </div>
      <div>
        <img src="/img/footer_icon_dangchan.svg" alt="커뮤니티 아이콘" />
      </div>
      <div>
        <img src="/img/footer_icon_community.svg" alt="마이 아이콘" />
      </div>
    </div>
  );
};
