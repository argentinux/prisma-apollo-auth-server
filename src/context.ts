import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { createHashService, HashService } from './lib/hash'

const prisma = new PrismaClient()
const hs = createHashService()

export interface AppContext {
  prisma: PrismaClient
  hs: HashService
  req?: Request
  res?: Response
}

export const createContext = (req?: Request, res?: Response): AppContext => ({
  prisma,
  hs,
  req,
  res,
})
