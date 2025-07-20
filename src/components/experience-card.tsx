interface ExperienceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export default function ExperienceCard({ title, description, iconSrc, iconAlt }: ExperienceCardProps) {
  return (
    <div className="w-[570px] h-[193px] relative">
      <div className="w-[570px] h-[193px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634] shadow-[4px_7px_26px_0px_rgba(0,0,0,0.12)]"></div>
      <div className="w-[570px] h-[168px] absolute left-0 top-0">
        <div className="w-[570px] h-[168px] absolute left-0 top-0 rounded-[15px] bg-[#2C1250] shadow-[4px_7px_26px_0px_rgba(0,0,0,0.12)]"></div>
        <div className="w-[643px] h-[8px] absolute left-[-74px] top-[-4px] bg-[#4F228D]"></div>
      </div>
      <div className="w-[256px] h-[24px] absolute left-[197px] top-[46px] text-white font-poppins text-[26px] font-bold leading-[32.5px]">
        {title}
      </div>
      <div className="w-[232px] h-[48px] absolute left-[198px] top-[81px] text-white font-poppins text-[8px] font-medium leading-[10.5px]">
        {description}
      </div>
      <div className="w-[119px] h-[33px] absolute left-[195px] top-[112px]">
        <svg className="w-[119px] h-[33px] absolute left-0 top-0" width="119" height="33" viewBox="0 0 119 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99994 0.5H109C114.247 0.5 118.5 4.7533 118.5 10V23C118.5 28.2467 114.247 32.5 109 32.5H9.99994C4.75323 32.5 0.499939 28.2467 0.499939 23V10C0.499939 4.7533 4.75323 0.5 9.99994 0.5Z" fill="#2C1250" stroke="#693B93"/>
        </svg>
        <div className="w-[77px] h-[13px] absolute left-[19px] top-[10px] text-white text-center font-poppins text-[10px] font-medium leading-[15px]">
          LEARN MORE
        </div>
      </div>
      <img 
        src={iconSrc} 
        alt={iconAlt}
        className="w-[122px] h-[115px] absolute left-[50px] top-[36px]" 
      />
    </div>
  );
}
