import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './objects/tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsCreateInputObjectSchema as tblCustContactsCreateInputObjectSchema } from './objects/tblCustContactsCreateInput.schema';
import { tblCustContactsUncheckedCreateInputObjectSchema as tblCustContactsUncheckedCreateInputObjectSchema } from './objects/tblCustContactsUncheckedCreateInput.schema';
import { tblCustContactsUpdateInputObjectSchema as tblCustContactsUpdateInputObjectSchema } from './objects/tblCustContactsUpdateInput.schema';
import { tblCustContactsUncheckedUpdateInputObjectSchema as tblCustContactsUncheckedUpdateInputObjectSchema } from './objects/tblCustContactsUncheckedUpdateInput.schema';

export const tblCustContactsUpsertOneSchema: z.ZodType<Prisma.tblCustContactsUpsertArgs> = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema, create: z.union([ tblCustContactsCreateInputObjectSchema, tblCustContactsUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustContactsUpdateInputObjectSchema, tblCustContactsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCustContactsUpsertArgs>;

export const tblCustContactsUpsertOneZodSchema = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema, create: z.union([ tblCustContactsCreateInputObjectSchema, tblCustContactsUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustContactsUpdateInputObjectSchema, tblCustContactsUncheckedUpdateInputObjectSchema ]) }).strict();