import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './objects/tblContactsInclude.schema';
import { tblContactsOrderByWithRelationInputObjectSchema as tblContactsOrderByWithRelationInputObjectSchema } from './objects/tblContactsOrderByWithRelationInput.schema';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './objects/tblContactsWhereInput.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './objects/tblContactsWhereUniqueInput.schema';
import { TblContactsScalarFieldEnumSchema } from './enums/TblContactsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblContactsFindFirstSelectSchema: z.ZodType<Prisma.tblContactsSelect> = z.object({
    ContactID: z.boolean().optional(),
    PhoneNumber: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    Informal: z.boolean().optional(),
    Fax: z.boolean().optional(),
    Email: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    ContactPosition: z.boolean().optional(),
    Accountant: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblContactsSelect>;

export const tblContactsFindFirstSelectZodSchema = z.object({
    ContactID: z.boolean().optional(),
    PhoneNumber: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    Informal: z.boolean().optional(),
    Fax: z.boolean().optional(),
    Email: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    ContactPosition: z.boolean().optional(),
    Accountant: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblContactsFindFirstSchema: z.ZodType<Prisma.tblContactsFindFirstArgs> = z.object({ select: tblContactsFindFirstSelectSchema.optional(), include: z.lazy(() => tblContactsIncludeObjectSchema.optional()), orderBy: z.union([tblContactsOrderByWithRelationInputObjectSchema, tblContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblContactsWhereInputObjectSchema.optional(), cursor: tblContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblContactsScalarFieldEnumSchema, TblContactsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblContactsFindFirstArgs>;

export const tblContactsFindFirstZodSchema = z.object({ select: tblContactsFindFirstSelectSchema.optional(), include: z.lazy(() => tblContactsIncludeObjectSchema.optional()), orderBy: z.union([tblContactsOrderByWithRelationInputObjectSchema, tblContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblContactsWhereInputObjectSchema.optional(), cursor: tblContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblContactsScalarFieldEnumSchema, TblContactsScalarFieldEnumSchema.array()]).optional() }).strict();