-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "mode" VARCHAR(255) NOT NULL,
    "equipment" TEXT[],
    "exercises" TEXT[],
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "trainerTips" TEXT[],

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);
