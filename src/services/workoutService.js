const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAllWorkouts = async (filterParams) => {
  const workouts = await prisma.workout.findMany({
    where: { mode: { contains: filterParams.mode } },
  })

  return workouts
}

const getOneWorkout = async (workoutId) => {
  const workout = await prisma.workout.findUnique({
    where: { id: workoutId },
  })
  return workout
}

const createNewWorkout = async (newWorkout) => {
  const createdWorkout = await prisma.workout.create({ data: newWorkout })
  return createdWorkout
}

const updateOneWorkout = async (workoutId, changes) => {
  const updatedWorkout = await prisma.workout.update({
    where: { id: workoutId },
    data: { ...changes },
  })
  return updatedWorkout
}

const deleteOneWorkout = async (workoutId) => {
  const deletedWorkout = await prisma.workout.delete({
    where: { id: workoutId },
    select: { Records: true },
  })
  return deletedWorkout
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
