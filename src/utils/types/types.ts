import { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";

export interface ICollection {
  name: string;
  organizer: string;
  date: string;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<number>>;
  id: number;
}
export interface IModal {
  value: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export interface IBanner {
  header: string;
  address: string;
  isDashboard: boolean;
}

export interface ILink {
  value: string;
  link: string;
}

export interface IProps {
  params: {
    page: string;
  };
}

export type ConnectExploreType = "connect" | "explore";

export interface IEventDetails {
  title: string;
  organizer: string;
  symbol: string;
  description: string;
  date: string;
  venue: string;
  category: string;
  link: string;
  flier: null | File;
  flierImg: string | null;
  prezent: null | File;
  prezentImg: string | null;
}

export interface ISetEventDetails {
  setEventDetails: Dispatch<SetStateAction<IEventDetails>>;
  title: string;
  organizer: string;
  symbol: string;
  description: string;
  date: string;
  venue: string;
  category: string;
  link: string;
  flier: null | File;
  flierImg: string | null;
}
export interface ISetUploadDetails {
  setEventDetails: Dispatch<SetStateAction<IEventDetails>>;
  prezent: null | File;
  prezentImg: string | null;
}
export interface IPreview {
  title: string;
  organizer: string;
  date: string;
  venue: string;
  category: string;
  link: string;
  flierImg: string | null;
  prezentImg: string | null;
}

interface SvgIconConstituentValues {
  strokeColor?: string;
  strokeWidth?: string;
  strokeWidth2?: string;
  strokeWidth3?: string;
  strokeFill?: string;
  fillColor?: string;
  fillColor2?: string;
  fillColor3?: string;
  fillColor4?: string;
  fillColor5?: string;
  fillColor6?: string;
  fillColor7?: string;
  imageWidth?: string;
  imageHeight?: string;
  width?: string;
  height?: string;
  rotateCenter?: number;
  className?: string;
  className2?: string;
  className3?: string;
  className4?: string;
  className5?: string;
}

export interface IHeaderIcon {
  icon: JsxElement;
  link: string;
}

export interface ICollectionItem {
  name: string;
  organizer: string;
  date: string;
}

export interface ISocials {
  isFooter: boolean;
}

export interface IConnect {
  isMintPage: boolean;
}

export interface IError extends Error {
  message: string;
}

export interface ICreated {
  0: boolean;
  1: string;
}

export interface ICreatedEvent {
  poap: string;
  creator: string;
  eventName: string;
  eventSymbol: string;
  eventUri: string;
  organizer: string;
  date: string;
  venue: string;
  category: string;
  link: string;
}

export interface IMintedEvent {
  poap: string;
  collector: string;
  eventUri: string;
}

export interface IFavoritesEvent {
  poap: string;
  collector: string;
  eventUri: string;
}
