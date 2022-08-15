const workoutService = require('../services/workoutService')

const getAllWorkouts = async (req, res) => {
  const { mode } = req.query
  try {
    const allWorkouts = await workoutService.getAllWorkouts({ mode })
    res.send({ status: 'OK', data: allWorkouts })
  } catch (error) {
    res
      .status(error?.status ?? 500)
      .send({ status: 'FAILED', data: { error: error?.message ?? error } })
  }
}

const getOneWorkout = async (req, res) => {
  const { workoutId } = req.params
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    })
  }
  try {
    const workout = await workoutService.getOneWorkout(workoutId)
    res.send({ status: 'OK', data: workout })
  } catch (error) {
    res
      .status(error?.status ?? 500)
      .send({ status: 'FAILED', data: { error: error?.message ?? error } })
  }
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
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    })
    return
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout)
    res.status(201).send({ status: 'OK', data: createdWorkout })
  } catch (error) {
    res
      .status(error?.status ?? 500)
      .send({ statue: 'FAILED', data: { error: error?.message ?? error } })
  }
}

const updateOneWorkout = async (req, res) => {
  const { workoutId } = req.params
  const { body } = req
  if (!workoutId || !body) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' or 'body' can not be empty" },
    })
  }
  try {
    const updatedWorkout = await workoutService.updateOneWorkout(
      workoutId,
      body,
    )
    res.send({ status: 'Ok', data: updatedWorkout })
  } catch (error) {
    res
      .status(error?.status ?? 500)
      .send({ status: 'FAILED', data: { error: error?.message ?? error } })
  }
}

const deleteOneWorkout = async (req, res) => {
  const { workoutId } = req.params
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    })
  }
  try {
    const deletedWorkout = await workoutService.deleteOneWorkout(workoutId)
    res.status(204).send({ status: 'OK', data: deletedWorkout })
  } catch (error) {
    res
      .status(error?.status ?? 500)
      .send({ status: 'FAILED', data: { error: error?.message ?? error } })
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
