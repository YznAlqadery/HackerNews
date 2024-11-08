import { BiDownArrowAlt } from "react-icons/bi";

export default function Button({ onClick, isLoading, isPreviousData }) {
  return (
    <button
      className=" text-sm mt-4 bg-teal-500 text-gray-900 font-medium px-5 py-2 rounded-lg hover:bg-teal-400 disabled:bg-teal-300 disabled:cursor-not-allowed  transition-all duration-300 flex items-center justify-center gap-2"
      onClick={onClick}
      disabled={isLoading || isPreviousData} // Disable button while loading or if previous data is loading
    >
      {isLoading || isPreviousData ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          See More
          <BiDownArrowAlt className="text-lg" />
        </>
      )}
    </button>
  );
}
