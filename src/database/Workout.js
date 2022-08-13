const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status ?? 500, message: error?.message ?? error };
  }
};

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with name ${newWorkout.name} already exists`,
      };
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: error?.status ?? 500, message: error?.message ?? error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const workoutIndex = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (workoutIndex === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts[workoutIndex] = {
      ...DB.workouts[workoutIndex],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    saveToDatabase(DB);
    return DB.workouts[workoutIndex];
  } catch (error) {
    throw { status: error?.status ?? 500, message: error?.message ?? error };
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    const workoutIndex = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (workoutIndex === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts.splice(workoutIndex, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status ?? 500, message: error?.message ?? error };
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
