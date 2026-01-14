import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './objects/tblPlacesInclude.schema';
import { tblPlacesOrderByWithRelationInputObjectSchema as tblPlacesOrderByWithRelationInputObjectSchema } from './objects/tblPlacesOrderByWithRelationInput.schema';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './objects/tblPlacesWhereInput.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './objects/tblPlacesWhereUniqueInput.schema';
import { TblPlacesScalarFieldEnumSchema } from './enums/TblPlacesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPlacesFindManySelectSchema: z.ZodType<Prisma.tblPlacesSelect> = z.object({
    PlaceID: z.boolean().optional(),
    PlaceDesc: z.boolean().optional(),
    tblUserAccess: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPlacesSelect>;

export const tblPlacesFindManySelectZodSchema = z.object({
    PlaceID: z.boolean().optional(),
    PlaceDesc: z.boolean().optional(),
    tblUserAccess: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblPlacesFindManySchema: z.ZodType<Prisma.tblPlacesFindManyArgs> = z.object({ select: tblPlacesFindManySelectSchema.optional(), include: z.lazy(() => tblPlacesIncludeObjectSchema.optional()), orderBy: z.union([tblPlacesOrderByWithRelationInputObjectSchema, tblPlacesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPlacesWhereInputObjectSchema.optional(), cursor: tblPlacesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPlacesScalarFieldEnumSchema, TblPlacesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPlacesFindManyArgs>;

export const tblPlacesFindManyZodSchema = z.object({ select: tblPlacesFindManySelectSchema.optional(), include: z.lazy(() => tblPlacesIncludeObjectSchema.optional()), orderBy: z.union([tblPlacesOrderByWithRelationInputObjectSchema, tblPlacesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPlacesWhereInputObjectSchema.optional(), cursor: tblPlacesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPlacesScalarFieldEnumSchema, TblPlacesScalarFieldEnumSchema.array()]).optional() }).strict();