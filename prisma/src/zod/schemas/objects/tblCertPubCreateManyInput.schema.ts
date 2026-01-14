import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.number().int(),
  Year: z.number().int(),
  PubID: z.number().int(),
  DateSent: z.coerce.date().optional().nullable(),
  Original: z.boolean().optional().nullable()
}).strict();
export const tblCertPubCreateManyInputObjectSchema: z.ZodType<Prisma.tblCertPubCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubCreateManyInput>;
export const tblCertPubCreateManyInputObjectZodSchema = makeSchema();
