import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.number().int().optional(),
  LocalTitle: z.string().optional().nullable(),
  PubDate: z.coerce.date().optional().nullable(),
  LocalISBN: z.string().optional().nullable(),
  Printrun: z.number().int().optional().nullable(),
  LocalEdition: z.number().int().optional().nullable()
}).strict();
export const tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUncheckedCreateWithoutTblAgreementsInput>;
export const tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
