/*
  Warnings:

  - You are about to alter the column `duration` on the `Run` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Run" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "testName" TEXT NOT NULL,
    "passCount" INTEGER NOT NULL,
    "failCount" INTEGER NOT NULL,
    "skipCount" INTEGER NOT NULL,
    "failNote" TEXT,
    "duration" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Run" ("createdAt", "duration", "failCount", "failNote", "id", "passCount", "skipCount", "testName") SELECT "createdAt", "duration", "failCount", "failNote", "id", "passCount", "skipCount", "testName" FROM "Run";
DROP TABLE "Run";
ALTER TABLE "new_Run" RENAME TO "Run";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
