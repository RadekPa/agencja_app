import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.literal(true).optional()
}).strict();
export const TmpKursyXMLSumAggregateInputObjectSchema: z.ZodType<Prisma.TmpKursyXMLSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TmpKursyXMLSumAggregateInputType>;
export const TmpKursyXMLSumAggregateInputObjectZodSchema = makeSchema();
