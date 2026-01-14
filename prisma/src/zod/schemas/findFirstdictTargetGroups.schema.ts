import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsOrderByWithRelationInputObjectSchema as dictTargetGroupsOrderByWithRelationInputObjectSchema } from './objects/dictTargetGroupsOrderByWithRelationInput.schema';
import { dictTargetGroupsWhereInputObjectSchema as dictTargetGroupsWhereInputObjectSchema } from './objects/dictTargetGroupsWhereInput.schema';
import { dictTargetGroupsWhereUniqueInputObjectSchema as dictTargetGroupsWhereUniqueInputObjectSchema } from './objects/dictTargetGroupsWhereUniqueInput.schema';
import { DictTargetGroupsScalarFieldEnumSchema } from './enums/DictTargetGroupsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictTargetGroupsFindFirstSelectSchema: z.ZodType<Prisma.dictTargetGroupsSelect> = z.object({
    TargetGroupID: z.boolean().optional(),
    TargetGroupDesc: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsSelect>;

export const dictTargetGroupsFindFirstSelectZodSchema = z.object({
    TargetGroupID: z.boolean().optional(),
    TargetGroupDesc: z.boolean().optional()
  }).strict();

export const dictTargetGroupsFindFirstSchema: z.ZodType<Prisma.dictTargetGroupsFindFirstArgs> = z.object({ select: dictTargetGroupsFindFirstSelectSchema.optional(),  orderBy: z.union([dictTargetGroupsOrderByWithRelationInputObjectSchema, dictTargetGroupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTargetGroupsWhereInputObjectSchema.optional(), cursor: dictTargetGroupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTargetGroupsScalarFieldEnumSchema, DictTargetGroupsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsFindFirstArgs>;

export const dictTargetGroupsFindFirstZodSchema = z.object({ select: dictTargetGroupsFindFirstSelectSchema.optional(),  orderBy: z.union([dictTargetGroupsOrderByWithRelationInputObjectSchema, dictTargetGroupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTargetGroupsWhereInputObjectSchema.optional(), cursor: dictTargetGroupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTargetGroupsScalarFieldEnumSchema, DictTargetGroupsScalarFieldEnumSchema.array()]).optional() }).strict();