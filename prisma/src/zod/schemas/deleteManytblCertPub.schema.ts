import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubWhereInputObjectSchema as tblCertPubWhereInputObjectSchema } from './objects/tblCertPubWhereInput.schema';

export const tblCertPubDeleteManySchema: z.ZodType<Prisma.tblCertPubDeleteManyArgs> = z.object({ where: tblCertPubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCertPubDeleteManyArgs>;

export const tblCertPubDeleteManyZodSchema = z.object({ where: tblCertPubWhereInputObjectSchema.optional() }).strict();