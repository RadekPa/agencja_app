import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalOrderByWithRelationInputObjectSchema as HelionLocalOrderByWithRelationInputObjectSchema } from './objects/HelionLocalOrderByWithRelationInput.schema';
import { HelionLocalWhereInputObjectSchema as HelionLocalWhereInputObjectSchema } from './objects/HelionLocalWhereInput.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';
import { HelionLocalScalarFieldEnumSchema } from './enums/HelionLocalScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HelionLocalFindFirstSelectSchema: z.ZodType<Prisma.HelionLocalSelect> = z.object({
    ISBNORG: z.boolean().optional(),
    ISBNHELION: z.boolean().optional(),
    TYTULORG: z.boolean().optional(),
    TYTULHELION: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HelionLocalSelect>;

export const HelionLocalFindFirstSelectZodSchema = z.object({
    ISBNORG: z.boolean().optional(),
    ISBNHELION: z.boolean().optional(),
    TYTULORG: z.boolean().optional(),
    TYTULHELION: z.boolean().optional()
  }).strict();

export const HelionLocalFindFirstSchema: z.ZodType<Prisma.HelionLocalFindFirstArgs> = z.object({ select: HelionLocalFindFirstSelectSchema.optional(),  orderBy: z.union([HelionLocalOrderByWithRelationInputObjectSchema, HelionLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: HelionLocalWhereInputObjectSchema.optional(), cursor: HelionLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HelionLocalScalarFieldEnumSchema, HelionLocalScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HelionLocalFindFirstArgs>;

export const HelionLocalFindFirstZodSchema = z.object({ select: HelionLocalFindFirstSelectSchema.optional(),  orderBy: z.union([HelionLocalOrderByWithRelationInputObjectSchema, HelionLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: HelionLocalWhereInputObjectSchema.optional(), cursor: HelionLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HelionLocalScalarFieldEnumSchema, HelionLocalScalarFieldEnumSchema.array()]).optional() }).strict();