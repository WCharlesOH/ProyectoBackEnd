-- CreateTable
CREATE TABLE "Logros" (
    "ID_Logro" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Puntaje" INTEGER NOT NULL,
    "Completado" BOOLEAN NOT NULL DEFAULT false,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "Logros_pkey" PRIMARY KEY ("ID_Logro")
);

-- CreateIndex
CREATE UNIQUE INDEX "Logros_Nombre_key" ON "Logros"("Nombre");

-- AddForeignKey
ALTER TABLE "Logros" ADD CONSTRAINT "Logros_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
