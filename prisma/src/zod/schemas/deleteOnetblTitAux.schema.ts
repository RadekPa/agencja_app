import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';

export const tblTitAuxDeleteOneSchema: z.ZodType<Prisma.tblTitAuxDeleteArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuxDeleteArgs>;

export const tblTitAuxDeleteOneZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), where: tblTitAuxWhereUniqueInputObjectSchema }).strict();