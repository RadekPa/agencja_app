import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermOrderByWithRelationInputObjectSchema as dictAdvTermOrderByWithRelationInputObjectSchema } from './objects/dictAdvTermOrderByWithRelationInput.schema';
import { dictAdvTermWhereInputObjectSchema as dictAdvTermWhereInputObjectSchema } from './objects/dictAdvTermWhereInput.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';
import { DictAdvTermScalarFieldEnumSchema } from './enums/DictAdvTermScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAdvTermFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictAdvTermSelect> = z.object({
    AdvTermId: z.boolean().optional(),
    AdvTermDesc: z.boolean().optional(),
    AdvTermPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAdvTermSelect>;

export const dictAdvTermFindFirstOrThrowSelectZodSchema = z.object({
    AdvTermId: z.boolean().optional(),
    AdvTermDesc: z.boolean().optional(),
    AdvTermPL: z.boolean().optional()
  }).strict();

export const dictAdvTermFindFirstOrThrowSchema: z.ZodType<Prisma.dictAdvTermFindFirstOrThrowArgs> = z.object({ select: dictAdvTermFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTermScalarFieldEnumSchema, DictAdvTermScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTermFindFirstOrThrowArgs>;

export const dictAdvTermFindFirstOrThrowZodSchema = z.object({ select: dictAdvTermFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTermScalarFieldEnumSchema, DictAdvTermScalarFieldEnumSchema.array()]).optional() }).strict();