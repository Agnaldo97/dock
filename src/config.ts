require("dotenv").config();
export const HOST: string = process.env.HOST || "localhost:3131";
export const PORT: number = <any>process.env.PORT || 3131;
export const ENV: string = process.env.ENV || "dev";
export const SALT_KEY: string =
  "fXb_QLf0*W)|&0@3n26kOx@V}cda4(HN!#]$spqvEb%wGH9=L:1dJL$PtxX+@!}p";
