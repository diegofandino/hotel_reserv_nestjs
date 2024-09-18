import { IsString, MaxLength,  } from "class-validator";
import { stringsProject } from "src/utils/text-project/stringsProject";
export class CreateRoleDto {
	@IsString()
	@MaxLength(30, {
		message: stringsProject.MAX_LENGT_ROLENAME
	})
	roleName: string
}
