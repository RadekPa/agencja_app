import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.literal(true).optional()
}).strict();
export const TmpKursyXMLAvgAggregateInputObjectSchema: z.ZodType<Prisma.TmpKursyXMLAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TmpKursyXMLAvgAggregateInputType>;
export const TmpKursyXMLAvgAggregateInputObjectZodSchema = makeSchema();
