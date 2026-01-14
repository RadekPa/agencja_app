import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './objects/tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsCreateInputObjectSchema as tblCustContactsCreateInputObjectSchema } from './objects/tblCustContactsCreateInput.schema';
import { tblCustContactsUncheckedCreateInputObjectSchema as tblCustContactsUncheckedCreateInputObjectSchema } from './objects/tblCustContactsUncheckedCreateInput.schema';

export const tblCustContactsCreateOneSchema: z.ZodType<Prisma.tblCustContactsCreateArgs> = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), data: z.union([tblCustContactsCreateInputObjectSchema, tblCustContactsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCustContactsCreateArgs>;

export const tblCustContactsCreateOneZodSchema = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), data: z.union([tblCustContactsCreateInputObjectSchema, tblCustContactsUncheckedCreateInputObjectSchema]) }).strict();