// src/tree/tree.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TreeService } from './tree.service';
import { TreeEntity } from './tree.entity';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Post()
  async createTree(@Body('depth') depth: number): Promise<TreeEntity> {
    return this.treeService.createTree(depth);
  }

  @Get()
  async getTree(): Promise<TreeEntity[]> {
    return this.treeService.getTree();
  }
}
