import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './objects/tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsCreateInputObjectSchema as tblAgrRightsCreateInputObjectSchema } from './objects/tblAgrRightsCreateInput.schema';
import { tblAgrRightsUncheckedCreateInputObjectSchema as tblAgrRightsUncheckedCreateInputObjectSchema } from './objects/tblAgrRightsUncheckedCreateInput.schema';

export const tblAgrRightsCreateOneSchema: z.ZodType<Prisma.tblAgrRightsCreateArgs> = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), data: z.union([tblAgrRightsCreateInputObjectSchema, tblAgrRightsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsCreateArgs>;

export const tblAgrRightsCreateOneZodSchema = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), data: z.union([tblAgrRightsCreateInputObjectSchema, tblAgrRightsUncheckedCreateInputObjectSchema]) }).strict();