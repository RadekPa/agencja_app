import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeOrderByWithRelationInputObjectSchema as lkpPayTypeOrderByWithRelationInputObjectSchema } from './objects/lkpPayTypeOrderByWithRelationInput.schema';
import { lkpPayTypeWhereInputObjectSchema as lkpPayTypeWhereInputObjectSchema } from './objects/lkpPayTypeWhereInput.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';
import { LkpPayTypeScalarFieldEnumSchema } from './enums/LkpPayTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const lkpPayTypeFindManySelectSchema: z.ZodType<Prisma.lkpPayTypeSelect> = z.object({
    PayTypeID: z.boolean().optional(),
    Description: z.boolean().optional(),
    DescriptionPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeSelect>;

export const lkpPayTypeFindManySelectZodSchema = z.object({
    PayTypeID: z.boolean().optional(),
    Description: z.boolean().optional(),
    DescriptionPL: z.boolean().optional()
  }).strict();

export const lkpPayTypeFindManySchema: z.ZodType<Prisma.lkpPayTypeFindManyArgs> = z.object({ select: lkpPayTypeFindManySelectSchema.optional(),  orderBy: z.union([lkpPayTypeOrderByWithRelationInputObjectSchema, lkpPayTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: lkpPayTypeWhereInputObjectSchema.optional(), cursor: lkpPayTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LkpPayTypeScalarFieldEnumSchema, LkpPayTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeFindManyArgs>;

export const lkpPayTypeFindManyZodSchema = z.object({ select: lkpPayTypeFindManySelectSchema.optional(),  orderBy: z.union([lkpPayTypeOrderByWithRelationInputObjectSchema, lkpPayTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: lkpPayTypeWhereInputObjectSchema.optional(), cursor: lkpPayTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LkpPayTypeScalarFieldEnumSchema, LkpPayTypeScalarFieldEnumSchema.array()]).optional() }).strict();