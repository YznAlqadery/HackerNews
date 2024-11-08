import { BiUser, BiComment } from "react-icons/bi";

function StoryMeta({ author, comments }) {
  return (
    <div className="mt-3 flex justify-between items-center flex-wrap gap-2 text-xs sm:text-sm md:justify-start md:gap-6">
      <span className="text-gray-500 flex items-center gap-2">
        <BiUser />
        <span className="text-gray-300 md:truncate">{author ?? "Unknown"}</span>
      </span>
      <span className="text-teal-400 flex items-center gap-1">
        <BiComment />
        {comments ?? 0} comments
      </span>
    </div>
  );
}

export default StoryMeta;
