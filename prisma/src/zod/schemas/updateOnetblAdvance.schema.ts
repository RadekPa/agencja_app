import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceSelectObjectSchema as tblAdvanceSelectObjectSchema } from './objects/tblAdvanceSelect.schema';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './objects/tblAdvanceInclude.schema';
import { tblAdvanceUpdateInputObjectSchema as tblAdvanceUpdateInputObjectSchema } from './objects/tblAdvanceUpdateInput.schema';
import { tblAdvanceUncheckedUpdateInputObjectSchema as tblAdvanceUncheckedUpdateInputObjectSchema } from './objects/tblAdvanceUncheckedUpdateInput.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './objects/tblAdvanceWhereUniqueInput.schema';

export const tblAdvanceUpdateOneSchema: z.ZodType<Prisma.tblAdvanceUpdateArgs> = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), data: z.union([tblAdvanceUpdateInputObjectSchema, tblAdvanceUncheckedUpdateInputObjectSchema]), where: tblAdvanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAdvanceUpdateArgs>;

export const tblAdvanceUpdateOneZodSchema = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), data: z.union([tblAdvanceUpdateInputObjectSchema, tblAdvanceUncheckedUpdateInputObjectSchema]), where: tblAdvanceWhereUniqueInputObjectSchema }).strict();