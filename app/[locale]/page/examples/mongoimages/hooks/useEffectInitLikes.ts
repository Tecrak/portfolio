import { useEffect } from "react";
import { Post } from "../config/data";

export function useEffectInitLikes(
  isLoading: boolean,
  people: Post[],
  session: any,
  setLikes: any,
  setLikedIds: any,
) {
  useEffect(() => {
    if (!isLoading && people.length > 0) {
      const initialLikes: Record<string, number> = {};
      const initialLiked: Record<string, boolean> = {};
      const userEmail = session?.user?.email ?? "";

      people.forEach((p: Post) => {
        initialLikes[p._id] = p.likes?.length ?? 0;
        initialLiked[p._id] = p.likes?.includes(userEmail) ?? false;
      });
      setLikes(initialLikes);
      setLikedIds(initialLiked);
    }
  }, [isLoading, session, people]);
}
