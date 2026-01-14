import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsSelectObjectSchema as tblContactsSelectObjectSchema } from './objects/tblContactsSelect.schema';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './objects/tblContactsInclude.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './objects/tblContactsWhereUniqueInput.schema';
import { tblContactsCreateInputObjectSchema as tblContactsCreateInputObjectSchema } from './objects/tblContactsCreateInput.schema';
import { tblContactsUncheckedCreateInputObjectSchema as tblContactsUncheckedCreateInputObjectSchema } from './objects/tblContactsUncheckedCreateInput.schema';
import { tblContactsUpdateInputObjectSchema as tblContactsUpdateInputObjectSchema } from './objects/tblContactsUpdateInput.schema';
import { tblContactsUncheckedUpdateInputObjectSchema as tblContactsUncheckedUpdateInputObjectSchema } from './objects/tblContactsUncheckedUpdateInput.schema';

export const tblContactsUpsertOneSchema: z.ZodType<Prisma.tblContactsUpsertArgs> = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), where: tblContactsWhereUniqueInputObjectSchema, create: z.union([ tblContactsCreateInputObjectSchema, tblContactsUncheckedCreateInputObjectSchema ]), update: z.union([ tblContactsUpdateInputObjectSchema, tblContactsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblContactsUpsertArgs>;

export const tblContactsUpsertOneZodSchema = z.object({ select: tblContactsSelectObjectSchema.optional(), include: tblContactsIncludeObjectSchema.optional(), where: tblContactsWhereUniqueInputObjectSchema, create: z.union([ tblContactsCreateInputObjectSchema, tblContactsUncheckedCreateInputObjectSchema ]), update: z.union([ tblContactsUpdateInputObjectSchema, tblContactsUncheckedUpdateInputObjectSchema ]) }).strict();