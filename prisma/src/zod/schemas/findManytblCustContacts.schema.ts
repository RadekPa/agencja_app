import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsOrderByWithRelationInputObjectSchema as tblCustContactsOrderByWithRelationInputObjectSchema } from './objects/tblCustContactsOrderByWithRelationInput.schema';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './objects/tblCustContactsWhereInput.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';
import { TblCustContactsScalarFieldEnumSchema } from './enums/TblCustContactsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustContactsFindManySelectSchema: z.ZodType<Prisma.tblCustContactsSelect> = z.object({
    ContactID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    DefaultContact: z.boolean().optional(),
    TypeOfContact: z.boolean().optional(),
    Phone: z.boolean().optional(),
    CellPhone: z.boolean().optional(),
    Fax: z.boolean().optional(),
    Email: z.boolean().optional(),
    IsSameAsClient: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblContacts: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustContactsSelect>;

export const tblCustContactsFindManySelectZodSchema = z.object({
    ContactID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    DefaultContact: z.boolean().optional(),
    TypeOfContact: z.boolean().optional(),
    Phone: z.boolean().optional(),
    CellPhone: z.boolean().optional(),
    Fax: z.boolean().optional(),
    Email: z.boolean().optional(),
    IsSameAsClient: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblContacts: z.boolean().optional()
  }).strict();

export const tblCustContactsFindManySchema: z.ZodType<Prisma.tblCustContactsFindManyArgs> = z.object({ select: tblCustContactsFindManySelectSchema.optional(), include: z.lazy(() => tblCustContactsIncludeObjectSchema.optional()), orderBy: z.union([tblCustContactsOrderByWithRelationInputObjectSchema, tblCustContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustContactsWhereInputObjectSchema.optional(), cursor: tblCustContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustContactsScalarFieldEnumSchema, TblCustContactsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustContactsFindManyArgs>;

export const tblCustContactsFindManyZodSchema = z.object({ select: tblCustContactsFindManySelectSchema.optional(), include: z.lazy(() => tblCustContactsIncludeObjectSchema.optional()), orderBy: z.union([tblCustContactsOrderByWithRelationInputObjectSchema, tblCustContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustContactsWhereInputObjectSchema.optional(), cursor: tblCustContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustContactsScalarFieldEnumSchema, TblCustContactsScalarFieldEnumSchema.array()]).optional() }).strict();