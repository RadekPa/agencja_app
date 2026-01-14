import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatOrderByWithRelationInputObjectSchema as ArVatOrderByWithRelationInputObjectSchema } from './objects/ArVatOrderByWithRelationInput.schema';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';
import { ArVatScalarFieldEnumSchema } from './enums/ArVatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArVatFindFirstSelectSchema: z.ZodType<Prisma.ArVatSelect> = z.object({
    VatCode: z.boolean().optional(),
    Description: z.boolean().optional(),
    VatRate: z.boolean().optional(),
    DescriptionPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArVatSelect>;

export const ArVatFindFirstSelectZodSchema = z.object({
    VatCode: z.boolean().optional(),
    Description: z.boolean().optional(),
    VatRate: z.boolean().optional(),
    DescriptionPL: z.boolean().optional()
  }).strict();

export const ArVatFindFirstSchema: z.ZodType<Prisma.ArVatFindFirstArgs> = z.object({ select: ArVatFindFirstSelectSchema.optional(),  orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArVatScalarFieldEnumSchema, ArVatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArVatFindFirstArgs>;

export const ArVatFindFirstZodSchema = z.object({ select: ArVatFindFirstSelectSchema.optional(),  orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArVatScalarFieldEnumSchema, ArVatScalarFieldEnumSchema.array()]).optional() }).strict();