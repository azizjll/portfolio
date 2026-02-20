import personaziz from "../../assets/images/personaziz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={personaziz}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
        <h2
          className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
        >
          I am a Full-Stack Engineer & UI/UX Designer
        </h2>

        <div
          className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
        >
          <p>
            I design and develop modern, scalable <span className="font-medium">web and mobile applications</span> 
            with clean code, intuitive design, and a focus on <span className="font-medium">user-centered experiences</span>. 
            I am also passionate about <span className="font-medium">AI models</span> and emerging technologies.
          </p>
          <p className="mt-3">
            My goal is to deliver <span className="font-medium">high-performance, reliable, and visually appealing digital solutions</span> 
            that make a real impact for users and businesses.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl xs:text-2xl font-semibold mb-4">Education & Academic Background</h3>

          <div className="space-y-4 text-gray-700 text-sm xs:text-base">
            <div>
              <p className="font-medium">Bachelor's Degree in Information and Communication Technologies</p>
              <p>Institut Supérieur des Sciences Appliquées et de Technologies de Gafsa</p>
              <p className="text-gray-500">2021 - 2023</p>
              <p>Specialization: Telecommunications and Networks</p>
            </div>

            <div>
              <p className="font-medium">Engineering Program in Computer Science</p>
              <p>Ecole Supérieure Privée d'Ingénierie et de Technologies</p>
              <p className="text-gray-500">Specialization: Software Engineering</p>
            </div>
            </div>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="#!"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
