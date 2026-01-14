import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema as dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonOrderByWithRelationInput.schema';
import { dictAdvWithoutInvExcludeReasonWhereInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereInput.schema';
import { dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema as dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonWhereUniqueInput.schema';
import { DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema } from './enums/DictAdvWithoutInvExcludeReasonScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAdvWithoutInvExcludeReasonFindFirstSelectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSelect> = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSelect>;

export const dictAdvWithoutInvExcludeReasonFindFirstSelectZodSchema = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict();

export const dictAdvWithoutInvExcludeReasonFindFirstSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonFindFirstArgs> = z.object({ select: dictAdvWithoutInvExcludeReasonFindFirstSelectSchema.optional(),  orderBy: z.union([dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema, dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional(), cursor: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema, DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonFindFirstArgs>;

export const dictAdvWithoutInvExcludeReasonFindFirstZodSchema = z.object({ select: dictAdvWithoutInvExcludeReasonFindFirstSelectSchema.optional(),  orderBy: z.union([dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema, dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvWithoutInvExcludeReasonWhereInputObjectSchema.optional(), cursor: dictAdvWithoutInvExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema, DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict();