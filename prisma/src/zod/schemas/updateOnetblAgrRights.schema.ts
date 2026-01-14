import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './objects/tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsUpdateInputObjectSchema as tblAgrRightsUpdateInputObjectSchema } from './objects/tblAgrRightsUpdateInput.schema';
import { tblAgrRightsUncheckedUpdateInputObjectSchema as tblAgrRightsUncheckedUpdateInputObjectSchema } from './objects/tblAgrRightsUncheckedUpdateInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';

export const tblAgrRightsUpdateOneSchema: z.ZodType<Prisma.tblAgrRightsUpdateArgs> = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), data: z.union([tblAgrRightsUpdateInputObjectSchema, tblAgrRightsUncheckedUpdateInputObjectSchema]), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateArgs>;

export const tblAgrRightsUpdateOneZodSchema = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), data: z.union([tblAgrRightsUpdateInputObjectSchema, tblAgrRightsUncheckedUpdateInputObjectSchema]), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict();