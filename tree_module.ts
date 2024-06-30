// src/tree/tree.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeService } from './tree.service';
import { TreeController } from './tree.controller';
import { TreeEntity } from './tree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TreeEntity])],
  providers: [TreeService],
  controllers: [TreeController],
})
export class TreeModule {}
