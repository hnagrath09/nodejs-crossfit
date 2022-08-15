const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getRecordForWorkout = async (workoutId) => {
  const record = await prisma.records.findMany({
    where: { workoutId },
  })
  return record
}

module.exports = { getRecordForWorkout }
