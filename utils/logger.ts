import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;
import { config } from "dotenv";

config();

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
});

const logConfiguration = {
  format: combine(label({ label: "Conect e2e" }), timestamp(), myFormat),
  transports: [
    new transports.Console({
      level: process.env.LOG_LEVEL?.toLowerCase() || "info",
    }),
  ],
};

export const logger = createLogger(logConfiguration);
