import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5).optional()
}).strict();
export const dictTitSubClassWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictTitSubClassWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassWhereUniqueInput>;
export const dictTitSubClassWhereUniqueInputObjectZodSchema = makeSchema();
