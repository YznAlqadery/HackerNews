import { useQuery } from "react-query";

export const useHackerNews = (newsIds, seeMore, queryKey) => {
  // Using react-query to fetch data
  const {
    data: queryData,
    isLoading,
    isError,
    isPreviousData,
  } = useQuery({
    queryKey: [queryKey, newsIds, seeMore], // Depend on newsIds and `seeMore`

    queryFn: async () => {
      if (!newsIds) return []; // Return empty array if newsIds is not available
      const stories = await Promise.all(
        newsIds.slice(0, seeMore).map(async (id) => {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          const data = await response.json();
          return data; // Return the full story data
        })
      );
      return stories;
    },
    keepPreviousData: true, // Prevents reloading the whole list when `seeMore` changes
  });

  // Return the relevant values and states for use in other components
  return {
    queryData,
    isLoading,
    isError,
    isPreviousData,
  };
};
