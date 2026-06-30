import { createContext } from "react";
import { ShareVars } from "../config/games";

export const ShopContext = createContext<ShareVars | null>(null);
