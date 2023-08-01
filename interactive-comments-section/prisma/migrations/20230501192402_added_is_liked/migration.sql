/*
  Warnings:

  - Added the required column `isLiked` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `isLiked` BOOLEAN NOT NULL;
