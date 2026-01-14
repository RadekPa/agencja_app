import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeOrderByWithRelationInputObjectSchema as dictMatTypeOrderByWithRelationInputObjectSchema } from './objects/dictMatTypeOrderByWithRelationInput.schema';
import { dictMatTypeWhereInputObjectSchema as dictMatTypeWhereInputObjectSchema } from './objects/dictMatTypeWhereInput.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';
import { DictMatTypeScalarFieldEnumSchema } from './enums/DictMatTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictMatTypeFindFirstSelectSchema: z.ZodType<Prisma.dictMatTypeSelect> = z.object({
    MatTypeID: z.boolean().optional(),
    MatTypeDesc: z.boolean().optional(),
    MatTypeDescPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictMatTypeSelect>;

export const dictMatTypeFindFirstSelectZodSchema = z.object({
    MatTypeID: z.boolean().optional(),
    MatTypeDesc: z.boolean().optional(),
    MatTypeDescPL: z.boolean().optional()
  }).strict();

export const dictMatTypeFindFirstSchema: z.ZodType<Prisma.dictMatTypeFindFirstArgs> = z.object({ select: dictMatTypeFindFirstSelectSchema.optional(),  orderBy: z.union([dictMatTypeOrderByWithRelationInputObjectSchema, dictMatTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMatTypeWhereInputObjectSchema.optional(), cursor: dictMatTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMatTypeScalarFieldEnumSchema, DictMatTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictMatTypeFindFirstArgs>;

export const dictMatTypeFindFirstZodSchema = z.object({ select: dictMatTypeFindFirstSelectSchema.optional(),  orderBy: z.union([dictMatTypeOrderByWithRelationInputObjectSchema, dictMatTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMatTypeWhereInputObjectSchema.optional(), cursor: dictMatTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMatTypeScalarFieldEnumSchema, DictMatTypeScalarFieldEnumSchema.array()]).optional() }).strict();