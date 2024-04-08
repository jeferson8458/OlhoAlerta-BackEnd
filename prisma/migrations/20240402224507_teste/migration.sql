/*
  Warnings:

  - You are about to alter the column `latitude` on the `denunias` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `denunias` MODIFY `latitude` DOUBLE NOT NULL;
