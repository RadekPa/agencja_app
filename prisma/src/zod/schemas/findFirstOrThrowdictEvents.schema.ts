import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsOrderByWithRelationInputObjectSchema as dictEventsOrderByWithRelationInputObjectSchema } from './objects/dictEventsOrderByWithRelationInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './objects/dictEventsWhereInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';
import { DictEventsScalarFieldEnumSchema } from './enums/DictEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictEventsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictEventsSelect> = z.object({
    EventCode: z.boolean().optional(),
    EventDesc: z.boolean().optional(),
    tblSubmEvents: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictEventsSelect>;

export const dictEventsFindFirstOrThrowSelectZodSchema = z.object({
    EventCode: z.boolean().optional(),
    EventDesc: z.boolean().optional(),
    tblSubmEvents: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictEventsFindFirstOrThrowSchema: z.ZodType<Prisma.dictEventsFindFirstOrThrowArgs> = z.object({ select: dictEventsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictEventsIncludeObjectSchema.optional()), orderBy: z.union([dictEventsOrderByWithRelationInputObjectSchema, dictEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictEventsWhereInputObjectSchema.optional(), cursor: dictEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictEventsScalarFieldEnumSchema, DictEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictEventsFindFirstOrThrowArgs>;

export const dictEventsFindFirstOrThrowZodSchema = z.object({ select: dictEventsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictEventsIncludeObjectSchema.optional()), orderBy: z.union([dictEventsOrderByWithRelationInputObjectSchema, dictEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictEventsWhereInputObjectSchema.optional(), cursor: dictEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictEventsScalarFieldEnumSchema, DictEventsScalarFieldEnumSchema.array()]).optional() }).strict();