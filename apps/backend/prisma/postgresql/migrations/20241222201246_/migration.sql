/*
  Warnings:

  - Made the column `offerValue` on table `EventGuest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `offerQuantity` on table `EventGuest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "EventGuest" ALTER COLUMN "offerValue" SET NOT NULL,
ALTER COLUMN "offerQuantity" SET NOT NULL;
