import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ConflictException, HttpStatus, HttpException, NotFoundException } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { stringsProject } from '../utils/text-project/stringsProject';

@Controller('roles')
@ApiTags('roles')
export class RolesController {
  stringsProject: String;
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto, @Res() res: Response){

    try {
      createRoleDto.roleName = createRoleDto.roleName.toLowerCase();
      const role = await this.rolesService.create(createRoleDto);
  
      if(role){
        res.json({
          status: 200,
          message: stringsProject.ROLE_CREATED,
          data: role
        })
      }
    } catch (error) {
      if (error instanceof ConflictException) {
        return res.status(HttpStatus.CONFLICT).json({
          message: stringsProject.EXIST_ITEM_DATABASE,
        });
      }
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const roles = await this.rolesService.findAll();
      return res.status(HttpStatus.OK).json(roles);
    } catch (error) {
      if(error instanceof NotFoundException){
        return res.status(HttpStatus.NOT_FOUND).json({
          message: stringsProject.ROLE_NOT_FOUND
        });
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const role = await this.rolesService.findOne(+id);
      return res.status(HttpStatus.OK).json(role);
    } catch (error) {
      if(error instanceof NotFoundException){
        return res.status(HttpStatus.NOT_FOUND).json({
          message: stringsProject.ROLE_ONE_NOT_FOUND
        });
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto, @Res() res: Response) {
    try {
      const role = await this.rolesService.update(+id, updateRoleDto);
      return res.status(HttpStatus.OK).json(role);
    } catch (error) {
      if(error instanceof NotFoundException){
        return res.status(HttpStatus.NOT_FOUND).json({
          message: stringsProject.ROLE_ONE_NOT_FOUND
        });
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const role = await this.rolesService.remove(+id);
      return res.status(HttpStatus.OK).json(role);
    } catch (error) {
      if(error instanceof NotFoundException){
        return res.status(HttpStatus.NOT_FOUND).json({
          message: stringsProject.ROLE_ONE_NOT_FOUND
        });
      }
    }
  }
}
