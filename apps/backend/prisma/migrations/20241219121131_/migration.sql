/*
  Warnings:

  - Added the required column `chavePix` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monetize` to the `eventos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "monetize" BOOLEAN NOT NULL,
    "chavePix" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagemBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL
);
INSERT INTO "new_eventos" ("alias", "data", "descricao", "endereco", "id", "imagem", "imagemBackground", "local", "nome", "publicoEsperado", "senha") SELECT "alias", "data", "descricao", "endereco", "id", "imagem", "imagemBackground", "local", "nome", "publicoEsperado", "senha" FROM "eventos";
DROP TABLE "eventos";
ALTER TABLE "new_eventos" RENAME TO "eventos";
CREATE UNIQUE INDEX "eventos_alias_key" ON "eventos"("alias");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
