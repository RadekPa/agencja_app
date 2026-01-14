import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  XMLData: z.string().optional().nullable(),
  LoadedDateTime: z.coerce.date().optional().nullable()
}).strict();
export const tmpKursyXMLCreateManyInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLCreateManyInput>;
export const tmpKursyXMLCreateManyInputObjectZodSchema = makeSchema();
