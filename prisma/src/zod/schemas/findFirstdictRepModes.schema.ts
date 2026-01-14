import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesOrderByWithRelationInputObjectSchema as dictRepModesOrderByWithRelationInputObjectSchema } from './objects/dictRepModesOrderByWithRelationInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './objects/dictRepModesWhereInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';
import { DictRepModesScalarFieldEnumSchema } from './enums/DictRepModesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRepModesFindFirstSelectSchema: z.ZodType<Prisma.dictRepModesSelect> = z.object({
    RepModeID: z.boolean().optional(),
    RepModeDesc: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRepModesSelect>;

export const dictRepModesFindFirstSelectZodSchema = z.object({
    RepModeID: z.boolean().optional(),
    RepModeDesc: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRepModesFindFirstSchema: z.ZodType<Prisma.dictRepModesFindFirstArgs> = z.object({ select: dictRepModesFindFirstSelectSchema.optional(), include: z.lazy(() => dictRepModesIncludeObjectSchema.optional()), orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRepModesScalarFieldEnumSchema, DictRepModesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRepModesFindFirstArgs>;

export const dictRepModesFindFirstZodSchema = z.object({ select: dictRepModesFindFirstSelectSchema.optional(), include: z.lazy(() => dictRepModesIncludeObjectSchema.optional()), orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRepModesScalarFieldEnumSchema, DictRepModesScalarFieldEnumSchema.array()]).optional() }).strict();