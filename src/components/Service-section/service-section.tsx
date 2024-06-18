import ServiceItems from "./ServiceItems";

export default function ServiceSection() {
  return (
    <section className="mb-20 mx-48 laptop:mx-16">
      <h1 className="text-center text-4xl mb-12 ">Services we provide</h1>
      <div className="grid grid-cols-3 gap-36 justify-items-center laptop:gap-10 tablet:grid-cols-1">
        <ServiceItems />
      </div>
    </section>
  );
}
