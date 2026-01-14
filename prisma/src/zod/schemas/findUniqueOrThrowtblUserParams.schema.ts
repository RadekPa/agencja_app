import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsSelectObjectSchema as tblUserParamsSelectObjectSchema } from './objects/tblUserParamsSelect.schema';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './objects/tblUserParamsInclude.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './objects/tblUserParamsWhereUniqueInput.schema';

export const tblUserParamsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblUserParamsFindUniqueOrThrowArgs> = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), where: tblUserParamsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUserParamsFindUniqueOrThrowArgs>;

export const tblUserParamsFindUniqueOrThrowZodSchema = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), where: tblUserParamsWhereUniqueInputObjectSchema }).strict();