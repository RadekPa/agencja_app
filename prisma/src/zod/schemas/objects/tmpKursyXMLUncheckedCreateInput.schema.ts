import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.number().int().optional(),
  XMLData: z.string().optional().nullable(),
  LoadedDateTime: z.coerce.date().optional().nullable()
}).strict();
export const tmpKursyXMLUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLUncheckedCreateInput>;
export const tmpKursyXMLUncheckedCreateInputObjectZodSchema = makeSchema();
