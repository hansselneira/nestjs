import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// This service will be available in all the app
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
