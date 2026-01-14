import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';
import { tblTitAuxCreateInputObjectSchema as tblTitAuxCreateInputObjectSchema } from './objects/tblTitAuxCreateInput.schema';
import { tblTitAuxUncheckedCreateInputObjectSchema as tblTitAuxUncheckedCreateInputObjectSchema } from './objects/tblTitAuxUncheckedCreateInput.schema';
import { tblTitAuxUpdateInputObjectSchema as tblTitAuxUpdateInputObjectSchema } from './objects/tblTitAuxUpdateInput.schema';
import { tblTitAuxUncheckedUpdateInputObjectSchema as tblTitAuxUncheckedUpdateInputObjectSchema } from './objects/tblTitAuxUncheckedUpdateInput.schema';

export const tblTitAuxUpsertOneSchema: z.ZodType<Prisma.tblTitAuxUpsertArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema, create: z.union([ tblTitAuxCreateInputObjectSchema, tblTitAuxUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitAuxUpdateInputObjectSchema, tblTitAuxUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblTitAuxUpsertArgs>;

export const tblTitAuxUpsertOneZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema, create: z.union([ tblTitAuxCreateInputObjectSchema, tblTitAuxUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitAuxUpdateInputObjectSchema, tblTitAuxUncheckedUpdateInputObjectSchema ]) }).strict();