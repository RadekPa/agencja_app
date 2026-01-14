import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormID: z.number().int().optional()
}).strict();
export const dictRightsFormWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictRightsFormWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormWhereUniqueInput>;
export const dictRightsFormWhereUniqueInputObjectZodSchema = makeSchema();
