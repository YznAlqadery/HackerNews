export default function SectionHeader({ title, description }) {
  return (
    <>
      <h1 className="text-2xl text-gray-100 font-bold mb-4">{title}</h1>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
    </>
  );
}
