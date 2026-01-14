import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankUpdateManyMutationInputObjectSchema as tblCustBankUpdateManyMutationInputObjectSchema } from './objects/tblCustBankUpdateManyMutationInput.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './objects/tblCustBankWhereInput.schema';

export const tblCustBankUpdateManySchema: z.ZodType<Prisma.tblCustBankUpdateManyArgs> = z.object({ data: tblCustBankUpdateManyMutationInputObjectSchema, where: tblCustBankWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustBankUpdateManyArgs>;

export const tblCustBankUpdateManyZodSchema = z.object({ data: tblCustBankUpdateManyMutationInputObjectSchema, where: tblCustBankWhereInputObjectSchema.optional() }).strict();