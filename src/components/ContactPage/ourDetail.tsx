export default function OurDetail() {
  return (
    <div className="px-10 w-full mobile:px-5 tablet:max-w-[600px] tablet:m-auto">
      <p className="text-center text-2xl mb-5">Our detail:</p>
      <div className=" flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
        <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
          Contact number:
        </label>
        <p className="font-sans text-xl w-1/2 mobile:text-lg">066 206 2317</p>
      </div>
      <div className=" flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
        <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
          Email address:
        </label>
        <p className="font-sans text-xl w-1/2 break-words mobile:text-lg">
          services@rnrautomotive.co.za
        </p>
      </div>
      <div className="flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
        <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
          address:
        </label>
        <p className="font-sans text-xl w-1/2 mobile:text-lg">
          17 Island St, Deneysville, 1932
        </p>
      </div>
    </div>
  );
}
