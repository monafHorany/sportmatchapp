import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: "user",
};
function App() {
  const [imgsrc, setImagesrc] = useState(null);
  console.log(imgsrc);

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}images/download.jpeg`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
          />
        </form>
      </div>

      <Webcam
        audio={false}
        height={600}
        forceScreenshotSourceSize="true"
        screenshotFormat="image/png"
        width={800}
        screenshotQuality="1"
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-10"
            onClick={() => {
              setImagesrc(getScreenshot({ width: 1920, height: 1080 }));
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      {imgsrc && <img src={imgsrc} />}
    </React.Fragment>
  );
}

export default App;
