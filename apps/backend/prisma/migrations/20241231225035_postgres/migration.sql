-- CreateEnum
CREATE TYPE "StatusPresence" AS ENUM ('CONFIRMED', 'REFUSED', 'PENDING');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "alias" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "local" TEXT NOT NULL,
    "address" TEXT,
    "monetize" BOOLEAN NOT NULL DEFAULT false,
    "keyPix" TEXT,
    "image" TEXT NOT NULL,
    "imageBackground" TEXT NOT NULL,
    "expectedAudience" INTEGER DEFAULT 0,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "value" DOUBLE PRECISION,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOffer" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "offerId" INTEGER NOT NULL,

    CONSTRAINT "EventOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventGuest" (
    "id" SERIAL NOT NULL,
    "status" "StatusPresence" NOT NULL DEFAULT 'PENDING',
    "companions" INTEGER NOT NULL DEFAULT 0,
    "offerValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "offerQuantity" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "eventId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,
    "eventOfferId" INTEGER,

    CONSTRAINT "EventGuest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_alias_key" ON "Event"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EventOffer_eventId_offerId_key" ON "EventOffer"("eventId", "offerId");

-- CreateIndex
CREATE UNIQUE INDEX "EventGuest_eventId_guestId_key" ON "EventGuest"("eventId", "guestId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOffer" ADD CONSTRAINT "EventOffer_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOffer" ADD CONSTRAINT "EventOffer_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventGuest" ADD CONSTRAINT "EventGuest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventGuest" ADD CONSTRAINT "EventGuest_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventGuest" ADD CONSTRAINT "EventGuest_eventOfferId_fkey" FOREIGN KEY ("eventOfferId") REFERENCES "EventOffer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
