import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './objects/dictCoverFormatInclude.schema';
import { dictCoverFormatOrderByWithRelationInputObjectSchema as dictCoverFormatOrderByWithRelationInputObjectSchema } from './objects/dictCoverFormatOrderByWithRelationInput.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './objects/dictCoverFormatWhereInput.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './objects/dictCoverFormatWhereUniqueInput.schema';
import { DictCoverFormatScalarFieldEnumSchema } from './enums/DictCoverFormatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCoverFormatFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictCoverFormatSelect> = z.object({
    CoverFormatID: z.boolean().optional(),
    CoverFormatDesc: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatSelect>;

export const dictCoverFormatFindFirstOrThrowSelectZodSchema = z.object({
    CoverFormatID: z.boolean().optional(),
    CoverFormatDesc: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictCoverFormatFindFirstOrThrowSchema: z.ZodType<Prisma.dictCoverFormatFindFirstOrThrowArgs> = z.object({ select: dictCoverFormatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictCoverFormatIncludeObjectSchema.optional()), orderBy: z.union([dictCoverFormatOrderByWithRelationInputObjectSchema, dictCoverFormatOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCoverFormatWhereInputObjectSchema.optional(), cursor: dictCoverFormatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCoverFormatScalarFieldEnumSchema, DictCoverFormatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatFindFirstOrThrowArgs>;

export const dictCoverFormatFindFirstOrThrowZodSchema = z.object({ select: dictCoverFormatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictCoverFormatIncludeObjectSchema.optional()), orderBy: z.union([dictCoverFormatOrderByWithRelationInputObjectSchema, dictCoverFormatOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCoverFormatWhereInputObjectSchema.optional(), cursor: dictCoverFormatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCoverFormatScalarFieldEnumSchema, DictCoverFormatScalarFieldEnumSchema.array()]).optional() }).strict();