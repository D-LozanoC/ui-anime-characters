-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "thumbnail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "statusName" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "episodeCount" TEXT NOT NULL,
    "durationPerEpisode" TEXT NOT NULL,
    CONSTRAINT "Anime_statusName_fkey" FOREIGN KEY ("statusName") REFERENCES "Status" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Status" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "animeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    CONSTRAINT "Character_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Abilities" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeGenres" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AnimeGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Anime" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AnimeGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_relationship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_relationship_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_relationship_B_fkey" FOREIGN KEY ("B") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CharacterAbilities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CharacterAbilities_A_fkey" FOREIGN KEY ("A") REFERENCES "Abilities" ("name") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterAbilities_B_fkey" FOREIGN KEY ("B") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Anime_title_key" ON "Anime"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Abilities_name_key" ON "Abilities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeGenres_AB_unique" ON "_AnimeGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeGenres_B_index" ON "_AnimeGenres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_relationship_AB_unique" ON "_relationship"("A", "B");

-- CreateIndex
CREATE INDEX "_relationship_B_index" ON "_relationship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterAbilities_AB_unique" ON "_CharacterAbilities"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterAbilities_B_index" ON "_CharacterAbilities"("B");
