import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.boolean().optional(),
  XMLData: z.boolean().optional(),
  LoadedDateTime: z.boolean().optional()
}).strict();
export const tmpKursyXMLSelectObjectSchema: z.ZodType<Prisma.tmpKursyXMLSelect> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLSelect>;
export const tmpKursyXMLSelectObjectZodSchema = makeSchema();
