import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Env } from '@/infra/env/env'

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: T) {
    return this.configService.get<T>(key, { infer: true })
  }

  // metodo para criar uma instancia do env service
  static getInstance(): EnvService {
    return new EnvService(new ConfigService<Env, true>())
  }
}
