import "./App.css";
import useMouse from "@react-hook/mouse-position";
import { useEffect, useRef, useState } from "react";

const profileInfos = [
  { label: "Name", data: "Peter Szalma" },
  { label: "Role", data: "Junior Fullstack Developer" },
  { label: "Email", data: "peter.szalma@dakai.io" },
  { label: "Phone", data: "123456678" },
  { label: "Introduction", data: "Hi, I'm Peter." },
];

function App() {
  const ref = useRef(null);
  const [broken, setBroken] = useState(0);
  const { x, y } = useMouse(ref);

  useEffect(() => {
    console.log("x:", (150 - y) / 15);
    console.log("y:", -(300 - x) / 50);
  }, [x, y]);

  const breaking = () => setBroken((prev) => prev + 1);
  return (
    <div className="app">
      <div
        ref={ref}
        className="card"
        onClick={() => breaking()}
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
        <div
          className="line line1"
          style={
            broken > 8 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line2"
          style={
            broken > 5 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line3"
          style={
            broken > 3 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line3"
          style={
            broken > 3 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line4"
          style={broken ? { display: "flex", height: 0.1 * broken + "px" } : {}}
        ></div>
        <div
          className="line line5"
          style={
            broken > 3 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line6"
          style={
            broken > 8 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line7"
          style={
            broken > 10 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div
          className="line line8"
          style={
            broken > 10 ? { display: "flex", height: 0.1 * broken + "px" } : {}
          }
        ></div>
        <div className="profile_icon_container">
          <div className="profile_icon"></div>
        </div>
        <div className="profile_info_container">
          {profileInfos.map((profileInfo) => (
            <div key={profileInfo.label} className="profile_info">
              <p className="label">{profileInfo.label}</p>
              <p className="data">{profileInfo.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
