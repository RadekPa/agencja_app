import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.literal(true).optional(),
  TempName: z.literal(true).optional(),
  TempPath: z.literal(true).optional(),
  TempSubject: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblMailingTemplatesCountAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingTemplatesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingTemplatesCountAggregateInputType>;
export const TblMailingTemplatesCountAggregateInputObjectZodSchema = makeSchema();
