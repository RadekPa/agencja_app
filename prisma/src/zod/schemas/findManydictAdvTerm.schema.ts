import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermOrderByWithRelationInputObjectSchema as dictAdvTermOrderByWithRelationInputObjectSchema } from './objects/dictAdvTermOrderByWithRelationInput.schema';
import { dictAdvTermWhereInputObjectSchema as dictAdvTermWhereInputObjectSchema } from './objects/dictAdvTermWhereInput.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';
import { DictAdvTermScalarFieldEnumSchema } from './enums/DictAdvTermScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAdvTermFindManySelectSchema: z.ZodType<Prisma.dictAdvTermSelect> = z.object({
    AdvTermId: z.boolean().optional(),
    AdvTermDesc: z.boolean().optional(),
    AdvTermPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAdvTermSelect>;

export const dictAdvTermFindManySelectZodSchema = z.object({
    AdvTermId: z.boolean().optional(),
    AdvTermDesc: z.boolean().optional(),
    AdvTermPL: z.boolean().optional()
  }).strict();

export const dictAdvTermFindManySchema: z.ZodType<Prisma.dictAdvTermFindManyArgs> = z.object({ select: dictAdvTermFindManySelectSchema.optional(),  orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTermScalarFieldEnumSchema, DictAdvTermScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTermFindManyArgs>;

export const dictAdvTermFindManyZodSchema = z.object({ select: dictAdvTermFindManySelectSchema.optional(),  orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTermScalarFieldEnumSchema, DictAdvTermScalarFieldEnumSchema.array()]).optional() }).strict();