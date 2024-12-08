export const DesktopPage = () =>{
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#3461FF",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "60vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "90vh", width: "60vw" }}
            src="/img/phone_image_shadow.png"
            alt="이미지를 표시할 수 없습니다"
          />
        </div>
        <div
          style={{
            height: "100vh",
            width: "40vw",
            display: "flex",
          }}
        >
          <div style={{ marginTop: "30vh" }}>
            <img
              style={{
                height: "13vh",
                width: "13vw",
              }}
              src="/img/dangchan_desktop_logo.png"
              alt="이미지를 표시할 수 없습니다"
            />
            <div
              style={{
                fontFamily: "SCDream6",
                color: "white",
                fontWeight: "bold",
                fontSize: "24px",
                marginTop: "2vh",
              }}
            >
              보호종료아동 자립 지원 어플리케이션
            </div>
            <div style={{ display: "flex", marginTop:"5vh" }}>
              <img
                style={{ height: "8vh", width: "14vw" }}
                src="/img/appstore_logo.png"
                alt="이미지를 표시할 수 없습니다"
              />
              <img
                style={{ height: "8vh", width: "14vw", marginLeft:"10px" }}
                src="/img/playStore_logo.png"
                alt="이미지를 표시할 수 없습니다"
              />
            </div>
          </div>
        </div>
      </div>
    );
}