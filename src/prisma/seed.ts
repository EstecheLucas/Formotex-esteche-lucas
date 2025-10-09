import { PrismaClient } from '@prisma/client';
import { hash } from '../utils/hash.util';
const prisma = new PrismaClient();

async function main(){
  const password = await hash('admin123');
  await prisma.user.upsert({
    where: { email: 'admin@formotex.local' },
    update: {},
    create: {
      name: 'Admin Formotex',
      email: 'admin@formotex.local',
      password,
      role: 'ADMIN'
    }
  });
}

main().catch(console.error).finally(()=>prisma.$disconnect());
