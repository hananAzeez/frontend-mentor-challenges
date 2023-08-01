-- AlterTable
ALTER TABLE `comment` MODIFY `text` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NULL,

    UNIQUE INDEX `User_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
