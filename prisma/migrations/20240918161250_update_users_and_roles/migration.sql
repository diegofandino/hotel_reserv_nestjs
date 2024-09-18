/*
  Warnings:

  - The `status` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "Roles" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "password" VARCHAR(50) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'active';
