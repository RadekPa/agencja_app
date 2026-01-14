import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormDesc: z.string().max(50),
  RightFormPL: z.string().max(100).optional().nullable(),
  RightFormAbbPL: z.string().max(10).optional().nullable(),
  RightFormAbbEN: z.string().max(10).optional().nullable()
}).strict();
export const dictRightsFormCreateManyInputObjectSchema: z.ZodType<Prisma.dictRightsFormCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormCreateManyInput>;
export const dictRightsFormCreateManyInputObjectZodSchema = makeSchema();
