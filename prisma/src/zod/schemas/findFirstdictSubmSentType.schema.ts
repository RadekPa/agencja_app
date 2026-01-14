import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeOrderByWithRelationInputObjectSchema as dictSubmSentTypeOrderByWithRelationInputObjectSchema } from './objects/dictSubmSentTypeOrderByWithRelationInput.schema';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './objects/dictSubmSentTypeWhereInput.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './objects/dictSubmSentTypeWhereUniqueInput.schema';
import { DictSubmSentTypeScalarFieldEnumSchema } from './enums/DictSubmSentTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictSubmSentTypeFindFirstSelectSchema: z.ZodType<Prisma.dictSubmSentTypeSelect> = z.object({
    SubmSentTypeID: z.boolean().optional(),
    SubmSentType: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeSelect>;

export const dictSubmSentTypeFindFirstSelectZodSchema = z.object({
    SubmSentTypeID: z.boolean().optional(),
    SubmSentType: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictSubmSentTypeFindFirstSchema: z.ZodType<Prisma.dictSubmSentTypeFindFirstArgs> = z.object({ select: dictSubmSentTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictSubmSentTypeIncludeObjectSchema.optional()), orderBy: z.union([dictSubmSentTypeOrderByWithRelationInputObjectSchema, dictSubmSentTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictSubmSentTypeWhereInputObjectSchema.optional(), cursor: dictSubmSentTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictSubmSentTypeScalarFieldEnumSchema, DictSubmSentTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeFindFirstArgs>;

export const dictSubmSentTypeFindFirstZodSchema = z.object({ select: dictSubmSentTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictSubmSentTypeIncludeObjectSchema.optional()), orderBy: z.union([dictSubmSentTypeOrderByWithRelationInputObjectSchema, dictSubmSentTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictSubmSentTypeWhereInputObjectSchema.optional(), cursor: dictSubmSentTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictSubmSentTypeScalarFieldEnumSchema, DictSubmSentTypeScalarFieldEnumSchema.array()]).optional() }).strict();