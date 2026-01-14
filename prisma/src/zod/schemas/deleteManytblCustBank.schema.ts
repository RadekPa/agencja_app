import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './objects/tblCustBankWhereInput.schema';

export const tblCustBankDeleteManySchema: z.ZodType<Prisma.tblCustBankDeleteManyArgs> = z.object({ where: tblCustBankWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustBankDeleteManyArgs>;

export const tblCustBankDeleteManyZodSchema = z.object({ where: tblCustBankWhereInputObjectSchema.optional() }).strict();