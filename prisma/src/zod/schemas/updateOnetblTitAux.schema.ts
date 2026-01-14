import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './objects/tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxUpdateInputObjectSchema as tblTitAuxUpdateInputObjectSchema } from './objects/tblTitAuxUpdateInput.schema';
import { tblTitAuxUncheckedUpdateInputObjectSchema as tblTitAuxUncheckedUpdateInputObjectSchema } from './objects/tblTitAuxUncheckedUpdateInput.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';

export const tblTitAuxUpdateOneSchema: z.ZodType<Prisma.tblTitAuxUpdateArgs> = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), data: z.union([tblTitAuxUpdateInputObjectSchema, tblTitAuxUncheckedUpdateInputObjectSchema]), where: tblTitAuxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuxUpdateArgs>;

export const tblTitAuxUpdateOneZodSchema = z.object({ select: tblTitAuxSelectObjectSchema.optional(), include: tblTitAuxIncludeObjectSchema.optional(), data: z.union([tblTitAuxUpdateInputObjectSchema, tblTitAuxUncheckedUpdateInputObjectSchema]), where: tblTitAuxWhereUniqueInputObjectSchema }).strict();