/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Run` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Run_id_key" ON "Run"("id");
