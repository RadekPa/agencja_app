import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxCreateInputObjectSchema as tblTitAuxCreateInputObjectSchema } from './objects/tblTitAuxCreateInput.schema';
import { tblTitAuxUncheckedCreateInputObjectSchema as tblTitAuxUncheckedCreateInputObjectSchema } from './objects/tblTitAuxUncheckedCreateInput.schema';

export const tblTitAuxCreateOneSchema: z.ZodType<Prisma.tblTitAuxCreateArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), data: z.union([tblTitAuxCreateInputObjectSchema, tblTitAuxUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTitAuxCreateArgs>;

export const tblTitAuxCreateOneZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), data: z.union([tblTitAuxCreateInputObjectSchema, tblTitAuxUncheckedCreateInputObjectSchema]) }).strict();