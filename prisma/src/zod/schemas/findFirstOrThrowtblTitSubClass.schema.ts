import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassOrderByWithRelationInputObjectSchema as tblTitSubClassOrderByWithRelationInputObjectSchema } from './objects/tblTitSubClassOrderByWithRelationInput.schema';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './objects/tblTitSubClassWhereInput.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';
import { TblTitSubClassScalarFieldEnumSchema } from './enums/TblTitSubClassScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitSubClassFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblTitSubClassSelect> = z.object({
    SubClassCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassSelect>;

export const tblTitSubClassFindFirstOrThrowSelectZodSchema = z.object({
    SubClassCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional()
  }).strict();

export const tblTitSubClassFindFirstOrThrowSchema: z.ZodType<Prisma.tblTitSubClassFindFirstOrThrowArgs> = z.object({ select: tblTitSubClassFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitSubClassScalarFieldEnumSchema, TblTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassFindFirstOrThrowArgs>;

export const tblTitSubClassFindFirstOrThrowZodSchema = z.object({ select: tblTitSubClassFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitSubClassScalarFieldEnumSchema, TblTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict();