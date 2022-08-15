-- DropForeignKey
ALTER TABLE "Records" DROP CONSTRAINT "Records_workoutId_fkey";

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
