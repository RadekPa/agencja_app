import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.number().int().optional()
}).strict();
export const dictCoverFormatWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCoverFormatWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatWhereUniqueInput>;
export const dictCoverFormatWhereUniqueInputObjectZodSchema = makeSchema();
