import dotenv from "dotenv";
dotenv.config();

interface Env {
  NODE_ENV?: string;
  PORT?: number;
  JWT_SECRET?: string;
  DB_NAME?: string;
  DB_HOST?: string;
  DB_USER?: string;
  DB_PORT?: number;
  DB_PASS?: string;
}

type Config = {
  [T in keyof Env]-?: T extends "NODE_ENV"
    ? "production" | "depvelopment"
    : Env[T];
};

const getConfig = (): Env => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    JWT_SECRET: process.env.JWT_SECRET,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    DB_PASS: process.env.DB_PASS,
  };
};

//checking the missing key value properties of the config file
const getSanitizedConfig = (config: Env) : Config => {
    for(const [key, value] of Object.entries(config)){
        if(value===undefined){
            throw new Error(`Missing key ${key} in config file`)
        }
    }
    return config as Config;
}

const sanitizedConfig = getConfig();

export const config = getSanitizedConfig(sanitizedConfig);