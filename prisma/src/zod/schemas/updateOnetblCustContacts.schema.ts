import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './objects/tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsUpdateInputObjectSchema as tblCustContactsUpdateInputObjectSchema } from './objects/tblCustContactsUpdateInput.schema';
import { tblCustContactsUncheckedUpdateInputObjectSchema as tblCustContactsUncheckedUpdateInputObjectSchema } from './objects/tblCustContactsUncheckedUpdateInput.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';

export const tblCustContactsUpdateOneSchema: z.ZodType<Prisma.tblCustContactsUpdateArgs> = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), data: z.union([tblCustContactsUpdateInputObjectSchema, tblCustContactsUncheckedUpdateInputObjectSchema]), where: tblCustContactsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustContactsUpdateArgs>;

export const tblCustContactsUpdateOneZodSchema = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), data: z.union([tblCustContactsUpdateInputObjectSchema, tblCustContactsUncheckedUpdateInputObjectSchema]), where: tblCustContactsWhereUniqueInputObjectSchema }).strict();