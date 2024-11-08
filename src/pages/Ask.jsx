import { useHackerNews } from "../hooks/useHackerNews";
import { useState } from "react";

import Spinner from "../components/Spinner";
import { useFetchIds } from "../hooks/useFetchIds";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Stories from "../components/Stories";

export default function Ask() {
  const [seeMore, setSeeMore] = useState(20);

  const {
    ids: askIds,
    isLoading: isAskIdsLoading,
    isError: isAskIdsError,
  } = useFetchIds("askIds", "askstories");

  const {
    queryData: ask,
    isLoading: isAskLoading,
    isError: isAskError,
    isPreviousData,
  } = useHackerNews(askIds, seeMore, "ask");

  const handleSeeMore = () => {
    setSeeMore((prevSeeMore) => prevSeeMore + 20);
  };

  if (isAskIdsLoading || isAskLoading) {
    return <Spinner />; // Loading state
  }

  if (isAskError || isAskIdsError) {
    return (
      <div className="text-red-500 text-center py-4">
        There was an error loading the data. Please try again later.
      </div>
    );
  }

  return (
    <section className="py-6 px-8">
      <SectionHeader
        title="Ask"
        description="Discover the latest Ask stories in the Hacker News community."
      />
      <Stories story={ask} />

      {ask?.length > 0 ? (
        <Button
          onClick={handleSeeMore}
          isLoading={isAskLoading}
          isPreviousData={isPreviousData}
        />
      ) : null}
    </section>
  );
}
