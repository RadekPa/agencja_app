import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30).optional()
}).strict();
export const tblUsersWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblUsersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersWhereUniqueInput>;
export const tblUsersWhereUniqueInputObjectZodSchema = makeSchema();
