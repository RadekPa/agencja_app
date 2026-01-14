import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFEROrderByWithRelationInputObjectSchema as pdxTRANSFEROrderByWithRelationInputObjectSchema } from './objects/pdxTRANSFEROrderByWithRelationInput.schema';
import { pdxTRANSFERWhereInputObjectSchema as pdxTRANSFERWhereInputObjectSchema } from './objects/pdxTRANSFERWhereInput.schema';
import { pdxTRANSFERWhereUniqueInputObjectSchema as pdxTRANSFERWhereUniqueInputObjectSchema } from './objects/pdxTRANSFERWhereUniqueInput.schema';
import { PdxTRANSFERScalarFieldEnumSchema } from './enums/PdxTRANSFERScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const pdxTRANSFERFindFirstSelectSchema: z.ZodType<Prisma.pdxTRANSFERSelect> = z.object({
    Bil_nr: z.boolean().optional(),
    Date: z.boolean().optional(),
    PayType: z.boolean().optional(),
    Nasz_inv: z.boolean().optional(),
    Waluta: z.boolean().optional(),
    Kwota_wp_ywu: z.boolean().optional(),
    Kwota_inv: z.boolean().optional(),
    Tax_10_: z.boolean().optional(),
    Tax: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AUTOR: z.boolean().optional(),
    Title: z.boolean().optional(),
    WYD: z.boolean().optional(),
    OWNAB: z.boolean().optional(),
    GRAAL_INCOME: z.boolean().optional(),
    Transfer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERSelect>;

export const pdxTRANSFERFindFirstSelectZodSchema = z.object({
    Bil_nr: z.boolean().optional(),
    Date: z.boolean().optional(),
    PayType: z.boolean().optional(),
    Nasz_inv: z.boolean().optional(),
    Waluta: z.boolean().optional(),
    Kwota_wp_ywu: z.boolean().optional(),
    Kwota_inv: z.boolean().optional(),
    Tax_10_: z.boolean().optional(),
    Tax: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AUTOR: z.boolean().optional(),
    Title: z.boolean().optional(),
    WYD: z.boolean().optional(),
    OWNAB: z.boolean().optional(),
    GRAAL_INCOME: z.boolean().optional(),
    Transfer: z.boolean().optional()
  }).strict();

export const pdxTRANSFERFindFirstSchema: z.ZodType<Prisma.pdxTRANSFERFindFirstArgs> = z.object({ select: pdxTRANSFERFindFirstSelectSchema.optional(),  orderBy: z.union([pdxTRANSFEROrderByWithRelationInputObjectSchema, pdxTRANSFEROrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxTRANSFERWhereInputObjectSchema.optional(), cursor: pdxTRANSFERWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PdxTRANSFERScalarFieldEnumSchema, PdxTRANSFERScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERFindFirstArgs>;

export const pdxTRANSFERFindFirstZodSchema = z.object({ select: pdxTRANSFERFindFirstSelectSchema.optional(),  orderBy: z.union([pdxTRANSFEROrderByWithRelationInputObjectSchema, pdxTRANSFEROrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxTRANSFERWhereInputObjectSchema.optional(), cursor: pdxTRANSFERWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PdxTRANSFERScalarFieldEnumSchema, PdxTRANSFERScalarFieldEnumSchema.array()]).optional() }).strict();