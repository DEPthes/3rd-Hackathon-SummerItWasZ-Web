import { atom } from "recoil";

export const pageState = atom<number>({
  key: "pageState",
  default: 0,
});

export type Result = {
  nickname: string;
  title: string;
  date: string;
  checked: boolean;
  content: string;
  changegpt: string;
};

export const resultState = atom<Result>({
  key: "resultState",
  default: {
    nickname: "",
    title: "",
    date: "",
    checked: false,
    content: "",
    changegpt: "",
  },
});
