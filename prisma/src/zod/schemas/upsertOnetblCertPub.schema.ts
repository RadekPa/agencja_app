import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubSelectObjectSchema as tblCertPubSelectObjectSchema } from './objects/tblCertPubSelect.schema';
import { tblCertPubWhereUniqueInputObjectSchema as tblCertPubWhereUniqueInputObjectSchema } from './objects/tblCertPubWhereUniqueInput.schema';
import { tblCertPubCreateInputObjectSchema as tblCertPubCreateInputObjectSchema } from './objects/tblCertPubCreateInput.schema';
import { tblCertPubUncheckedCreateInputObjectSchema as tblCertPubUncheckedCreateInputObjectSchema } from './objects/tblCertPubUncheckedCreateInput.schema';
import { tblCertPubUpdateInputObjectSchema as tblCertPubUpdateInputObjectSchema } from './objects/tblCertPubUpdateInput.schema';
import { tblCertPubUncheckedUpdateInputObjectSchema as tblCertPubUncheckedUpdateInputObjectSchema } from './objects/tblCertPubUncheckedUpdateInput.schema';

export const tblCertPubUpsertOneSchema: z.ZodType<Prisma.tblCertPubUpsertArgs> = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema, create: z.union([ tblCertPubCreateInputObjectSchema, tblCertPubUncheckedCreateInputObjectSchema ]), update: z.union([ tblCertPubUpdateInputObjectSchema, tblCertPubUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCertPubUpsertArgs>;

export const tblCertPubUpsertOneZodSchema = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema, create: z.union([ tblCertPubCreateInputObjectSchema, tblCertPubUncheckedCreateInputObjectSchema ]), update: z.union([ tblCertPubUpdateInputObjectSchema, tblCertPubUncheckedUpdateInputObjectSchema ]) }).strict();