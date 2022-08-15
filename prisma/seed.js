const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const workouts = await prisma.workout.createMany({
    data: [
      {
        name: 'Heavy DT',
        mode: '5 Rounds For Time',
        equipment: ['barbell', 'rope'],
        exercises: ['12 deadlifts', '9 hang power cleans', '6 push jerks'],
        trainerTips: [
          'Aim for unbroken push jerks',
          'The first three rounds might feel terrible, but stick to it',
          'RX Weights: 205lb/145lb',
        ],
      },
      {
        name: 'Core Buster',
        mode: 'AMRAP 20',
        equipment: ['rack', 'barbell', 'abmat'],
        exercises: ['15 toes to bars', '10 thrusters', '30 abmat sit-ups'],
        trainerTips: [
          'Split your toes to bars in two sets maximum',
          'Go unbroken on the thrusters',
          'Take the abmat sit-ups as a chance to normalize your breath',
        ],
      },
      {
        name: 'Jumping (Not) Made Easy',
        mode: 'AMRAP 12',
        equipment: ['jump rope'],
        exercises: ['10 burpees', '25 double-unders'],
        trainerTips: [
          'Scale to do 50 single-unders, if double-unders are too difficult',
        ],
      },
      {
        name: 'Burpee Meters',
        mode: '3 Rounds For Time',
        equipment: ['Row Erg'],
        exercises: [
          'Row 500 meters',
          '21 burpees',
          'Run 400 meters',
          'Rest 3 minutes',
        ],
        trainerTips: [
          'Go hard',
          'Note your time after the first run',
          'Try to hold your pace',
        ],
      },
      {
        name: 'Dumbbell Rower',
        mode: 'AMRAP 15',
        equipment: ['Dumbbell'],
        exercises: [
          '15 dumbbell rows, left arm',
          '15 dumbbell rows, right arm',
          '50-ft handstand walk',
        ],
        trainerTips: [
          'RX weights for women: 35-lb',
          'RX weights for men: 50-lb',
        ],
      },
    ],
  })

  const members = await prisma.members.createMany({
    data: [
      {
        name: 'Jason Miller',
        gender: 'male',
        dateOfBirth: '23/04/1990',
        email: 'jason@mail.com',
        password:
          '666349420ec497c1dc890c45179d44fb13220239325172af02d1fb6635922956',
      },
      {
        name: 'Tiffany Brookston',
        gender: 'female',
        dateOfBirth: '09/06/1996',
        email: 'tiffy@mail.com',
        password:
          '8a1ea5669b749354110dcba3fac5546c16e6d0f73a37f35a84f6b0d7b3c22fcc',
      },
      {
        name: 'Catrin Stevenson',
        gender: 'female',
        dateOfBirth: '17/08/2001',
        email: 'catrin@mail.com',
        password:
          '18eb2d6c5373c94c6d5d707650d02c3c06f33fac557c9cfb8cb1ee625a649ff3',
      },
      {
        name: 'Greg Bronson',
        gender: 'male',
        dateOfBirth: '08/04/1993',
        email: 'greg@mail.com',
        password:
          'a6dcde7eceb689142f21a1e30b5fdb868ec4cd25d5537d67ac7e8c7816b0e862',
      },
    ],
  })

  const records = await prisma.records.createMany({
    data: [
      {
        workoutId: '903cc822-afbf-402e-acec-40017e03912e',
        record: '160 reps',
      },
      {
        workoutId: '50eb1d3c-6d10-45c2-9b5d-1823f5f0e86a',
        record: '7:23 minutes',
      },
      {
        workoutId: '4bc19650-c5d9-403c-9c0d-98baf6d42ccb',
        record: '358 reps',
      },
      {
        workoutId: '50eb1d3c-6d10-45c2-9b5d-1823f5f0e86a',
        record: '145 reps',
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
