import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankSelectObjectSchema as tblCustBankSelectObjectSchema } from './objects/tblCustBankSelect.schema';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './objects/tblCustBankInclude.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './objects/tblCustBankWhereUniqueInput.schema';

export const tblCustBankDeleteOneSchema: z.ZodType<Prisma.tblCustBankDeleteArgs> = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), where: tblCustBankWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustBankDeleteArgs>;

export const tblCustBankDeleteOneZodSchema = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), where: tblCustBankWhereUniqueInputObjectSchema }).strict();