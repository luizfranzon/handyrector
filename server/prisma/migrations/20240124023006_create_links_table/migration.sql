-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "URL" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_id_key" ON "Links"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Links_slug_key" ON "Links"("slug");
