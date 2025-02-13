/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Section` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'PRIVATE';

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'PRIVATE';

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'PRIVATE';

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL DEFAULT 'PRIVATE';

-- CreateIndex
CREATE UNIQUE INDEX "Section_slug_key" ON "Section"("slug");
