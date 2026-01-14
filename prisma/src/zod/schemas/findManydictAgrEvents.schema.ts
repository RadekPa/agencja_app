import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './objects/dictAgrEventsInclude.schema';
import { dictAgrEventsOrderByWithRelationInputObjectSchema as dictAgrEventsOrderByWithRelationInputObjectSchema } from './objects/dictAgrEventsOrderByWithRelationInput.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './objects/dictAgrEventsWhereInput.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './objects/dictAgrEventsWhereUniqueInput.schema';
import { DictAgrEventsScalarFieldEnumSchema } from './enums/DictAgrEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAgrEventsFindManySelectSchema: z.ZodType<Prisma.dictAgrEventsSelect> = z.object({
    AgrEventCode: z.boolean().optional(),
    AgrEventDesc: z.boolean().optional(),
    Status: z.boolean().optional(),
    tblAgrEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsSelect>;

export const dictAgrEventsFindManySelectZodSchema = z.object({
    AgrEventCode: z.boolean().optional(),
    AgrEventDesc: z.boolean().optional(),
    Status: z.boolean().optional(),
    tblAgrEvents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictAgrEventsFindManySchema: z.ZodType<Prisma.dictAgrEventsFindManyArgs> = z.object({ select: dictAgrEventsFindManySelectSchema.optional(), include: z.lazy(() => dictAgrEventsIncludeObjectSchema.optional()), orderBy: z.union([dictAgrEventsOrderByWithRelationInputObjectSchema, dictAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrEventsWhereInputObjectSchema.optional(), cursor: dictAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAgrEventsScalarFieldEnumSchema, DictAgrEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsFindManyArgs>;

export const dictAgrEventsFindManyZodSchema = z.object({ select: dictAgrEventsFindManySelectSchema.optional(), include: z.lazy(() => dictAgrEventsIncludeObjectSchema.optional()), orderBy: z.union([dictAgrEventsOrderByWithRelationInputObjectSchema, dictAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrEventsWhereInputObjectSchema.optional(), cursor: dictAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAgrEventsScalarFieldEnumSchema, DictAgrEventsScalarFieldEnumSchema.array()]).optional() }).strict();