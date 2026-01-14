import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.literal(true).optional(),
  XMLData: z.literal(true).optional(),
  LoadedDateTime: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TmpKursyXMLCountAggregateInputObjectSchema: z.ZodType<Prisma.TmpKursyXMLCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TmpKursyXMLCountAggregateInputType>;
export const TmpKursyXMLCountAggregateInputObjectZodSchema = makeSchema();
