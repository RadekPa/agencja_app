import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsSelectObjectSchema as tblUserParamsSelectObjectSchema } from './objects/tblUserParamsSelect.schema';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './objects/tblUserParamsInclude.schema';
import { tblUserParamsCreateInputObjectSchema as tblUserParamsCreateInputObjectSchema } from './objects/tblUserParamsCreateInput.schema';
import { tblUserParamsUncheckedCreateInputObjectSchema as tblUserParamsUncheckedCreateInputObjectSchema } from './objects/tblUserParamsUncheckedCreateInput.schema';

export const tblUserParamsCreateOneSchema: z.ZodType<Prisma.tblUserParamsCreateArgs> = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), data: z.union([tblUserParamsCreateInputObjectSchema, tblUserParamsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblUserParamsCreateArgs>;

export const tblUserParamsCreateOneZodSchema = z.object({ select: tblUserParamsSelectObjectSchema.optional(), include: tblUserParamsIncludeObjectSchema.optional(), data: z.union([tblUserParamsCreateInputObjectSchema, tblUserParamsUncheckedCreateInputObjectSchema]) }).strict();