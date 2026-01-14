import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10).optional()
}).strict();
export const dictTitMainClassWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictTitMainClassWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassWhereUniqueInput>;
export const dictTitMainClassWhereUniqueInputObjectZodSchema = makeSchema();
