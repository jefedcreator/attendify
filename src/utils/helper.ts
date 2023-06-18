// utils/getURL.ts
import { toast } from "react-toastify";
import { IMetaData } from "./types/types";
import axios from "axios";

const IS_SERVER = typeof window === "undefined";
export default function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_SITE_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}

const fallbackCopyToClipBoard = (text: string): Promise<boolean> => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    return Promise.resolve(successful);
  } catch (err) {
    return Promise.resolve(false);
  } finally {
    document.body.removeChild(textArea);
  }
};

const copyToClipBoard = (text: string): Promise<boolean> => {
  if (!navigator.clipboard) {
    return fallbackCopyToClipBoard(text);
  }
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

export const copyToClipBoardHandler = async (copy: string) => {
  const success = await copyToClipBoard(copy);
  if (success) {
    toast.success("Copied to clipboard");
  } else {
    toast.error("Not Copied");
  }
};

export const fetchNftMeta = async (ipfsUrl: string): Promise<IMetaData | null> => {
  try {
    if (!ipfsUrl) return null;
    const response = await axios.get(ipfsUrl);
    const meta: IMetaData = response.data;
    return meta;
  } catch (error) {
    console.log(error);
    return null;
  }
};