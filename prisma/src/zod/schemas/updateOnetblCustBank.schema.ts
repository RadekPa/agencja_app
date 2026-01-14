import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankSelectObjectSchema as tblCustBankSelectObjectSchema } from './objects/tblCustBankSelect.schema';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './objects/tblCustBankInclude.schema';
import { tblCustBankUpdateInputObjectSchema as tblCustBankUpdateInputObjectSchema } from './objects/tblCustBankUpdateInput.schema';
import { tblCustBankUncheckedUpdateInputObjectSchema as tblCustBankUncheckedUpdateInputObjectSchema } from './objects/tblCustBankUncheckedUpdateInput.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './objects/tblCustBankWhereUniqueInput.schema';

export const tblCustBankUpdateOneSchema: z.ZodType<Prisma.tblCustBankUpdateArgs> = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), data: z.union([tblCustBankUpdateInputObjectSchema, tblCustBankUncheckedUpdateInputObjectSchema]), where: tblCustBankWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustBankUpdateArgs>;

export const tblCustBankUpdateOneZodSchema = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), data: z.union([tblCustBankUpdateInputObjectSchema, tblCustBankUncheckedUpdateInputObjectSchema]), where: tblCustBankWhereUniqueInputObjectSchema }).strict();