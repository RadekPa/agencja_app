import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().max(50).optional().nullable(),
  AdvTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvTypeCreateInputObjectSchema: z.ZodType<Prisma.dictAdvTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeCreateInput>;
export const dictAdvTypeCreateInputObjectZodSchema = makeSchema();
