import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceOrderByWithRelationInputObjectSchema as tblInvoiceOrderByWithRelationInputObjectSchema } from './objects/tblInvoiceOrderByWithRelationInput.schema';
import { tblInvoiceWhereInputObjectSchema as tblInvoiceWhereInputObjectSchema } from './objects/tblInvoiceWhereInput.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';
import { TblInvoiceScalarFieldEnumSchema } from './enums/TblInvoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblInvoiceFindManySelectSchema: z.ZodType<Prisma.tblInvoiceSelect> = z.object({
    InvNum: z.boolean().optional(),
    InvType: z.boolean().optional(),
    InvDate: z.boolean().optional(),
    BillToId: z.boolean().optional(),
    ClientId: z.boolean().optional(),
    ShipToId: z.boolean().optional(),
    CurrId: z.boolean().optional(),
    TotalInvNET: z.boolean().optional(),
    VATPerc: z.boolean().optional(),
    TermDD: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    Status: z.boolean().optional(),
    SumInWords: z.boolean().optional(),
    Balance: z.boolean().optional(),
    CliRef: z.boolean().optional(),
    Descr: z.boolean().optional(),
    DateDue: z.boolean().optional(),
    UserName: z.boolean().optional(),
    AgentID: z.boolean().optional(),
    TaxCode: z.boolean().optional(),
    TaxValue: z.boolean().optional(),
    TaxInfo: z.boolean().optional(),
    PropID: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblInvoiceSelect>;

export const tblInvoiceFindManySelectZodSchema = z.object({
    InvNum: z.boolean().optional(),
    InvType: z.boolean().optional(),
    InvDate: z.boolean().optional(),
    BillToId: z.boolean().optional(),
    ClientId: z.boolean().optional(),
    ShipToId: z.boolean().optional(),
    CurrId: z.boolean().optional(),
    TotalInvNET: z.boolean().optional(),
    VATPerc: z.boolean().optional(),
    TermDD: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    Status: z.boolean().optional(),
    SumInWords: z.boolean().optional(),
    Balance: z.boolean().optional(),
    CliRef: z.boolean().optional(),
    Descr: z.boolean().optional(),
    DateDue: z.boolean().optional(),
    UserName: z.boolean().optional(),
    AgentID: z.boolean().optional(),
    TaxCode: z.boolean().optional(),
    TaxValue: z.boolean().optional(),
    TaxInfo: z.boolean().optional(),
    PropID: z.boolean().optional()
  }).strict();

export const tblInvoiceFindManySchema: z.ZodType<Prisma.tblInvoiceFindManyArgs> = z.object({ select: tblInvoiceFindManySelectSchema.optional(),  orderBy: z.union([tblInvoiceOrderByWithRelationInputObjectSchema, tblInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceWhereInputObjectSchema.optional(), cursor: tblInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblInvoiceScalarFieldEnumSchema, TblInvoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceFindManyArgs>;

export const tblInvoiceFindManyZodSchema = z.object({ select: tblInvoiceFindManySelectSchema.optional(),  orderBy: z.union([tblInvoiceOrderByWithRelationInputObjectSchema, tblInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceWhereInputObjectSchema.optional(), cursor: tblInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblInvoiceScalarFieldEnumSchema, TblInvoiceScalarFieldEnumSchema.array()]).optional() }).strict();