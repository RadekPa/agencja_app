import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeOrderByWithRelationInputObjectSchema as dictAdvTypeOrderByWithRelationInputObjectSchema } from './objects/dictAdvTypeOrderByWithRelationInput.schema';
import { dictAdvTypeWhereInputObjectSchema as dictAdvTypeWhereInputObjectSchema } from './objects/dictAdvTypeWhereInput.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';
import { DictAdvTypeScalarFieldEnumSchema } from './enums/DictAdvTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAdvTypeFindFirstSelectSchema: z.ZodType<Prisma.dictAdvTypeSelect> = z.object({
    AdvTypeId: z.boolean().optional(),
    AdvTypeDesc: z.boolean().optional(),
    AdvTypeDescPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeSelect>;

export const dictAdvTypeFindFirstSelectZodSchema = z.object({
    AdvTypeId: z.boolean().optional(),
    AdvTypeDesc: z.boolean().optional(),
    AdvTypeDescPL: z.boolean().optional()
  }).strict();

export const dictAdvTypeFindFirstSchema: z.ZodType<Prisma.dictAdvTypeFindFirstArgs> = z.object({ select: dictAdvTypeFindFirstSelectSchema.optional(),  orderBy: z.union([dictAdvTypeOrderByWithRelationInputObjectSchema, dictAdvTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTypeWhereInputObjectSchema.optional(), cursor: dictAdvTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTypeScalarFieldEnumSchema, DictAdvTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeFindFirstArgs>;

export const dictAdvTypeFindFirstZodSchema = z.object({ select: dictAdvTypeFindFirstSelectSchema.optional(),  orderBy: z.union([dictAdvTypeOrderByWithRelationInputObjectSchema, dictAdvTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTypeWhereInputObjectSchema.optional(), cursor: dictAdvTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAdvTypeScalarFieldEnumSchema, DictAdvTypeScalarFieldEnumSchema.array()]).optional() }).strict();