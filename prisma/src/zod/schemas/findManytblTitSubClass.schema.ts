import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassOrderByWithRelationInputObjectSchema as tblTitSubClassOrderByWithRelationInputObjectSchema } from './objects/tblTitSubClassOrderByWithRelationInput.schema';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './objects/tblTitSubClassWhereInput.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';
import { TblTitSubClassScalarFieldEnumSchema } from './enums/TblTitSubClassScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitSubClassFindManySelectSchema: z.ZodType<Prisma.tblTitSubClassSelect> = z.object({
    SubClassCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassSelect>;

export const tblTitSubClassFindManySelectZodSchema = z.object({
    SubClassCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional()
  }).strict();

export const tblTitSubClassFindManySchema: z.ZodType<Prisma.tblTitSubClassFindManyArgs> = z.object({ select: tblTitSubClassFindManySelectSchema.optional(), include: z.lazy(() => tblTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitSubClassScalarFieldEnumSchema, TblTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassFindManyArgs>;

export const tblTitSubClassFindManyZodSchema = z.object({ select: tblTitSubClassFindManySelectSchema.optional(), include: z.lazy(() => tblTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitSubClassScalarFieldEnumSchema, TblTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict();