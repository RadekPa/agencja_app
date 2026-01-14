import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.number().int(),
  AdvTermDesc: z.string().max(50).optional().nullable(),
  AdvTermPL: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvTermCreateInputObjectSchema: z.ZodType<Prisma.dictAdvTermCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermCreateInput>;
export const dictAdvTermCreateInputObjectZodSchema = makeSchema();
