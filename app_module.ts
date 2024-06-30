// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeModule } from './tree/tree.module';
import { TreeEntity } from './tree/tree.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tree_db',
      entities: [TreeEntity],
      synchronize: true,
    }),
    TreeModule,
  ],
})
export class AppModule {}
