import StoryMeta from "./StoryMeta";
export default function Story({ story }) {
  if (!story.url) {
    return (
      <div
        key={story.id}
        className="bg-gray-900 text-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 sm:flex-1 sm:w-full sm:mr-4"
      >
        <a
          href={`https://news.ycombinator.com/item?id=${story.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan-100 hover:text-cyan-300 transition-colors duration-200 sm:text-lg"
        >
          {story.title}
        </a>
        <p className="mt-2 text-gray-400 text-sm">
          {story.text
            ? story.text.slice(0, 70) + "..."
            : "No description available."}
        </p>
        <StoryMeta author={story.by} comments={story.descendants} />
        <div className="mt-3 text-xs text-gray-500 md:text-lg">
          {new Date(story.time * 1000).toLocaleString()}
        </div>
      </div>
    );
  }
  return (
    <div
      key={story.id}
      className="bg-gray-900 text-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 sm:flex-1 sm:w-full sm:mr-4"
    >
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-gray-100 hover:text-cyan-300 transition-colors duration-200 sm:text-lg"
      >
        {story.title}
      </a>
      <p className="mt-2 text-gray-400 text-sm">
        {story.text
          ? story.text.slice(0, 70) + "..."
          : "No description available."}
      </p>
      <StoryMeta author={story.by} comments={story.descendants} />
      <div className="mt-3 text-xs text-gray-500 md:text-sm">
        {new Date(story.time * 1000).toLocaleString()}
      </div>
    </div>
  );
}
