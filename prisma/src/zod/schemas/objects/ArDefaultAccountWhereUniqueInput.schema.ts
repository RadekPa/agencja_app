import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.number().int().optional()
}).strict();
export const ArDefaultAccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountWhereUniqueInput>;
export const ArDefaultAccountWhereUniqueInputObjectZodSchema = makeSchema();
