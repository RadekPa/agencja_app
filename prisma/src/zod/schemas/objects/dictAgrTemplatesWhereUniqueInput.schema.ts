import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string().max(30).optional()
}).strict();
export const dictAgrTemplatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesWhereUniqueInput>;
export const dictAgrTemplatesWhereUniqueInputObjectZodSchema = makeSchema();
