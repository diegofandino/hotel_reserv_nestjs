import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RolesService {
    private prisma;
    stringsProject: String;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<{
        id: number;
        roleName: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    findAll(): Promise<{
        id: number;
        roleName: string;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        roleName: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<{
        id: number;
        roleName: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
    remove(id: number): Promise<{
        id: number;
        roleName: string;
        status: import(".prisma/client").$Enums.Status;
    }>;
}
