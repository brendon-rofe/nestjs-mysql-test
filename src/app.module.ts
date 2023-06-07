import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "db",
      "port": 3306,
      "username": "root",
      "password": "example",
      "database": "nestjs",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    PostsModule
  ],
})
export class AppModule {}
