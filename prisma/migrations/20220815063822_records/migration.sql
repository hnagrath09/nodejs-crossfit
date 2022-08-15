-- CreateTable
CREATE TABLE "Records" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "record" TEXT NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
