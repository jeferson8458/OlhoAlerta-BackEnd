/*
  Warnings:

  - You are about to drop the `denunias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `denunias`;

-- CreateTable
CREATE TABLE `Denuncias` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
