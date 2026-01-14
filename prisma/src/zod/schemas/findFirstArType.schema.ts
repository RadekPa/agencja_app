import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeOrderByWithRelationInputObjectSchema as ArTypeOrderByWithRelationInputObjectSchema } from './objects/ArTypeOrderByWithRelationInput.schema';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';
import { ArTypeScalarFieldEnumSchema } from './enums/ArTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTypeFindFirstSelectSchema: z.ZodType<Prisma.ArTypeSelect> = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTypeSelect>;

export const ArTypeFindFirstSelectZodSchema = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict();

export const ArTypeFindFirstSchema: z.ZodType<Prisma.ArTypeFindFirstArgs> = z.object({ select: ArTypeFindFirstSelectSchema.optional(),  orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTypeScalarFieldEnumSchema, ArTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeFindFirstArgs>;

export const ArTypeFindFirstZodSchema = z.object({ select: ArTypeFindFirstSelectSchema.optional(),  orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTypeScalarFieldEnumSchema, ArTypeScalarFieldEnumSchema.array()]).optional() }).strict();