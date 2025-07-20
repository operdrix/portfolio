import ExperienceCard from '@/components/experience-card'
import SocialIcons from '@/components/social-icons'
import { Link } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#11071F] relative overflow-hidden">
      {/* Integrated Navigation Header */}
      <header className="w-full h-[113px] relative z-50">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e8519795ae675acbc0648bf150ea0d245a2ed9d1?width=3960"
          alt="Header background"
          className="w-full h-[113px] absolute left-0 top-0 shadow-[0px_6px_22px_-3px_rgba(0,0,0,0.10)]"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4e40075cf12ece3c082ca108c0fd2b6d4961d1c9?width=70"
          alt="Logo"
          className="w-[35px] h-[39px] absolute left-[497px] top-[37px]"
        />
        <nav className="flex gap-[58px] absolute left-[1111px] top-[43px]">
          <Link
            href="/"
            className="flex w-[66px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="flex w-[68px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="flex w-[49px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
          >
            Lab
          </Link>
        </nav>
      </header>
      {/* Background Images */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/60518a1274de5039f4a10ed2a27ecd5a240f1164?width=3980"
        alt="Background"
        className="w-full h-[4298px] absolute left-0 top-[102px] object-cover"
      />

      {/* Gradient Elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/cf35408b4b0c5581de4b9cde3d18f3b83aae82ed?width=1284"
        alt="Gradient"
        className="w-[642px] h-[720px] rounded-full absolute left-[858px] top-[2580px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/efe50eef13921f3d2f43cfed644f2f76ff2d9773?width=1250"
        alt="Gradient"
        className="w-[625px] h-[700px] rounded-full absolute left-[739px] top-[1022px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/efe50eef13921f3d2f43cfed644f2f76ff2d9773?width=1250"
        alt="Gradient"
        className="w-[625px] h-[700px] rounded-full absolute left-[1084px] top-[2571px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/9f70bc28b91503c995a3a65eb7bc8091f4396502?width=1144"
        alt="Gradient"
        className="w-[572px] h-[641px] rounded-full absolute left-[274px] top-[3166px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/47979a28bb4e4dc6ebb7845fdf99b0e1490deec5?width=770"
        alt="Gradient"
        className="w-[385px] h-[431px] rounded-full absolute left-[385px] top-[220px]"
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-[113px] px-4 relative">
          {/* Profile Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/35c5a711819e9d6a0a40c4f79bbd1653b0e9be15?width=516"
            alt="Ibrahim Memon"
            className="w-[258px] h-[259px] absolute left-[461px] top-[306px]"
          />

          {/* Arrow */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/06c27d36fe83df788bb3577e0a390e1d7afe4419?width=184"
            alt="Arrow"
            className="w-[92px] h-[82px] absolute left-[604px] top-[224px]"
          />

          {/* Ellipse decoration */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/36ecd850b275a1778db4d7c9a856411e87a2a702?width=377"
            alt="Ellipse decoration"
            className="w-[189px] h-[58px] absolute left-[875px] top-[435px] transform rotate-[-4.744deg] stroke-white stroke-1"
          />

          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-4 pt-[133px]">
            <div className="flex justify-center items-center w-[245px] h-[20px] text-center font-preahvihear text-[19px] font-normal leading-[97px] tracking-[-0.5px] absolute left-[707px] top-[246px]">
              <span className="text-white">Hello! Moi c&apos;est</span>
              <span className="text-[#7127BA]">Olivier PERDRIX</span>
            </div>

            <div className="w-[141px] h-[31px] absolute left-[727px] top-[352px] text-white text-center font-preahvihear text-[17px] font-normal leading-normal tracking-[0.34px] underline">
              A Designer who
            </div>

            <div className="w-[386px] h-[126px] absolute left-[727px] top-[380px] font-preahvihear text-[50px] font-normal leading-[126.664%] tracking-[1px]">
              <span className="text-white">Judges a book by its </span>
              <span className="text-[#7127BA]">cover</span>
              <span className="text-white">...</span>
            </div>

            <div className="w-[341px] h-[20px] absolute left-[727px] top-[509px] text-white text-center font-preahvihear text-[11px] font-normal leading-normal tracking-[0.22px]">
              Because if the cover does not impress you what else can?
            </div>

            <div className="w-[674px] h-[90px] absolute left-[474px] top-[661px] text-white font-preahvihear text-[50px] font-normal leading-normal tracking-[1px]">
              I&apos;m a Software Engineer.|
            </div>

            <div className="w-[573px] h-[38px] absolute left-[474px] top-[737px]">
              <div className="text-white font-preahvihear text-[21px] font-normal leading-normal tracking-[0.42px]">
                Currently, I&apos;m a Software Engineer at <span className="text-[#1877F2]">Facebook</span>,
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/517ce9cac19183357c7aa5d3b1dd690ada3171e4?width=40"
                alt="Facebook logo"
                className="w-[20px] h-[21px] absolute left-[429px] top-[8px]"
              />
            </div>

            <div className="w-[892px] h-[120px] absolute left-[477px] top-[845px] text-white font-preahvihear text-[22px] font-normal leading-normal tracking-[0.44px]">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="pt-[300px] px-4">
          <h2 className="w-[353px] h-[72px] absolute left-[468px] top-[1135px] text-white font-preahvihear text-[40px] font-normal leading-normal tracking-[0.8px]">
            Work Experience
          </h2>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-2 gap-8 absolute left-[463px] top-[1251px]">
            <ExperienceCard
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/3f78cc0684dc5948cdf678f8ccc4efbb13720ac7?width=244"
              iconAlt="CIB Mobile icon"
            />
            <ExperienceCard
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/fa73c11b193d852b4bb6886949c40a919e832647?width=240"
              iconAlt="CIB Mobile icon"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 absolute left-[463px] top-[1461px]">
            <ExperienceCard
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/25a93a477462ae2824bafda7f15d3e900442a6c2?width=240"
              iconAlt="CIB Mobile icon"
            />
            <ExperienceCard
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/8d32e2cbe142343849ca122f4e51162a2df27f06?width=228"
              iconAlt="CIB Mobile icon"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="absolute left-[598px] top-[1817px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d307c2ffa41cea0552ab36e6ea7ca57f4d305200?width=1790"
            alt="Skills visualization"
            className="w-[895px] h-[754px]"
          />
        </section>

        {/* Portfolio Projects Section */}
        <section className="pt-[1000px] px-4 relative">
          {/* First Project */}
          <div className="absolute left-[462px] top-[2786px]">
            <div className="w-[622px] h-[333px] relative">
              <div className="w-[590px] h-[108px] absolute left-[32px] top-[126px] text-[#CCD6F6] font-poppins text-[18px] font-medium leading-normal">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.
              </div>
              <div className="w-[287px] h-[51px] absolute left-0 top-[19px] text-[#CCD6F6] font-poppins text-[34px] font-bold leading-normal tracking-[0.68px]">
                Example Project
              </div>
              <div className="w-[143px] h-[24px] absolute left-0 top-0 text-[#9857D3] font-poppins text-[16px] font-bold leading-normal tracking-[0.32px]">
                Featured Project
              </div>

              {/* Project Icons */}
              <div className="flex gap-4 absolute left-[25px] top-[301px]">
                <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_16_179" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                    <path d="M15.5 2.58331V7.74998" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2083 14.2083L27.125 16.7916L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2083 14.2083Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.6334 6.36658L20.9799 10.0201M6.36663 24.6333L10.0201 20.9798M2.58334 15.5H7.75001M6.36663 6.36658L10.0201 10.0201" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </mask>
                  <g mask="url(#mask0_16_179)">
                    <path d="M0 0H31V31H0V0Z" fill="white" />
                  </g>
                </svg>
                <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_16_186" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                    <path d="M15.5 2.58331V7.74998" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2083 14.2083L27.125 16.7916L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2083 14.2083Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.6334 6.36658L20.9799 10.0201M6.36663 24.6333L10.0201 20.9798M2.58334 15.5H7.75001M6.36663 6.36658L10.0201 10.0201" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </mask>
                  <g mask="url(#mask0_16_186)">
                    <path d="M0 0H31V31H0V0Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Project Background Card */}
            <div className="w-[669px] h-[165px] absolute left-[-2px] top-[96px]">
              <img
                className="w-[669px] h-[165px] absolute left-0 top-0 rounded-[14px]"
                style={{ backgroundBlendMode: "overlay, normal", backdropFilter: "blur(40px)" }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=1338"
                alt="Project background"
              />
            </div>
          </div>

          {/* First Project Image */}
          <div className="w-[583px] h-[341px] absolute left-[1047px] top-[2762px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ec053c1146e40fb887851f16713286cd6e59d2bc?width=1166"
              alt="Project screenshot"
              className="w-[583px] h-[341px] absolute left-0 top-0"
            />
            <img
              className="w-[568px] h-[354px] absolute left-[44px] top-[30px] rounded-[15px]"
              src="https://api.builder.io/api/v1/image/assets/TEMP/c6783cbbb0f91edca18f3801105fe8a38b1700a7?width=1136"
              alt="Project interface"
            />
          </div>

          {/* Second Project */}
          <div className="absolute left-[961px] top-[3337px]">
            <div className="w-[669px] h-[329px] relative">
              {/* Background Card */}
              <div className="w-[669px] h-[165px] absolute left-0 top-[96px]">
                <img
                  className="w-[669px] h-[165px] absolute left-0 top-0 rounded-[14px]"
                  style={{ backgroundBlendMode: "overlay, normal", backdropFilter: "blur(40px)" }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=1338"
                  alt="Project background"
                />
              </div>

              <div className="w-[590px] h-[108px] absolute left-[34px] top-[122px] text-[#CCD6F6] font-poppins text-[18px] font-medium leading-normal">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.
              </div>
              <div className="w-[287px] h-[51px] absolute left-[382px] top-[19px] text-[#CCD6F6] font-poppins text-[34px] font-bold leading-normal tracking-[0.68px]">
                Example Project
              </div>
              <div className="w-[143px] h-[24px] absolute left-[523px] top-0 text-[#9857D3] font-poppins text-[16px] font-bold leading-normal tracking-[0.32px]">
                Featured Project
              </div>

              {/* Project Icons */}
              <div className="flex gap-4 absolute right-[25px] top-[297px]">
                <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_16_205" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                    <path d="M15.5 2.58337V7.75004" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2084 14.2084L27.125 16.7917L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2084 14.2084Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.6334 6.3667L20.9799 10.0202M6.36667 24.6334L10.0201 20.98M2.58337 15.5001H7.75004M6.36667 6.3667L10.0201 10.0202" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </mask>
                  <g mask="url(#mask0_16_205)">
                    <path d="M0 0H31V31H0V0Z" fill="white" />
                  </g>
                </svg>
                <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_16_212" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                    <path d="M15.5 2.58337V7.75004" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2084 14.2084L27.125 16.7917L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2084 14.2084Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.6334 6.3667L20.9799 10.0202M6.36667 24.6334L10.0201 20.98M2.58337 15.5001H7.75004M6.36667 6.3667L10.0201 10.0202" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </mask>
                  <g mask="url(#mask0_16_212)">
                    <path d="M0 0H31V31H0V0Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Second Project Image */}
          <div className="w-[583px] h-[341px] absolute left-[460px] top-[3330px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4e17e9edaff9dfce8446b215280720b1dffad636?width=1166"
              alt="Project screenshot"
              className="w-[583px] h-[341px] absolute left-0 top-0"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="absolute left-[458px] top-[3905px]">
          <h2 className="w-[107px] h-[45px] text-white font-preahvihear text-[25px] font-normal leading-normal tracking-[0.5px]">
            Contact
          </h2>
          <div className="w-[703px] h-[108px] mt-[73px] text-white font-preahvihear text-[15px] font-normal leading-normal tracking-[0.3px]">
            I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
            through accessible design. or have a project in mind? Let&apos;s connect.
            <br /><br />
            ibrhaimmemon930@gmail.com
          </div>

          {/* Social Icons */}
          <div className="mt-[51px]">
            <SocialIcons />
          </div>
        </section>
      </div>
    </main>
  )
}
