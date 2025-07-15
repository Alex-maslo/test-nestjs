import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDatabaseModule } from './database-config/mongo-database.module';
import { UsersModuleMongo } from './users-mongo/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoDatabaseModule,
    UsersModuleMongo,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
