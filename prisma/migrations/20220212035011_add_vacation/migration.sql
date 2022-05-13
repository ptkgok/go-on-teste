-- AlterTable
ALTER TABLE "Goker" ADD COLUMN     "vacationId" INTEGER;

-- CreateTable
CREATE TABLE "Vacation" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goker" ADD CONSTRAINT "Goker_vacationId_fkey" FOREIGN KEY ("vacationId") REFERENCES "Vacation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
