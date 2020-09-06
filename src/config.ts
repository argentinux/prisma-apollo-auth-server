import 'reflect-metadata'
import dotenv from 'dotenv'
import log, { LogLevelDesc } from 'loglevel'
dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const __LOG_LEVEL__: LogLevelDesc = __PRODUCTION__ ? 'SILENT' : 'DEBUG'
export const APP_PORT = process.env.PORT ? Number(process.env.PORT) : 3000

log.setLevel(__LOG_LEVEL__)
