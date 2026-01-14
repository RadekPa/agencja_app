import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictTitMainClassCreateManyInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateManyInput>;
export const dictTitMainClassCreateManyInputObjectZodSchema = makeSchema();
