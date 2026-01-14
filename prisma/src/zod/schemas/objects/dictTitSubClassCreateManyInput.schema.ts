import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  ClassCode: z.string().max(10).optional().nullable(),
  SubClassDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictTitSubClassCreateManyInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateManyInput>;
export const dictTitSubClassCreateManyInputObjectZodSchema = makeSchema();
