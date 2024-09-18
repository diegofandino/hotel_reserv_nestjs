import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsEnum, IsString } from 'class-validator';

enum Status {
	ACTIVE = 'active',
	INACTIVE = 'inactive'
}
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
	@IsString()
	@IsEnum(Status)
	status: Status 
}
