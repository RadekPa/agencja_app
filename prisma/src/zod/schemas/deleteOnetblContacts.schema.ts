import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsSelectObjectSchema as tblContactsSelectObjectSchema } from './objects/tblContactsSelect.schema';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './objects/tblContactsInclude.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './objects/tblContactsWhereUniqueInput.schema';

export const tblContactsDeleteOneSchema: z.ZodType<Prisma.tblContactsDeleteArgs> = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), where: tblContactsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblContactsDeleteArgs>;

export const tblContactsDeleteOneZodSchema = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), where: tblContactsWhereUniqueInputObjectSchema }).strict();