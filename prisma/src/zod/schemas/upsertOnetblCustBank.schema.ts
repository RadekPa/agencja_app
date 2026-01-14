import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankSelectObjectSchema as tblCustBankSelectObjectSchema } from './objects/tblCustBankSelect.schema';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './objects/tblCustBankInclude.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './objects/tblCustBankWhereUniqueInput.schema';
import { tblCustBankCreateInputObjectSchema as tblCustBankCreateInputObjectSchema } from './objects/tblCustBankCreateInput.schema';
import { tblCustBankUncheckedCreateInputObjectSchema as tblCustBankUncheckedCreateInputObjectSchema } from './objects/tblCustBankUncheckedCreateInput.schema';
import { tblCustBankUpdateInputObjectSchema as tblCustBankUpdateInputObjectSchema } from './objects/tblCustBankUpdateInput.schema';
import { tblCustBankUncheckedUpdateInputObjectSchema as tblCustBankUncheckedUpdateInputObjectSchema } from './objects/tblCustBankUncheckedUpdateInput.schema';

export const tblCustBankUpsertOneSchema: z.ZodType<Prisma.tblCustBankUpsertArgs> = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), where: tblCustBankWhereUniqueInputObjectSchema, create: z.union([ tblCustBankCreateInputObjectSchema, tblCustBankUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustBankUpdateInputObjectSchema, tblCustBankUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCustBankUpsertArgs>;

export const tblCustBankUpsertOneZodSchema = z.object({ select: tblCustBankSelectObjectSchema.optional(), include: tblCustBankIncludeObjectSchema.optional(), where: tblCustBankWhereUniqueInputObjectSchema, create: z.union([ tblCustBankCreateInputObjectSchema, tblCustBankUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustBankUpdateInputObjectSchema, tblCustBankUncheckedUpdateInputObjectSchema ]) }).strict();