/*
  Warnings:

  - You are about to alter the column `latitude` on the `denunias` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `longitude` on the `denunias` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `denunias` MODIFY `latitude` VARCHAR(191) NOT NULL,
    MODIFY `longitude` VARCHAR(191) NOT NULL;
