import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}