-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);
