const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: "OK", data: allWorkouts })
}

const getOneWorkout = (req, res) => {
  const { workoutId } = req.params
  if (!workoutId) {
    return
  }
  const workout = workoutService.getOneWorkout(workoutId)
  res.send({ status: "OK", data: workout })
}

const createNewWorkout = (req, res) => {
  const { body } = req

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.status(201).send({ status: "OK", data: createdWorkout })
}

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params
  const { body } = req
  if (!workoutId || !body) {
    return
  }
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)
  res.send({ status: "Ok", data: updatedWorkout })
}

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.params
  if (!workoutId) {
    return
  }
  const deletedWorkout = workoutService.deleteOneWorkout(workoutId)
  res.status(204).send({ status: "OK", data: deletedWorkout })
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
