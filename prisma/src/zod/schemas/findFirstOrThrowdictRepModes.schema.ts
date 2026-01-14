import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesOrderByWithRelationInputObjectSchema as dictRepModesOrderByWithRelationInputObjectSchema } from './objects/dictRepModesOrderByWithRelationInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './objects/dictRepModesWhereInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';
import { DictRepModesScalarFieldEnumSchema } from './enums/DictRepModesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRepModesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictRepModesSelect> = z.object({
    RepModeID: z.boolean().optional(),
    RepModeDesc: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRepModesSelect>;

export const dictRepModesFindFirstOrThrowSelectZodSchema = z.object({
    RepModeID: z.boolean().optional(),
    RepModeDesc: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRepModesFindFirstOrThrowSchema: z.ZodType<Prisma.dictRepModesFindFirstOrThrowArgs> = z.object({ select: dictRepModesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictRepModesIncludeObjectSchema.optional()), orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRepModesScalarFieldEnumSchema, DictRepModesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRepModesFindFirstOrThrowArgs>;

export const dictRepModesFindFirstOrThrowZodSchema = z.object({ select: dictRepModesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictRepModesIncludeObjectSchema.optional()), orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRepModesScalarFieldEnumSchema, DictRepModesScalarFieldEnumSchema.array()]).optional() }).strict();