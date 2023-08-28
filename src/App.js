import "./App.css";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";

const profileInfos = [
  { label: "Name", data: "Peter Szalma" },
  { label: "Role", data: "Frontend Developer" },
  { label: "Email", data: "test@gmail.com" },
  { label: "Phone", data: "123456678" },
  { label: "Introduction", data: "Hi, I'm Peter." },
];

function App() {
  const ref = useRef(null);
  const { x, y } = useMouse(ref);

  return (
    <div className="app">
      <div className="container">
        <div
          ref={ref}
          className="card"
          style={
            x === null && y === null
              ? {
                  transition:
                    "all 3000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                  transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                }
              : {
                  transition:
                    "all 3000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                  transform: `perspective(1000px) rotateX(${
                    (150 - y) / 15
                  }deg) rotateY(${-(300 - x) / 50}deg) scale3d(1, 1, 1)`,
                }
          }
        >
          <div className="profile_icon_container">
            <div className="profile_icon" />
          </div>
          <div className="profile_info_container">
            {profileInfos.map((profileInfo) => (
              <div key={profileInfo.label} className="profile_info">
                <p className="label">{profileInfo.label}</p>
                <p className="data">{profileInfo.data}</p>
              </div>
            ))}
          </div>
          {/* <div className="white_line" />
          <div className="white_line_2" />
          <div className="white_line_3" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
