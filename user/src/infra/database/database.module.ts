import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository'
import { CacheModule } from '../cache/cache.module'
import { UsersRepository } from '@/domain/user/application/repositories/users-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [PrismaService, UsersRepository],
})
export class DatabaseModule {}
