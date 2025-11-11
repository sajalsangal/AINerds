import purpleBlob from "../assets/blob-purple.svg";
import redBlob from "../assets/blob-red.svg";
import polygon3D from "../assets/polygon-3d.png";

export default function Home() {
  return (
    <section className="w-full relative overflow-hidden px-8 py-20 flex flex-col md:flex-row items-center justify-between">

      {/* Background blobs */}
      <img
        src={purpleBlob}
        alt="purple-blob"
        className="absolute -left-20 top-10 w-[650px] md:w-[850px] -z-10"
      />
      <img
        src={redBlob}
        alt="red-blob"
        className="absolute -left-10 bottom-0 w-[300px] md:w-[380px] -z-10"
      />

      {/* Left text */}
      <div className="max-w-lg space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Find Your Perfect Job
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-pink-500">
          Instantly with AI.
        </h2>

        <p className="text-gray-700 italic">
          One Stop Solution To All Your Job Related Needs!
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium">
            Upload Resume
          </button>
          <button className="border border-black px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right graphic */}
      <div className="w-full flex justify-center md:justify-end mt-12 md:mt-0">
        <img
          src={polygon3D}
          alt="3d-feature"
          className="w-[260px] md:w-[340px]"
        />
      </div>
    </section>
  );
}
