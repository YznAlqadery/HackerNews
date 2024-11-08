import Story from "./Story";

export default function Stories({ story }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {story?.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}
