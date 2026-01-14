import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  XMLData: z.string().optional().nullable(),
  LoadedDateTime: z.coerce.date().optional().nullable()
}).strict();
export const tmpKursyXMLCreateInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLCreateInput>;
export const tmpKursyXMLCreateInputObjectZodSchema = makeSchema();
