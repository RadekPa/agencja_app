import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubSelectObjectSchema as tblCertPubSelectObjectSchema } from './objects/tblCertPubSelect.schema';
import { tblCertPubCreateInputObjectSchema as tblCertPubCreateInputObjectSchema } from './objects/tblCertPubCreateInput.schema';
import { tblCertPubUncheckedCreateInputObjectSchema as tblCertPubUncheckedCreateInputObjectSchema } from './objects/tblCertPubUncheckedCreateInput.schema';

export const tblCertPubCreateOneSchema: z.ZodType<Prisma.tblCertPubCreateArgs> = z.object({ select: tblCertPubSelectObjectSchema.optional(),  data: z.union([tblCertPubCreateInputObjectSchema, tblCertPubUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCertPubCreateArgs>;

export const tblCertPubCreateOneZodSchema = z.object({ select: tblCertPubSelectObjectSchema.optional(),  data: z.union([tblCertPubCreateInputObjectSchema, tblCertPubUncheckedCreateInputObjectSchema]) }).strict();