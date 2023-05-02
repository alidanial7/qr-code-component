import "./App.css";
import qrCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="w-screen h-screen bg-light-gray flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl max-w-[300px]">
        <img src={qrCodeImage} alt="qr-code" className="rounded-xl" />
        <p className="font-bold text-xl mt-4 text-dark-blue text-center">
          Improve your front-end skills by building projects
        </p>
        <p className="text-center text-grayish-blue mt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
