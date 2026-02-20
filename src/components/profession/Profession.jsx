import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web & Mobile Applications",
    description:
      "I create web and mobile applications using different tools and technologies.",
  },
  {
    id: 2,
    title: "Performance & Testing",
    description:
      "I perform testing, control performance, and ensure scalability of each project.",
  },
  {
    id: 3,
    title: "AI & Innovative Technologies",
    description:
      "I improve applications by integrating AI models and adopting innovative technologies.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I create modern <span className="font-medium">web and mobile applications</span> 
            using different tools and technologies. I ensure <span className="font-medium">performance, testing, and scalability</span> of each project.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I continuously enhance applications by integrating <span className="font-medium">AI models</span> and adopting <span className="font-medium">innovative technologies</span> to deliver cutting-edge solutions.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
