import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.number().int().optional(),
  AgrID: z.number().int().optional().nullable(),
  LocalTitle: z.string().max(150).optional().nullable(),
  PubDate: z.coerce.date().optional().nullable(),
  LocalISBN: z.string().max(13).optional().nullable(),
  Printrun: z.number().int().optional().nullable(),
  LocalEdition: z.number().int().optional().nullable()
}).strict();
export const tblPubLocalUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblPubLocalUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUncheckedCreateInput>;
export const tblPubLocalUncheckedCreateInputObjectZodSchema = makeSchema();
