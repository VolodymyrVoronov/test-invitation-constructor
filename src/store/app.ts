import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import generateRandomUUID from "../helpers/generateRandomUUID";

export interface IAppStore {}

export interface IAppActions {}

export const useAppStore = create(
  immer<IAppStore & IAppActions>((set, get) => ({}))
);
