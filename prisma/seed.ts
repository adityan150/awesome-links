export {};

import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Test",
      email: "test@email.com",
      role: "ADMIN",
    },
  });

  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
