import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFilterFetchDB(id: string) {
  const { data, error, mutate } = useSWR(
    id ? `/page/examples/postgresql/api?id=${id}` : null, // якщо id немає, fetch не буде
    fetcher,
  );

  return {
    data: data ? data[0] : null,
    loading: !error && !data,
    isError: error,
    mutate, // можна викликати mutate() після PUT/DELETE
  };
}
