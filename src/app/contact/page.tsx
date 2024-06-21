import BookingButton from "@/components/Navigation/BookingButton";

export default function ContactPage() {
  return (
    <section className="w-full h-auto max-w-[1250px] m-auto">
      <h2 className="mt-32 text-center text-xl mb-10 mobile:p-10 mobile:mt-20 mobile:mb-5">
        To schedule your car for a service, simply send us an email or give us a
        call!
      </h2>
      <div className="flex items-center justify-evenly mb-12 tablet:flex-col">
        <div className="border-4 rounded-lg border-primary w-2/3 h-auto tablet:mb-10 tablet:w-1/2 mobile:w-2/3">
          <form className="p-4">
            <div className="flex items-center justify-between gap-5 tablet:flex-col tablet:items-start tablet:gap-0">
              <div className="w-1/2 tablet:w-full">
                <label className="text-xl" htmlFor="name">
                  First name:
                </label>
                <br />
                <input
                  className="w-full h-8 bg-primary mb-5 tablet:w-full"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="w-1/2 tablet:w-full">
                <label className="text-xl" htmlFor="last-name">
                  Last name:
                </label>
                <br />
                <input
                  className="w-full h-8 bg-primary mb-5 tablet:w-full"
                  type="text"
                  id="sname"
                  name="sname"
                />
              </div>
            </div>
            <label className="text-xl" htmlFor="number">
              Contact number:
            </label>
            <br />
            <input
              className="w-full h-8 bg-primary mb-5"
              type="number"
              id="number"
              name="number"
            />
            <br />
            <label className="text-xl" htmlFor="email">
              Email address:
            </label>
            <br />
            <input
              className="w-full h-8 bg-primary mb-5"
              type="email"
              id="email"
              name="email"
            />
            <br />
            <label className="text-xl" htmlFor="email">
              message:
            </label>
            <br />
            <textarea
              className="w-full h-20 bg-primary mb-5"
              id="text"
              name="text"
            />
          </form>
          <div className="w-full flex items-center justify-center mb-5">
            <BookingButton className="mr-5 tablet:p-5">
              Send message
            </BookingButton>
          </div>
        </div>

        <div className="px-10 w-full mobile:px-5 tablet:max-w-[600px] tablet:m-auto">
          <p className="text-center text-2xl mb-5">Our detail:</p>
          <div className="flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
            <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
              Contact number:
            </label>
            <p className="text-xl w-1/2 mobile:text-lg">066 206 2317</p>
          </div>
          <div className="flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
            <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
              Email address:
            </label>
            <p className="text-xl w-1/2 break-words mobile:text-lg">
              rnr2service@gmail.com
            </p>
          </div>
          <div className="flex items-start justify-between mb-2 w-full gap-10 mobile:flex-col mobile:items-center mobile:mb-5 mobile:text-center mobile:gap-0">
            <label className="text-xl w-1/2 text-right mobile:text-lg mobile:text-center">
              address:
            </label>
            <p className="text-xl w-1/2 mobile:text-lg">
              15 Island street, Deneysville, 1932
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full h-[550px] text-xl p-5 mb-10 tablet:h-[400px]">
        Google maps
      </div>
    </section>
  );
}
