import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.number().int().optional()
}).strict();
export const dictAdvTermWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictAdvTermWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermWhereUniqueInput>;
export const dictAdvTermWhereUniqueInputObjectZodSchema = makeSchema();
