import { FaReact } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full min-h-[500px] flex items-center relative z-10">

      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-20">

        {/* LEFT CONTENT */}
        <div className="space-y-5 text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Donia Magdy
          </h1>

          <p className="text-purple-200 tracking-[5px] text-sm md:text-lg">
            FRONTEND DEVELOPER | REACT.JS DEVELOPER
          </p>

         <a className="bg-violet-400 text-amber-50 p-3 rounded-md "   href="/Donia-Magdy-Resume.pdf"   download>Download Resume</a>


        </div>

        {/* RIGHT SIDE */}
        <div className="orbit-system">

          {/* SVG ORBITS */}
          <svg className="orbit-svg" viewBox="0 0 220 220">

            <defs>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>

                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

            </defs>

            {/* orbit 1 */}
            <ellipse
              cx="110"
              cy="110"
              rx="95"
              ry="34"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              opacity="0.95"
              filter="url(#glow)"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,.7))"
              }}
            />

            {/* orbit 2 */}
            <ellipse
              cx="110"
              cy="110"
              rx="95"
              ry="34"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              opacity="0.95"
              transform="rotate(60 110 110)"
              filter="url(#glow)"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,.7))"
              }}
            />

            {/* orbit 3 */}
            <ellipse
              cx="110"
              cy="110"
              rx="95"
              ry="34"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              opacity="0.95"
              transform="rotate(-60 110 110)"
              filter="url(#glow)"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,.7))"
              }}
            />

          </svg>

          {/* CENTER GLOW */}
          <div className="core-glow"></div>

          {/* BIG REACT */}
          <div className="react-center">
            <FaReact />
          </div>

          {/* MOVING SMALL REACT */}
          <div className="react-orbit">

            <div className="icon-react">
              <FaReact />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;