import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.literal(true).optional(),
  XMLData: z.literal(true).optional(),
  LoadedDateTime: z.literal(true).optional()
}).strict();
export const TmpKursyXMLMinAggregateInputObjectSchema: z.ZodType<Prisma.TmpKursyXMLMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TmpKursyXMLMinAggregateInputType>;
export const TmpKursyXMLMinAggregateInputObjectZodSchema = makeSchema();
