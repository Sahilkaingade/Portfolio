import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiBookOpen,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f7f8fd] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-[2px] bg-orange-500"></div>

            <p className="uppercase tracking-[3px] text-orange-500 text-xs font-semibold">
              Who I Am
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#0A1D56]">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-7 text-[17px] leading-8 text-gray-500">

            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-[#0A1D56]">
                Sahil Sanjay Kaingade
              </span>
              , a web developer based in Mumbai,
              Maharashtra. I specialize in building responsive,
              full-stack web applications using React.js,
              Tailwind CSS, JavaScript and MongoDB.
            </p>

            <p>
              I'm currently pursuing a{" "}
              <span className="font-semibold text-[#0A1D56]">
                BSc in Information Technology
              </span>{" "}
              at Vidyalankar School of Information Technology
              (2023–2026) with an outstanding CGPA of 9.42,
              and interning at{" "}
              <span className="font-semibold text-[#0A1D56]">
                Maxval Technologies
              </span>{" "}
              where I handle frontend workflow tasks.
            </p>

            <p>
              I'm passionate about creating seamless user
              experiences and continuously expanding my
              full-stack skill set.
            </p>

          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <InfoCard
              icon={<FiPhone />}
              title="Phone"
              value="+91 7021418973"
            />

            <InfoCard
              icon={<FiMapPin />}
              title="Location"
              value="Mumbai, Maharashtra"
            />

            <InfoCard
              icon={<FiMail />}
              title="Email"
              value="kaingadesahil841@gmail.com"
            />

            <InfoCard
              icon={<FiBookOpen />}
              title="Degree"
              value="BSc IT"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, value }) => {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
        duration-300
        p-5
        flex
        items-start
        gap-4
      "
    >
      <div className="text-orange-500 text-xl mt-1">
        {icon}
      </div>

      <div>
        <h4 className="text-xs text-gray-400 mb-1">
          {title}
        </h4>

        <p className="text-base font-semibold text-[#0A1D56]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default About;