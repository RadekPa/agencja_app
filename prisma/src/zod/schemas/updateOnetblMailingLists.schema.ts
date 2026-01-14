import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsSelectObjectSchema as tblMailingListsSelectObjectSchema } from './objects/tblMailingListsSelect.schema';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './objects/tblMailingListsInclude.schema';
import { tblMailingListsUpdateInputObjectSchema as tblMailingListsUpdateInputObjectSchema } from './objects/tblMailingListsUpdateInput.schema';
import { tblMailingListsUncheckedUpdateInputObjectSchema as tblMailingListsUncheckedUpdateInputObjectSchema } from './objects/tblMailingListsUncheckedUpdateInput.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './objects/tblMailingListsWhereUniqueInput.schema';

export const tblMailingListsUpdateOneSchema: z.ZodType<Prisma.tblMailingListsUpdateArgs> = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), data: z.union([tblMailingListsUpdateInputObjectSchema, tblMailingListsUncheckedUpdateInputObjectSchema]), where: tblMailingListsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMailingListsUpdateArgs>;

export const tblMailingListsUpdateOneZodSchema = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), data: z.union([tblMailingListsUpdateInputObjectSchema, tblMailingListsUncheckedUpdateInputObjectSchema]), where: tblMailingListsWhereUniqueInputObjectSchema }).strict();