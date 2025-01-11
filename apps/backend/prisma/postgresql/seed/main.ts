import { seedEvents } from './events.seed';
import { seedGuest } from './guests.seed';
import { seedUsers } from './users.seed';

async function main() {
  console.log('Starting database seeding...');
  await seedUsers();
  await seedEvents();
  await seedGuest();
  console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
