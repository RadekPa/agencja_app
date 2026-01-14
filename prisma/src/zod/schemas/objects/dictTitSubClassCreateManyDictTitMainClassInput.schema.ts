import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  SubClassDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictTitSubClassCreateManyDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateManyDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateManyDictTitMainClassInput>;
export const dictTitSubClassCreateManyDictTitMainClassInputObjectZodSchema = makeSchema();
