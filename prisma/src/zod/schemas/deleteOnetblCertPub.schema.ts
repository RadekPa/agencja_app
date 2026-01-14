import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubSelectObjectSchema as tblCertPubSelectObjectSchema } from './objects/tblCertPubSelect.schema';
import { tblCertPubWhereUniqueInputObjectSchema as tblCertPubWhereUniqueInputObjectSchema } from './objects/tblCertPubWhereUniqueInput.schema';

export const tblCertPubDeleteOneSchema: z.ZodType<Prisma.tblCertPubDeleteArgs> = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCertPubDeleteArgs>;

export const tblCertPubDeleteOneZodSchema = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema }).strict();