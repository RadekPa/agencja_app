import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeOrderByWithRelationInputObjectSchema as dictRoyTypeOrderByWithRelationInputObjectSchema } from './objects/dictRoyTypeOrderByWithRelationInput.schema';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './objects/dictRoyTypeWhereInput.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';
import { DictRoyTypeScalarFieldEnumSchema } from './enums/DictRoyTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRoyTypeFindFirstSelectSchema: z.ZodType<Prisma.dictRoyTypeSelect> = z.object({
    RoyTypeID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyTypeDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeSelect>;

export const dictRoyTypeFindFirstSelectZodSchema = z.object({
    RoyTypeID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyTypeDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict();

export const dictRoyTypeFindFirstSchema: z.ZodType<Prisma.dictRoyTypeFindFirstArgs> = z.object({ select: dictRoyTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictRoyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyTypeScalarFieldEnumSchema, DictRoyTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeFindFirstArgs>;

export const dictRoyTypeFindFirstZodSchema = z.object({ select: dictRoyTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictRoyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyTypeScalarFieldEnumSchema, DictRoyTypeScalarFieldEnumSchema.array()]).optional() }).strict();