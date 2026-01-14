import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().max(50).optional().nullable(),
  AdvTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeUncheckedCreateInput>;
export const dictAdvTypeUncheckedCreateInputObjectZodSchema = makeSchema();
