import { useState } from "react";
import { useFetchIds } from "../hooks/useFetchIds";
import { useHackerNews } from "../hooks/useHackerNews";
import Spinner from "../components/Spinner";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Stories from "../components/Stories";

export default function Jobs() {
  const [seeMore, setSeeMore] = useState(20);

  const {
    ids: jobIds,
    isLoading: isJobIdsLoading,
    isError: isJobIdsError,
  } = useFetchIds("jobIds", "jobstories");

  const {
    queryData: jobs,
    isLoading: isJobLoading,
    isError: isJobError,
    isPreviousData,
  } = useHackerNews(jobIds, seeMore, "jobs");

  const handleSeeMore = () => {
    setSeeMore((prevSeeMore) => prevSeeMore + 20);
  };

  if (isJobIdsLoading || isJobLoading) {
    return <Spinner />;
  }

  if (isJobIdsError || isJobError) {
    return (
      <div className="text-red-500 text-center py-4">
        There was an error loading the data. Please try again later.
      </div>
    );
  }

  return (
    <section className="py-6 px-8">
      <SectionHeader
        title="Jobs"
        description="Discover the latest job listings in the Hacker News community."
      />

      <Stories story={jobs} />

      {jobs?.length > 0 && (
        <Button
          onClick={handleSeeMore}
          isLoading={isJobIdsLoading || isJobLoading}
          isPreviousData={isPreviousData}
        />
      )}
    </section>
  );
}
