import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatDesc: z.string().max(30)
}).strict();
export const dictCoverFormatCreateManyInputObjectSchema: z.ZodType<Prisma.dictCoverFormatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatCreateManyInput>;
export const dictCoverFormatCreateManyInputObjectZodSchema = makeSchema();
