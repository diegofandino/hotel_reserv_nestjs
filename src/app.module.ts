import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { RolesController } from './roles/roles.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RolesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
