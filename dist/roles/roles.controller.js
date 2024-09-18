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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const swagger_1 = require("@nestjs/swagger");
const stringsProject_1 = require("../utils/text-project/stringsProject");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async create(createRoleDto, res) {
        try {
            createRoleDto.roleName = createRoleDto.roleName.toLowerCase();
            const role = await this.rolesService.create(createRoleDto);
            if (role) {
                res.json({
                    status: 200,
                    message: stringsProject_1.stringsProject.ROLE_CREATED,
                    data: role
                });
            }
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                return res.status(common_1.HttpStatus.CONFLICT).json({
                    message: stringsProject_1.stringsProject.EXIST_ITEM_DATABASE,
                });
            }
        }
    }
    async findAll(res) {
        try {
            const roles = await this.rolesService.findAll();
            return res.status(common_1.HttpStatus.OK).json(roles);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: stringsProject_1.stringsProject.ROLE_NOT_FOUND
                });
            }
        }
    }
    async findOne(id, res) {
        try {
            const role = await this.rolesService.findOne(+id);
            return res.status(common_1.HttpStatus.OK).json(role);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: stringsProject_1.stringsProject.ROLE_ONE_NOT_FOUND
                });
            }
        }
    }
    async update(id, updateRoleDto, res) {
        try {
            const role = await this.rolesService.update(+id, updateRoleDto);
            return res.status(common_1.HttpStatus.OK).json(role);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: stringsProject_1.stringsProject.ROLE_ONE_NOT_FOUND
                });
            }
        }
    }
    async remove(id, res) {
        try {
            const role = await this.rolesService.remove(+id);
            return res.status(common_1.HttpStatus.OK).json(role);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: stringsProject_1.stringsProject.ROLE_ONE_NOT_FOUND
                });
            }
        }
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "remove", null);
exports.RolesController = RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    (0, swagger_1.ApiTags)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map