/*
  Warnings:

  - The primary key for the `Genre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Genre` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Genre" (
    "name" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Genre" ("name") SELECT "name" FROM "Genre";
DROP TABLE "Genre";
ALTER TABLE "new_Genre" RENAME TO "Genre";
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");
CREATE TABLE "new__AnimeGenres" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AnimeGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Anime" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AnimeGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre" ("name") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__AnimeGenres" ("A", "B") SELECT "A", "B" FROM "_AnimeGenres";
DROP TABLE "_AnimeGenres";
ALTER TABLE "new__AnimeGenres" RENAME TO "_AnimeGenres";
CREATE UNIQUE INDEX "_AnimeGenres_AB_unique" ON "_AnimeGenres"("A", "B");
CREATE INDEX "_AnimeGenres_B_index" ON "_AnimeGenres"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
