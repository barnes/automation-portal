/*
  Warnings:

  - Added the required column `testRunner` to the `Run` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Run" (
    "id" TEXT NOT NULL,
    "runNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "testName" TEXT NOT NULL,
    "passCount" INTEGER NOT NULL,
    "failCount" INTEGER NOT NULL,
    "skipCount" INTEGER NOT NULL,
    "failNote" TEXT,
    "duration" REAL NOT NULL,
    "testRunner" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Run" ("createdAt", "duration", "failCount", "failNote", "id", "passCount", "runNumber", "skipCount", "testName") SELECT "createdAt", "duration", "failCount", "failNote", "id", "passCount", "runNumber", "skipCount", "testName" FROM "Run";
DROP TABLE "Run";
ALTER TABLE "new_Run" RENAME TO "Run";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
