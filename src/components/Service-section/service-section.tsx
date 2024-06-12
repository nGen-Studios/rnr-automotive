import ColumnItem from "./ColumnItem";

export default function ServiceSection() {
  return (
    <section className="mb-20 mx-48">
      <h1 className="text-center text-4xl mb-12">Services we provide</h1>
      <div className="grid grid-cols-3 gap-36 justify-items-center">
        <ColumnItem />
      </div>
    </section>
  );
}
