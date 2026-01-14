import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './objects/tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateInputObjectSchema as tblAgrRightsCreateInputObjectSchema } from './objects/tblAgrRightsCreateInput.schema';
import { tblAgrRightsUncheckedCreateInputObjectSchema as tblAgrRightsUncheckedCreateInputObjectSchema } from './objects/tblAgrRightsUncheckedCreateInput.schema';
import { tblAgrRightsUpdateInputObjectSchema as tblAgrRightsUpdateInputObjectSchema } from './objects/tblAgrRightsUpdateInput.schema';
import { tblAgrRightsUncheckedUpdateInputObjectSchema as tblAgrRightsUncheckedUpdateInputObjectSchema } from './objects/tblAgrRightsUncheckedUpdateInput.schema';

export const tblAgrRightsUpsertOneSchema: z.ZodType<Prisma.tblAgrRightsUpsertArgs> = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema, create: z.union([ tblAgrRightsCreateInputObjectSchema, tblAgrRightsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgrRightsUpdateInputObjectSchema, tblAgrRightsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertArgs>;

export const tblAgrRightsUpsertOneZodSchema = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema, create: z.union([ tblAgrRightsCreateInputObjectSchema, tblAgrRightsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgrRightsUpdateInputObjectSchema, tblAgrRightsUncheckedUpdateInputObjectSchema ]) }).strict();