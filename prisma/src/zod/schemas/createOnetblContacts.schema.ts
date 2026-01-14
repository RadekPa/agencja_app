import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsSelectObjectSchema as tblContactsSelectObjectSchema } from './objects/tblContactsSelect.schema';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './objects/tblContactsInclude.schema';
import { tblContactsCreateInputObjectSchema as tblContactsCreateInputObjectSchema } from './objects/tblContactsCreateInput.schema';
import { tblContactsUncheckedCreateInputObjectSchema as tblContactsUncheckedCreateInputObjectSchema } from './objects/tblContactsUncheckedCreateInput.schema';

export const tblContactsCreateOneSchema: z.ZodType<Prisma.tblContactsCreateArgs> = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), data: z.union([tblContactsCreateInputObjectSchema, tblContactsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblContactsCreateArgs>;

export const tblContactsCreateOneZodSchema = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), data: z.union([tblContactsCreateInputObjectSchema, tblContactsUncheckedCreateInputObjectSchema]) }).strict();