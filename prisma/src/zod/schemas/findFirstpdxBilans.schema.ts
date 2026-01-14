import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansOrderByWithRelationInputObjectSchema as pdxBilansOrderByWithRelationInputObjectSchema } from './objects/pdxBilansOrderByWithRelationInput.schema';
import { pdxBilansWhereInputObjectSchema as pdxBilansWhereInputObjectSchema } from './objects/pdxBilansWhereInput.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';
import { PdxBilansScalarFieldEnumSchema } from './enums/PdxBilansScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const pdxBilansFindFirstSelectSchema: z.ZodType<Prisma.pdxBilansSelect> = z.object({
    Bil_nr: z.boolean().optional(),
    Waluta: z.boolean().optional(),
    Wyci_g: z.boolean().optional(),
    Data_wyc: z.boolean().optional(),
    Nasz_inv: z.boolean().optional(),
    Type: z.boolean().optional(),
    Kwota_wp_ywu: z.boolean().optional(),
    PayType: z.boolean().optional(),
    Graal_perc: z.boolean().optional(),
    Kwota_wyp_aty: z.boolean().optional(),
    Kwota_inv: z.boolean().optional(),
    Tax_10_: z.boolean().optional(),
    TaxPerc: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Wyd_Debit: z.boolean().optional(),
    Extra_Bank: z.boolean().optional(),
    Transfer: z.boolean().optional(),
    AGNR: z.boolean().optional(),
    RIGHT: z.boolean().optional(),
    AUTOR: z.boolean().optional(),
    Title: z.boolean().optional(),
    WYDAB: z.boolean().optional(),
    WYD: z.boolean().optional(),
    OWNAB: z.boolean().optional(),
    OWNER: z.boolean().optional(),
    Sum: z.boolean().optional(),
    SumPLN: z.boolean().optional(),
    GRAAL_INCOME: z.boolean().optional(),
    Kurs: z.boolean().optional(),
    GraalPLN: z.boolean().optional(),
    Notes: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.pdxBilansSelect>;

export const pdxBilansFindFirstSelectZodSchema = z.object({
    Bil_nr: z.boolean().optional(),
    Waluta: z.boolean().optional(),
    Wyci_g: z.boolean().optional(),
    Data_wyc: z.boolean().optional(),
    Nasz_inv: z.boolean().optional(),
    Type: z.boolean().optional(),
    Kwota_wp_ywu: z.boolean().optional(),
    PayType: z.boolean().optional(),
    Graal_perc: z.boolean().optional(),
    Kwota_wyp_aty: z.boolean().optional(),
    Kwota_inv: z.boolean().optional(),
    Tax_10_: z.boolean().optional(),
    TaxPerc: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Wyd_Debit: z.boolean().optional(),
    Extra_Bank: z.boolean().optional(),
    Transfer: z.boolean().optional(),
    AGNR: z.boolean().optional(),
    RIGHT: z.boolean().optional(),
    AUTOR: z.boolean().optional(),
    Title: z.boolean().optional(),
    WYDAB: z.boolean().optional(),
    WYD: z.boolean().optional(),
    OWNAB: z.boolean().optional(),
    OWNER: z.boolean().optional(),
    Sum: z.boolean().optional(),
    SumPLN: z.boolean().optional(),
    GRAAL_INCOME: z.boolean().optional(),
    Kurs: z.boolean().optional(),
    GraalPLN: z.boolean().optional(),
    Notes: z.boolean().optional()
  }).strict();

export const pdxBilansFindFirstSchema: z.ZodType<Prisma.pdxBilansFindFirstArgs> = z.object({ select: pdxBilansFindFirstSelectSchema.optional(),  orderBy: z.union([pdxBilansOrderByWithRelationInputObjectSchema, pdxBilansOrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxBilansWhereInputObjectSchema.optional(), cursor: pdxBilansWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PdxBilansScalarFieldEnumSchema, PdxBilansScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.pdxBilansFindFirstArgs>;

export const pdxBilansFindFirstZodSchema = z.object({ select: pdxBilansFindFirstSelectSchema.optional(),  orderBy: z.union([pdxBilansOrderByWithRelationInputObjectSchema, pdxBilansOrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxBilansWhereInputObjectSchema.optional(), cursor: pdxBilansWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PdxBilansScalarFieldEnumSchema, PdxBilansScalarFieldEnumSchema.array()]).optional() }).strict();