-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "roleName" VARCHAR(30) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "uuid" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "prefixNumber" VARCHAR(5) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Rooms" (
    "uuid" TEXT NOT NULL,
    "privateBath" BOOLEAN NOT NULL,
    "kitchen" BOOLEAN NOT NULL,
    "statusRoom" VARCHAR(20) NOT NULL,
    "observations" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reservationId" TEXT
);

-- CreateTable
CREATE TABLE "Reservations" (
    "uuid" TEXT NOT NULL,
    "customer" VARCHAR(50) NOT NULL,
    "prefixPhoneCustomer" VARCHAR(5) NOT NULL,
    "phoneCustomer" VARCHAR(20) NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userWhoCreate" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_id_key" ON "Roles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_uuid_key" ON "Users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_roleId_key" ON "Users"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_uuid_key" ON "Rooms"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_reservationId_key" ON "Rooms"("reservationId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservations_uuid_key" ON "Reservations"("uuid");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rooms" ADD CONSTRAINT "Rooms_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservations"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_userWhoCreate_fkey" FOREIGN KEY ("userWhoCreate") REFERENCES "Users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
