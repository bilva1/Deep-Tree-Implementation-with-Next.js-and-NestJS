// src/tree/tree.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreeEntity } from './tree.entity';

@Injectable()
export class TreeService {
  constructor(
    @InjectRepository(TreeEntity)
    private treeRepository: Repository<TreeEntity>,
  ) {}

  async createTree(depth: number): Promise<TreeEntity> {
    const root = new TreeEntity();
    root.name = 'root';
    await this.treeRepository.save(root);
    await this.addChildren(root, depth);
    return root;
  }

  private async addChildren(node: TreeEntity, depth: number): Promise<void> {
    if (depth <= 0) return;
    for (let i = 0; i < 2; i++) {
      const child = new TreeEntity();
      child.name = `child_${depth}_${i}`;
      child.parent = node;
      await this.treeRepository.save(child);
      await this.addChildren(child, depth - 1);
    }
  }

  async getTree(): Promise<TreeEntity[]> {
    return this.treeRepository.find({ relations: ['children'] });
  }
}
