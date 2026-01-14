import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.number().int(),
  AdvTypeDesc: z.string().max(50).optional().nullable(),
  AdvTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictAdvTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeCreateManyInput>;
export const dictAdvTypeCreateManyInputObjectZodSchema = makeSchema();
