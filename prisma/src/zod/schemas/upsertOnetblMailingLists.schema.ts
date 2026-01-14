import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsSelectObjectSchema as tblMailingListsSelectObjectSchema } from './objects/tblMailingListsSelect.schema';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './objects/tblMailingListsInclude.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './objects/tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsCreateInputObjectSchema as tblMailingListsCreateInputObjectSchema } from './objects/tblMailingListsCreateInput.schema';
import { tblMailingListsUncheckedCreateInputObjectSchema as tblMailingListsUncheckedCreateInputObjectSchema } from './objects/tblMailingListsUncheckedCreateInput.schema';
import { tblMailingListsUpdateInputObjectSchema as tblMailingListsUpdateInputObjectSchema } from './objects/tblMailingListsUpdateInput.schema';
import { tblMailingListsUncheckedUpdateInputObjectSchema as tblMailingListsUncheckedUpdateInputObjectSchema } from './objects/tblMailingListsUncheckedUpdateInput.schema';

export const tblMailingListsUpsertOneSchema: z.ZodType<Prisma.tblMailingListsUpsertArgs> = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), where: tblMailingListsWhereUniqueInputObjectSchema, create: z.union([ tblMailingListsCreateInputObjectSchema, tblMailingListsUncheckedCreateInputObjectSchema ]), update: z.union([ tblMailingListsUpdateInputObjectSchema, tblMailingListsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblMailingListsUpsertArgs>;

export const tblMailingListsUpsertOneZodSchema = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), where: tblMailingListsWhereUniqueInputObjectSchema, create: z.union([ tblMailingListsCreateInputObjectSchema, tblMailingListsUncheckedCreateInputObjectSchema ]), update: z.union([ tblMailingListsUpdateInputObjectSchema, tblMailingListsUncheckedUpdateInputObjectSchema ]) }).strict();