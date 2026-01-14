import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubSelectObjectSchema as tblCertPubSelectObjectSchema } from './objects/tblCertPubSelect.schema';
import { tblCertPubWhereUniqueInputObjectSchema as tblCertPubWhereUniqueInputObjectSchema } from './objects/tblCertPubWhereUniqueInput.schema';

export const tblCertPubFindUniqueSchema: z.ZodType<Prisma.tblCertPubFindUniqueArgs> = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCertPubFindUniqueArgs>;

export const tblCertPubFindUniqueZodSchema = z.object({ select: tblCertPubSelectObjectSchema.optional(),  where: tblCertPubWhereUniqueInputObjectSchema }).strict();