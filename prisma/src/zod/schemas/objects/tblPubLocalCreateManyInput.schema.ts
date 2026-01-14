import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int().optional().nullable(),
  LocalTitle: z.string().max(150).optional().nullable(),
  PubDate: z.coerce.date().optional().nullable(),
  LocalISBN: z.string().max(13).optional().nullable(),
  Printrun: z.number().int().optional().nullable(),
  LocalEdition: z.number().int().optional().nullable()
}).strict();
export const tblPubLocalCreateManyInputObjectSchema: z.ZodType<Prisma.tblPubLocalCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCreateManyInput>;
export const tblPubLocalCreateManyInputObjectZodSchema = makeSchema();
