import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.literal(true).optional(),
  XMLData: z.literal(true).optional(),
  LoadedDateTime: z.literal(true).optional()
}).strict();
export const TmpKursyXMLMaxAggregateInputObjectSchema: z.ZodType<Prisma.TmpKursyXMLMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TmpKursyXMLMaxAggregateInputType>;
export const TmpKursyXMLMaxAggregateInputObjectZodSchema = makeSchema();
