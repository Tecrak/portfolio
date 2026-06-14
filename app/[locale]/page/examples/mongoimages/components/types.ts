import { Session } from "next-auth";
import { QueryClient } from "@tanstack/react-query";
import { Post } from "../config/data";

export interface ShareCompsVars {
  current: Post | undefined;
  session: Session | null;
  newCommentText: string;
  setNewCommentText: React.Dispatch<React.SetStateAction<string>>;
  queryClient: QueryClient;
  handleAddComment: () => Promise<void>;
}
