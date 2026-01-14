import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './objects/tblUserParamsInclude.schema';
import { tblUserParamsOrderByWithRelationInputObjectSchema as tblUserParamsOrderByWithRelationInputObjectSchema } from './objects/tblUserParamsOrderByWithRelationInput.schema';
import { tblUserParamsWhereInputObjectSchema as tblUserParamsWhereInputObjectSchema } from './objects/tblUserParamsWhereInput.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './objects/tblUserParamsWhereUniqueInput.schema';
import { TblUserParamsScalarFieldEnumSchema } from './enums/TblUserParamsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblUserParamsFindFirstSelectSchema: z.ZodType<Prisma.tblUserParamsSelect> = z.object({
    Login: z.boolean().optional(),
    Name: z.boolean().optional(),
    Value: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblUserParamsSelect>;

export const tblUserParamsFindFirstSelectZodSchema = z.object({
    Login: z.boolean().optional(),
    Name: z.boolean().optional(),
    Value: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict();

export const tblUserParamsFindFirstSchema: z.ZodType<Prisma.tblUserParamsFindFirstArgs> = z.object({ select: tblUserParamsFindFirstSelectSchema.optional(), include: z.lazy(() => tblUserParamsIncludeObjectSchema.optional()), orderBy: z.union([tblUserParamsOrderByWithRelationInputObjectSchema, tblUserParamsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserParamsWhereInputObjectSchema.optional(), cursor: tblUserParamsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUserParamsScalarFieldEnumSchema, TblUserParamsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUserParamsFindFirstArgs>;

export const tblUserParamsFindFirstZodSchema = z.object({ select: tblUserParamsFindFirstSelectSchema.optional(), include: z.lazy(() => tblUserParamsIncludeObjectSchema.optional()), orderBy: z.union([tblUserParamsOrderByWithRelationInputObjectSchema, tblUserParamsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserParamsWhereInputObjectSchema.optional(), cursor: tblUserParamsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUserParamsScalarFieldEnumSchema, TblUserParamsScalarFieldEnumSchema.array()]).optional() }).strict();