import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsSelectObjectSchema as tblMailingListsSelectObjectSchema } from './objects/tblMailingListsSelect.schema';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './objects/tblMailingListsInclude.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './objects/tblMailingListsWhereUniqueInput.schema';

export const tblMailingListsDeleteOneSchema: z.ZodType<Prisma.tblMailingListsDeleteArgs> = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), where: tblMailingListsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMailingListsDeleteArgs>;

export const tblMailingListsDeleteOneZodSchema = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), where: tblMailingListsWhereUniqueInputObjectSchema }).strict();