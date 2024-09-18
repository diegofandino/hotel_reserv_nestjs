import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { stringsProject } from '../utils/text-project/stringsProject';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  stringsProject: String;
  constructor(private prisma: PrismaService){}

  async create(createRoleDto: CreateRoleDto) {
    const roleExist = await this.prisma.roles.findFirst({where: {roleName: createRoleDto.roleName}});
    if (roleExist) {
      throw new ConflictException();
    }
    return this.prisma.roles.create({data: createRoleDto})
  }

  async findAll() {
    const roles = await this.prisma.roles.findMany({
      orderBy: {
        id: 'asc'
      }
    });

    if(!roles) {
      throw new NotFoundException()
    }

    return roles;
  }

  async findOne(id: number) {
    const rol = await this.prisma.roles.findUnique({where: {id}});
    if(!rol) throw new NotFoundException()
    return rol;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      const rolUpdated = await this.prisma.roles.update({
        where: { id },
        data: { ...updateRoleDto },
      });
      return rolUpdated;
    } catch (error) {
      throw new NotFoundException();
    }

  }

  async remove(id: number) {
    try {
      const rolUpdated = await this.prisma.roles.update({
        where: { id },
        data: { status: 'inactive' },
      });
      return rolUpdated;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
