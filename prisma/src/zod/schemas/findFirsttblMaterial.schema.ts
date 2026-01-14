import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialOrderByWithRelationInputObjectSchema as tblMaterialOrderByWithRelationInputObjectSchema } from './objects/tblMaterialOrderByWithRelationInput.schema';
import { tblMaterialWhereInputObjectSchema as tblMaterialWhereInputObjectSchema } from './objects/tblMaterialWhereInput.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';
import { TblMaterialScalarFieldEnumSchema } from './enums/TblMaterialScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblMaterialFindFirstSelectSchema: z.ZodType<Prisma.tblMaterialSelect> = z.object({
    MatID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    MatTypeID: z.boolean().optional(),
    Amount: z.boolean().optional(),
    Currency: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    RequestDate: z.boolean().optional(),
    ReceiveDate: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblMaterialSelect>;

export const tblMaterialFindFirstSelectZodSchema = z.object({
    MatID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    MatTypeID: z.boolean().optional(),
    Amount: z.boolean().optional(),
    Currency: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    RequestDate: z.boolean().optional(),
    ReceiveDate: z.boolean().optional()
  }).strict();

export const tblMaterialFindFirstSchema: z.ZodType<Prisma.tblMaterialFindFirstArgs> = z.object({ select: tblMaterialFindFirstSelectSchema.optional(),  orderBy: z.union([tblMaterialOrderByWithRelationInputObjectSchema, tblMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMaterialWhereInputObjectSchema.optional(), cursor: tblMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMaterialScalarFieldEnumSchema, TblMaterialScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblMaterialFindFirstArgs>;

export const tblMaterialFindFirstZodSchema = z.object({ select: tblMaterialFindFirstSelectSchema.optional(),  orderBy: z.union([tblMaterialOrderByWithRelationInputObjectSchema, tblMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMaterialWhereInputObjectSchema.optional(), cursor: tblMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMaterialScalarFieldEnumSchema, TblMaterialScalarFieldEnumSchema.array()]).optional() }).strict();