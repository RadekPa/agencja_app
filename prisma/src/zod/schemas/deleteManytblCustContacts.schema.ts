import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './objects/tblCustContactsWhereInput.schema';

export const tblCustContactsDeleteManySchema: z.ZodType<Prisma.tblCustContactsDeleteManyArgs> = z.object({ where: tblCustContactsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustContactsDeleteManyArgs>;

export const tblCustContactsDeleteManyZodSchema = z.object({ where: tblCustContactsWhereInputObjectSchema.optional() }).strict();