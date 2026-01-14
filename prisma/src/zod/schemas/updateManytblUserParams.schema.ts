import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsUpdateManyMutationInputObjectSchema as tblUserParamsUpdateManyMutationInputObjectSchema } from './objects/tblUserParamsUpdateManyMutationInput.schema';
import { tblUserParamsWhereInputObjectSchema as tblUserParamsWhereInputObjectSchema } from './objects/tblUserParamsWhereInput.schema';

export const tblUserParamsUpdateManySchema: z.ZodType<Prisma.tblUserParamsUpdateManyArgs> = z.object({ data: tblUserParamsUpdateManyMutationInputObjectSchema, where: tblUserParamsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUserParamsUpdateManyArgs>;

export const tblUserParamsUpdateManyZodSchema = z.object({ data: tblUserParamsUpdateManyMutationInputObjectSchema, where: tblUserParamsWhereInputObjectSchema.optional() }).strict();