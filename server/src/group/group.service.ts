import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  private groups = [];

  create(createGroupDto: CreateGroupDto) {
    const group = { id: this.groups.length + 1, ...createGroupDto };
    this.groups.push(group);
    return group;
  }

  findAll() {
    return this.groups;
  }
}
