import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsWhereInputObjectSchema as tblUserParamsWhereInputObjectSchema } from './objects/tblUserParamsWhereInput.schema';

export const tblUserParamsDeleteManySchema: z.ZodType<Prisma.tblUserParamsDeleteManyArgs> = z.object({ where: tblUserParamsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUserParamsDeleteManyArgs>;

export const tblUserParamsDeleteManyZodSchema = z.object({ where: tblUserParamsWhereInputObjectSchema.optional() }).strict();