require("dotenv").config();
export const HOST: string = process.env.HOST || "localhost:3131";
export const PORT: number = <any>process.env.PORT || 3131;
export const ENV: string = process.env.ENV || "dev";