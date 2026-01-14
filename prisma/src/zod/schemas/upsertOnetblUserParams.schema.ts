import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsSelectObjectSchema as tblUserParamsSelectObjectSchema } from './objects/tblUserParamsSelect.schema';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './objects/tblUserParamsInclude.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './objects/tblUserParamsWhereUniqueInput.schema';
import { tblUserParamsCreateInputObjectSchema as tblUserParamsCreateInputObjectSchema } from './objects/tblUserParamsCreateInput.schema';
import { tblUserParamsUncheckedCreateInputObjectSchema as tblUserParamsUncheckedCreateInputObjectSchema } from './objects/tblUserParamsUncheckedCreateInput.schema';
import { tblUserParamsUpdateInputObjectSchema as tblUserParamsUpdateInputObjectSchema } from './objects/tblUserParamsUpdateInput.schema';
import { tblUserParamsUncheckedUpdateInputObjectSchema as tblUserParamsUncheckedUpdateInputObjectSchema } from './objects/tblUserParamsUncheckedUpdateInput.schema';

export const tblUserParamsUpsertOneSchema: z.ZodType<Prisma.tblUserParamsUpsertArgs> = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), where: tblUserParamsWhereUniqueInputObjectSchema, create: z.union([ tblUserParamsCreateInputObjectSchema, tblUserParamsUncheckedCreateInputObjectSchema ]), update: z.union([ tblUserParamsUpdateInputObjectSchema, tblUserParamsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblUserParamsUpsertArgs>;

export const tblUserParamsUpsertOneZodSchema = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), where: tblUserParamsWhereUniqueInputObjectSchema, create: z.union([ tblUserParamsCreateInputObjectSchema, tblUserParamsUncheckedCreateInputObjectSchema ]), update: z.union([ tblUserParamsUpdateInputObjectSchema, tblUserParamsUncheckedUpdateInputObjectSchema ]) }).strict();