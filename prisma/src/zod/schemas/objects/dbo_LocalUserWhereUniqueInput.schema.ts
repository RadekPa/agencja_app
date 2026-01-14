import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const dbo_LocalUserWhereUniqueInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserWhereUniqueInput>;
export const dbo_LocalUserWhereUniqueInputObjectZodSchema = makeSchema();
