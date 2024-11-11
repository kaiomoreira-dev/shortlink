import { HashComparer } from '@/domain/user/application/cryptography/hash-comparer'
import { HashGenerator } from '@/domain/user/application/cryptography/hash-generator'
import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcryptjs'

@Injectable()
export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LEGHT = 8
  generate(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LEGHT)
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}
