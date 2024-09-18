import { CreateRoleDto } from './create-role.dto';
declare enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
declare const UpdateRoleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRoleDto>>;
export declare class UpdateRoleDto extends UpdateRoleDto_base {
    status: Status;
}
export {};
