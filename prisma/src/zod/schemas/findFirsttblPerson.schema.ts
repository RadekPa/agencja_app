import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonOrderByWithRelationInputObjectSchema as tblPersonOrderByWithRelationInputObjectSchema } from './objects/tblPersonOrderByWithRelationInput.schema';
import { tblPersonWhereInputObjectSchema as tblPersonWhereInputObjectSchema } from './objects/tblPersonWhereInput.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';
import { TblPersonScalarFieldEnumSchema } from './enums/TblPersonScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPersonFindFirstSelectSchema: z.ZodType<Prisma.tblPersonSelect> = z.object({
    PersonID: z.boolean().optional(),
    LastName: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    BirthDate: z.boolean().optional(),
    PESEL: z.boolean().optional(),
    Status: z.boolean().optional(),
    Address1: z.boolean().optional(),
    Address2: z.boolean().optional(),
    Zip: z.boolean().optional(),
    City: z.boolean().optional(),
    Country: z.boolean().optional(),
    MobileGRAAL: z.boolean().optional(),
    MobilePrivate: z.boolean().optional(),
    ExtGRAAL: z.boolean().optional(),
    emailGraal: z.boolean().optional(),
    emailPriv: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPersonSelect>;

export const tblPersonFindFirstSelectZodSchema = z.object({
    PersonID: z.boolean().optional(),
    LastName: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    BirthDate: z.boolean().optional(),
    PESEL: z.boolean().optional(),
    Status: z.boolean().optional(),
    Address1: z.boolean().optional(),
    Address2: z.boolean().optional(),
    Zip: z.boolean().optional(),
    City: z.boolean().optional(),
    Country: z.boolean().optional(),
    MobileGRAAL: z.boolean().optional(),
    MobilePrivate: z.boolean().optional(),
    ExtGRAAL: z.boolean().optional(),
    emailGraal: z.boolean().optional(),
    emailPriv: z.boolean().optional()
  }).strict();

export const tblPersonFindFirstSchema: z.ZodType<Prisma.tblPersonFindFirstArgs> = z.object({ select: tblPersonFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonOrderByWithRelationInputObjectSchema, tblPersonOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonWhereInputObjectSchema.optional(), cursor: tblPersonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonScalarFieldEnumSchema, TblPersonScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonFindFirstArgs>;

export const tblPersonFindFirstZodSchema = z.object({ select: tblPersonFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonOrderByWithRelationInputObjectSchema, tblPersonOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonWhereInputObjectSchema.optional(), cursor: tblPersonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonScalarFieldEnumSchema, TblPersonScalarFieldEnumSchema.array()]).optional() }).strict();