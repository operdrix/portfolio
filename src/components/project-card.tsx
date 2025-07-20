interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export default function ProjectCard({ title, subtitle, description, imageSrc, imageAlt, isReversed = false }: ProjectCardProps) {
  const contentSide = isReversed ? "left-[382px]" : "left-0";
  const imageSide = isReversed ? "left-0" : "left-[1047px]";
  
  return (
    <div className="w-[1630px] h-[341px] relative">
      {/* Project Text Content */}
      <div className={`w-[622px] h-[333px] absolute ${contentSide} top-[26px]`}>
        <div className="w-[590px] h-[108px] absolute left-[32px] top-[126px] text-[#CCD6F6] font-poppins text-[18px] font-medium leading-normal">
          {description}
        </div>
        <div className="w-[287px] h-[51px] absolute left-0 top-[19px] text-[#CCD6F6] font-poppins text-[34px] font-bold leading-normal tracking-[0.68px]">
          {title}
        </div>
        <div className="w-[143px] h-[24px] absolute left-0 top-0 text-[#9857D3] font-poppins text-[16px] font-bold leading-normal tracking-[0.32px]">
          {subtitle}
        </div>
        <div className="flex gap-4 absolute left-[25px] top-[301px]">
          <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_16_179" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <path d="M15.5 2.58331V7.74998" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.2083 14.2083L27.125 16.7916L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2083 14.2083Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.6334 6.36658L20.9799 10.0201M6.36663 24.6333L10.0201 20.9798M2.58334 15.5H7.75001M6.36663 6.36658L10.0201 10.0201" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask0_16_179)">
              <path d="M0 0H31V31H0V0Z" fill="white"/>
            </g>
          </svg>
          <svg className="w-[31px] h-[31px]" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_16_186" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <path d="M15.5 2.58331V7.74998" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.2083 14.2083L27.125 16.7916L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2083 14.2083Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.6334 6.36658L20.9799 10.0201M6.36663 24.6333L10.0201 20.9798M2.58334 15.5H7.75001M6.36663 6.36658L10.0201 10.0201" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask0_16_186)">
              <path d="M0 0H31V31H0V0Z" fill="white"/>
            </g>
          </svg>
        </div>
      </div>
      
      {/* Background Card */}
      <div className={`w-[669px] h-[165px] absolute ${isReversed ? "left-[961px]" : "left-[460px]"} top-[96px]`}>
        <img 
          className="w-[669px] h-[165px] absolute left-0 top-0 rounded-[14px]" 
          style={{backgroundBlendMode: "overlay, normal", backdropFilter: "blur(40px)"}} 
          src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=1338" 
          alt="" 
        />
      </div>
      
      {/* Project Image */}
      <div className={`w-[583px] h-[341px] absolute ${imageSide} top-0`}>
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-[583px] h-[341px] absolute left-0 top-0" 
        />
        <img 
          className="w-[568px] h-[354px] absolute left-[44px] top-[30px] rounded-[15px]" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c6783cbbb0f91edca18f3801105fe8a38b1700a7?width=1136" 
          alt="" 
        />
      </div>
    </div>
  );
}
