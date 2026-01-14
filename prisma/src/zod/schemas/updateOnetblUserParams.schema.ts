import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsSelectObjectSchema as tblUserParamsSelectObjectSchema } from './objects/tblUserParamsSelect.schema';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './objects/tblUserParamsInclude.schema';
import { tblUserParamsUpdateInputObjectSchema as tblUserParamsUpdateInputObjectSchema } from './objects/tblUserParamsUpdateInput.schema';
import { tblUserParamsUncheckedUpdateInputObjectSchema as tblUserParamsUncheckedUpdateInputObjectSchema } from './objects/tblUserParamsUncheckedUpdateInput.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './objects/tblUserParamsWhereUniqueInput.schema';

export const tblUserParamsUpdateOneSchema: z.ZodType<Prisma.tblUserParamsUpdateArgs> = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), data: z.union([tblUserParamsUpdateInputObjectSchema, tblUserParamsUncheckedUpdateInputObjectSchema]), where: tblUserParamsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUserParamsUpdateArgs>;

export const tblUserParamsUpdateOneZodSchema = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), data: z.union([tblUserParamsUpdateInputObjectSchema, tblUserParamsUncheckedUpdateInputObjectSchema]), where: tblUserParamsWhereUniqueInputObjectSchema }).strict();