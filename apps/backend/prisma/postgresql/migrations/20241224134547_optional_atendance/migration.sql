/*
  Warnings:

  - Made the column `email` on table `Guest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "expectedAudience" DROP NOT NULL,
ALTER COLUMN "expectedAudience" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Guest" ALTER COLUMN "email" SET NOT NULL;
