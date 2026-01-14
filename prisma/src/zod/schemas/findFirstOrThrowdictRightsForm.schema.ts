import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './objects/dictRightsFormInclude.schema';
import { dictRightsFormOrderByWithRelationInputObjectSchema as dictRightsFormOrderByWithRelationInputObjectSchema } from './objects/dictRightsFormOrderByWithRelationInput.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './objects/dictRightsFormWhereInput.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './objects/dictRightsFormWhereUniqueInput.schema';
import { DictRightsFormScalarFieldEnumSchema } from './enums/DictRightsFormScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRightsFormFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictRightsFormSelect> = z.object({
    RightFormID: z.boolean().optional(),
    RightFormDesc: z.boolean().optional(),
    RightFormPL: z.boolean().optional(),
    RightFormAbbPL: z.boolean().optional(),
    RightFormAbbEN: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRightsFormSelect>;

export const dictRightsFormFindFirstOrThrowSelectZodSchema = z.object({
    RightFormID: z.boolean().optional(),
    RightFormDesc: z.boolean().optional(),
    RightFormPL: z.boolean().optional(),
    RightFormAbbPL: z.boolean().optional(),
    RightFormAbbEN: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRightsFormFindFirstOrThrowSchema: z.ZodType<Prisma.dictRightsFormFindFirstOrThrowArgs> = z.object({ select: dictRightsFormFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictRightsFormIncludeObjectSchema.optional()), orderBy: z.union([dictRightsFormOrderByWithRelationInputObjectSchema, dictRightsFormOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRightsFormWhereInputObjectSchema.optional(), cursor: dictRightsFormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRightsFormScalarFieldEnumSchema, DictRightsFormScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRightsFormFindFirstOrThrowArgs>;

export const dictRightsFormFindFirstOrThrowZodSchema = z.object({ select: dictRightsFormFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictRightsFormIncludeObjectSchema.optional()), orderBy: z.union([dictRightsFormOrderByWithRelationInputObjectSchema, dictRightsFormOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRightsFormWhereInputObjectSchema.optional(), cursor: dictRightsFormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRightsFormScalarFieldEnumSchema, DictRightsFormScalarFieldEnumSchema.array()]).optional() }).strict();