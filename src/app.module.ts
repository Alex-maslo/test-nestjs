import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { NeonDatabaseModule } from './neon-database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NeonDatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
