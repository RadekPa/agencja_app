import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './objects/tblTitAuxInclude.schema';
import { tblTitAuxOrderByWithRelationInputObjectSchema as tblTitAuxOrderByWithRelationInputObjectSchema } from './objects/tblTitAuxOrderByWithRelationInput.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './objects/tblTitAuxWhereInput.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';
import { TblTitAuxScalarFieldEnumSchema } from './enums/TblTitAuxScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitAuxFindFirstSelectSchema: z.ZodType<Prisma.tblTitAuxSelect> = z.object({
    TitleID: z.boolean().optional(),
    CopyrightLine: z.boolean().optional(),
    tblTitles: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitAuxSelect>;

export const tblTitAuxFindFirstSelectZodSchema = z.object({
    TitleID: z.boolean().optional(),
    CopyrightLine: z.boolean().optional(),
    tblTitles: z.boolean().optional()
  }).strict();

export const tblTitAuxFindFirstSchema: z.ZodType<Prisma.tblTitAuxFindFirstArgs> = z.object({ select: tblTitAuxFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitAuxIncludeObjectSchema.optional()), orderBy: z.union([tblTitAuxOrderByWithRelationInputObjectSchema, tblTitAuxOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuxWhereInputObjectSchema.optional(), cursor: tblTitAuxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitAuxScalarFieldEnumSchema, TblTitAuxScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuxFindFirstArgs>;

export const tblTitAuxFindFirstZodSchema = z.object({ select: tblTitAuxFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitAuxIncludeObjectSchema.optional()), orderBy: z.union([tblTitAuxOrderByWithRelationInputObjectSchema, tblTitAuxOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuxWhereInputObjectSchema.optional(), cursor: tblTitAuxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitAuxScalarFieldEnumSchema, TblTitAuxScalarFieldEnumSchema.array()]).optional() }).strict();