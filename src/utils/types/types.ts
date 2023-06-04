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
    mint: string;
  };
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
