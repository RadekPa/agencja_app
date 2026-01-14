import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const LocalUserWhereUniqueInputObjectSchema: z.ZodType<Prisma.LocalUserWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserWhereUniqueInput>;
export const LocalUserWhereUniqueInputObjectZodSchema = makeSchema();
