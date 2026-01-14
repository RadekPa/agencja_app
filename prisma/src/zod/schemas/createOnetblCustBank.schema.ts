import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankSelectObjectSchema as tblCustBankSelectObjectSchema } from './objects/tblCustBankSelect.schema';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './objects/tblCustBankInclude.schema';
import { tblCustBankCreateInputObjectSchema as tblCustBankCreateInputObjectSchema } from './objects/tblCustBankCreateInput.schema';
import { tblCustBankUncheckedCreateInputObjectSchema as tblCustBankUncheckedCreateInputObjectSchema } from './objects/tblCustBankUncheckedCreateInput.schema';

export const tblCustBankCreateOneSchema: z.ZodType<Prisma.tblCustBankCreateArgs> = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), data: z.union([tblCustBankCreateInputObjectSchema, tblCustBankUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCustBankCreateArgs>;

export const tblCustBankCreateOneZodSchema = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), data: z.union([tblCustBankCreateInputObjectSchema, tblCustBankUncheckedCreateInputObjectSchema]) }).strict();