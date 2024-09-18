"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesService = class RolesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRoleDto) {
        const roleExist = await this.prisma.roles.findFirst({ where: { roleName: createRoleDto.roleName } });
        if (roleExist) {
            throw new common_1.ConflictException();
        }
        return this.prisma.roles.create({ data: createRoleDto });
    }
    async findAll() {
        const roles = await this.prisma.roles.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!roles) {
            throw new common_1.NotFoundException();
        }
        return roles;
    }
    async findOne(id) {
        const rol = await this.prisma.roles.findUnique({ where: { id } });
        if (!rol)
            throw new common_1.NotFoundException();
        return rol;
    }
    async update(id, updateRoleDto) {
        try {
            const rolUpdated = await this.prisma.roles.update({
                where: { id },
                data: { ...updateRoleDto },
            });
            return rolUpdated;
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async remove(id) {
        try {
            const rolUpdated = await this.prisma.roles.update({
                where: { id },
                data: { status: 'inactive' },
            });
            return rolUpdated;
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map