import { useQuery } from "react-query";

export const useFetchIds = (queryKey, endpoint) => {
  const {
    data: ids,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${endpoint}.json`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  return { ids, isLoading, isError };
};
