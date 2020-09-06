import * as argon2 from 'argon2'

export interface HashService {
  hash: (pw: string) => Promise<string | null>
  check: (hashed_pw: string, plain_pw: string) => Promise<boolean>
}

export const createHashService = (): HashService => ({
  hash: async (pw: string): Promise<string | null> => {
    try {
      const hash = await argon2.hash(pw)
      return hash
    } catch {
      // do some with err
      return null
    }
  },
  check: async (hashed_pw: string, plain_pw: string): Promise<boolean> => {
    try {
      if (await argon2.verify(hashed_pw, plain_pw)) {
        return true
      }
      return false
    } catch {
      // work with err
      return false
    }
  },
})
