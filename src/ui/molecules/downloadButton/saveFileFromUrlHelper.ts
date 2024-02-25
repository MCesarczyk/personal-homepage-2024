"use client";

import JSZipUtils from "jszip-utils";
import saveAs from "save-as";

export const saveFileFromUrl = async (url: string, name: string) => {
  const buffer = await JSZipUtils.getBinaryContent(url);
  return saveAs(new Blob([buffer]), name);
};
