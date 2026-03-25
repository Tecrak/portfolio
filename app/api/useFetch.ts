import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetchDB() {
  const { data, error, isLoading, mutate } = useSWR("/api", fetcher);

  return {
    dbInfo: data || [],
    isLoading,
    isError: error,
    mutate, // 🔥 головне
  };
}
