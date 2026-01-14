import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsSelectObjectSchema as tblMailingListsSelectObjectSchema } from './objects/tblMailingListsSelect.schema';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './objects/tblMailingListsInclude.schema';
import { tblMailingListsCreateInputObjectSchema as tblMailingListsCreateInputObjectSchema } from './objects/tblMailingListsCreateInput.schema';
import { tblMailingListsUncheckedCreateInputObjectSchema as tblMailingListsUncheckedCreateInputObjectSchema } from './objects/tblMailingListsUncheckedCreateInput.schema';

export const tblMailingListsCreateOneSchema: z.ZodType<Prisma.tblMailingListsCreateArgs> = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), data: z.union([tblMailingListsCreateInputObjectSchema, tblMailingListsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblMailingListsCreateArgs>;

export const tblMailingListsCreateOneZodSchema = z.object({ select: tblMailingListsSelectObjectSchema.optional(), include: tblMailingListsIncludeObjectSchema.optional(), data: z.union([tblMailingListsCreateInputObjectSchema, tblMailingListsUncheckedCreateInputObjectSchema]) }).strict();