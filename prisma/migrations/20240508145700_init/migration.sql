-- CreateTable
CREATE TABLE "Run" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "testName" TEXT NOT NULL,
    "passCount" INTEGER NOT NULL,
    "failCount" INTEGER NOT NULL,
    "skipCount" INTEGER NOT NULL,
    "failNote" TEXT,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
