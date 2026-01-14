import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialOrderByWithRelationInputObjectSchema as PearsonMaterialOrderByWithRelationInputObjectSchema } from './objects/PearsonMaterialOrderByWithRelationInput.schema';
import { PearsonMaterialWhereInputObjectSchema as PearsonMaterialWhereInputObjectSchema } from './objects/PearsonMaterialWhereInput.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';
import { PearsonMaterialScalarFieldEnumSchema } from './enums/PearsonMaterialScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PearsonMaterialFindFirstSelectSchema: z.ZodType<Prisma.PearsonMaterialSelect> = z.object({
    MyNumber: z.boolean().optional(),
    ContractID: z.boolean().optional(),
    InvoiceNumber: z.boolean().optional(),
    InvoiceDate: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBN: z.boolean().optional(),
    Amount: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialSelect>;

export const PearsonMaterialFindFirstSelectZodSchema = z.object({
    MyNumber: z.boolean().optional(),
    ContractID: z.boolean().optional(),
    InvoiceNumber: z.boolean().optional(),
    InvoiceDate: z.boolean().optional(),
    Publisher: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBN: z.boolean().optional(),
    Amount: z.boolean().optional()
  }).strict();

export const PearsonMaterialFindFirstSchema: z.ZodType<Prisma.PearsonMaterialFindFirstArgs> = z.object({ select: PearsonMaterialFindFirstSelectSchema.optional(),  orderBy: z.union([PearsonMaterialOrderByWithRelationInputObjectSchema, PearsonMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonMaterialWhereInputObjectSchema.optional(), cursor: PearsonMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PearsonMaterialScalarFieldEnumSchema, PearsonMaterialScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialFindFirstArgs>;

export const PearsonMaterialFindFirstZodSchema = z.object({ select: PearsonMaterialFindFirstSelectSchema.optional(),  orderBy: z.union([PearsonMaterialOrderByWithRelationInputObjectSchema, PearsonMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonMaterialWhereInputObjectSchema.optional(), cursor: PearsonMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PearsonMaterialScalarFieldEnumSchema, PearsonMaterialScalarFieldEnumSchema.array()]).optional() }).strict();