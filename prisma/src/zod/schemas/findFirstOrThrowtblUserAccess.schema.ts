import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessOrderByWithRelationInputObjectSchema as tblUserAccessOrderByWithRelationInputObjectSchema } from './objects/tblUserAccessOrderByWithRelationInput.schema';
import { tblUserAccessWhereInputObjectSchema as tblUserAccessWhereInputObjectSchema } from './objects/tblUserAccessWhereInput.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';
import { TblUserAccessScalarFieldEnumSchema } from './enums/TblUserAccessScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblUserAccessFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblUserAccessSelect> = z.object({
    Login: z.boolean().optional(),
    PlaceID: z.boolean().optional(),
    tblPlaces: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblUserAccessSelect>;

export const tblUserAccessFindFirstOrThrowSelectZodSchema = z.object({
    Login: z.boolean().optional(),
    PlaceID: z.boolean().optional(),
    tblPlaces: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict();

export const tblUserAccessFindFirstOrThrowSchema: z.ZodType<Prisma.tblUserAccessFindFirstOrThrowArgs> = z.object({ select: tblUserAccessFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblUserAccessIncludeObjectSchema.optional()), orderBy: z.union([tblUserAccessOrderByWithRelationInputObjectSchema, tblUserAccessOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserAccessWhereInputObjectSchema.optional(), cursor: tblUserAccessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUserAccessScalarFieldEnumSchema, TblUserAccessScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUserAccessFindFirstOrThrowArgs>;

export const tblUserAccessFindFirstOrThrowZodSchema = z.object({ select: tblUserAccessFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblUserAccessIncludeObjectSchema.optional()), orderBy: z.union([tblUserAccessOrderByWithRelationInputObjectSchema, tblUserAccessOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserAccessWhereInputObjectSchema.optional(), cursor: tblUserAccessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUserAccessScalarFieldEnumSchema, TblUserAccessScalarFieldEnumSchema.array()]).optional() }).strict();