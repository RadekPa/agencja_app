import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeOrderByWithRelationInputObjectSchema as dictCopyTypeOrderByWithRelationInputObjectSchema } from './objects/dictCopyTypeOrderByWithRelationInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './objects/dictCopyTypeWhereInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';
import { DictCopyTypeScalarFieldEnumSchema } from './enums/DictCopyTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCopyTypeFindManySelectSchema: z.ZodType<Prisma.dictCopyTypeSelect> = z.object({
    CopyTypeID: z.boolean().optional(),
    CopyType: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeSelect>;

export const dictCopyTypeFindManySelectZodSchema = z.object({
    CopyTypeID: z.boolean().optional(),
    CopyType: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictCopyTypeFindManySchema: z.ZodType<Prisma.dictCopyTypeFindManyArgs> = z.object({ select: dictCopyTypeFindManySelectSchema.optional(), include: z.lazy(() => dictCopyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictCopyTypeOrderByWithRelationInputObjectSchema, dictCopyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCopyTypeWhereInputObjectSchema.optional(), cursor: dictCopyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCopyTypeScalarFieldEnumSchema, DictCopyTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeFindManyArgs>;

export const dictCopyTypeFindManyZodSchema = z.object({ select: dictCopyTypeFindManySelectSchema.optional(), include: z.lazy(() => dictCopyTypeIncludeObjectSchema.optional()), orderBy: z.union([dictCopyTypeOrderByWithRelationInputObjectSchema, dictCopyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCopyTypeWhereInputObjectSchema.optional(), cursor: dictCopyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCopyTypeScalarFieldEnumSchema, DictCopyTypeScalarFieldEnumSchema.array()]).optional() }).strict();