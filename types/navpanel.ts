import type { ILink } from "./link";

export type INavPanel = Readonly<{
  links: ILink[];
  title?: string;
  className?: string;
}>

