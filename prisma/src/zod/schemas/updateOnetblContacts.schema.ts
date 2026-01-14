import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsSelectObjectSchema as tblContactsSelectObjectSchema } from './objects/tblContactsSelect.schema';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './objects/tblContactsInclude.schema';
import { tblContactsUpdateInputObjectSchema as tblContactsUpdateInputObjectSchema } from './objects/tblContactsUpdateInput.schema';
import { tblContactsUncheckedUpdateInputObjectSchema as tblContactsUncheckedUpdateInputObjectSchema } from './objects/tblContactsUncheckedUpdateInput.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './objects/tblContactsWhereUniqueInput.schema';

export const tblContactsUpdateOneSchema: z.ZodType<Prisma.tblContactsUpdateArgs> = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), data: z.union([tblContactsUpdateInputObjectSchema, tblContactsUncheckedUpdateInputObjectSchema]), where: tblContactsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblContactsUpdateArgs>;

export const tblContactsUpdateOneZodSchema = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), data: z.union([tblContactsUpdateInputObjectSchema, tblContactsUncheckedUpdateInputObjectSchema]), where: tblContactsWhereUniqueInputObjectSchema }).strict();