import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubUpdateManyMutationInputObjectSchema as tblCertPubUpdateManyMutationInputObjectSchema } from './objects/tblCertPubUpdateManyMutationInput.schema';
import { tblCertPubWhereInputObjectSchema as tblCertPubWhereInputObjectSchema } from './objects/tblCertPubWhereInput.schema';

export const tblCertPubUpdateManySchema: z.ZodType<Prisma.tblCertPubUpdateManyArgs> = z.object({ data: tblCertPubUpdateManyMutationInputObjectSchema, where: tblCertPubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCertPubUpdateManyArgs>;

export const tblCertPubUpdateManyZodSchema = z.object({ data: tblCertPubUpdateManyMutationInputObjectSchema, where: tblCertPubWhereInputObjectSchema.optional() }).strict();