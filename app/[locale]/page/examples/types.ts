import { Post } from "./mongoimages/config/data";

export interface ShareVarsType {
  mData: Post[];
  imgOpened: string;
  setImgOpened: (v: string) => void;
  likes: Record<string, number>;
  handleLike: (id: string, increment: number) => void;
  likedIds: Record<string, boolean>;
}
