import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeOrderByWithRelationInputObjectSchema as dictRoyTypeOrderByWithRelationInputObjectSchema } from './objects/dictRoyTypeOrderByWithRelationInput.schema';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './objects/dictRoyTypeWhereInput.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';
import { DictRoyTypeScalarFieldEnumSchema } from './enums/DictRoyTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRoyTypeFindManySelectSchema: z.ZodType<Prisma.dictRoyTypeSelect> = z.object({
    RoyTypeID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyTypeDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeSelect>;

export const dictRoyTypeFindManySelectZodSchema = z.object({
    RoyTypeID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyTypeDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict();

export const dictRoyTypeFindManySchema: z.ZodType<Prisma.dictRoyTypeFindManyArgs> = z.object({ select: dictRoyTypeFindManySelectSchema.optional(), include: z.lazy(() => dictRoyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyTypeScalarFieldEnumSchema, DictRoyTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeFindManyArgs>;

export const dictRoyTypeFindManyZodSchema = z.object({ select: dictRoyTypeFindManySelectSchema.optional(), include: z.lazy(() => dictRoyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyTypeScalarFieldEnumSchema, DictRoyTypeScalarFieldEnumSchema.array()]).optional() }).strict();