import { useHackerNews } from "../hooks/useHackerNews";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { useFetchIds } from "../hooks/useFetchIds";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Stories from "../components/Stories";

export default function Show() {
  const [seeMore, setSeeMore] = useState(20);

  const {
    ids: showIds,
    isLoading: isShowIdsLoading,
    isError: isShowIdsError,
  } = useFetchIds("showIds", "showstories");

  const {
    queryData: show,
    isLoading: isShowLoading,
    isError: isShowError,
    isPreviousData,
  } = useHackerNews(showIds, seeMore, "show");

  const handleSeeMore = () => {
    setSeeMore((prevSeeMore) => prevSeeMore + 20);
  };
  if (isShowIdsLoading || isShowLoading) {
    return <Spinner />; // Loading state
  }

  if (isShowError || isShowIdsError) {
    return (
      <div className="text-red-500 text-center py-4">
        There was an error loading the data. Please try again later.
      </div>
    );
  }

  return (
    <section className="py-6 px-8">
      <SectionHeader
        title="Show"
        description="Discover the latest show stories in the Hacker News community."
      />
      <Stories story={show} />
      {show?.length > 0 ? (
        <Button
          onClick={handleSeeMore}
          isLoading={isShowLoading}
          isPreviousData={isPreviousData}
        />
      ) : null}
    </section>
  );
}
