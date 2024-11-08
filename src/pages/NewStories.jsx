import { useState } from "react";
import Spinner from "../components/Spinner";
import { useHackerNews } from "../hooks/useHackerNews";
import { useFetchIds } from "../hooks/useFetchIds";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Stories from "../components/Stories";

export default function NewStories() {
  const [seeMore, setSeeMore] = useState(20);

  // Query for fetching new story ids
  const {
    ids: newsIds,
    isLoading: isNewsIdsLoading,
    isError: isNewsIdsError,
  } = useFetchIds("newsIds", "newstories");

  // Query for fetching story details based on the ids
  const {
    queryData: news,
    isLoading: isNewsLoading,
    isError: isNewsError,
    isPreviousData,
  } = useHackerNews(newsIds, seeMore, "news");

  const handleSeeMore = () => {
    // Optimistically update the `seeMore` state for fetching more stories
    setSeeMore((prevSeeMore) => prevSeeMore + 20);
  };

  if (isNewsIdsLoading || isNewsLoading) {
    return <Spinner />; // Loading state
  }

  if (isNewsIdsError || isNewsError) {
    return (
      <div className="text-red-500 text-center py-4">
        There was an error loading the data. Please try again later.
      </div>
    );
  }

  return (
    <section className="py-6 px-8">
      <SectionHeader
        title="New Stories"
        description="Discover the latest stories in the Hacker News community."
      />
      <Stories story={news} />
      {news?.length > 0 ? (
        <Button
          onClick={handleSeeMore}
          isLoading={isNewsIdsLoading || isNewsLoading}
          isPreviousData={isPreviousData}
        />
      ) : null}
    </section>
  );
}
