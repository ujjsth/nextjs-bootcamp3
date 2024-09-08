-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `phone` INTEGER NOT NULL,
    `isMarried` BOOLEAN NOT NULL DEFAULT false,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
