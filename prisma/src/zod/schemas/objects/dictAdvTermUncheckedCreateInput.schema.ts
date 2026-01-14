import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.number().int(),
  AdvTermDesc: z.string().max(50).optional().nullable(),
  AdvTermPL: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvTermUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictAdvTermUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermUncheckedCreateInput>;
export const dictAdvTermUncheckedCreateInputObjectZodSchema = makeSchema();
