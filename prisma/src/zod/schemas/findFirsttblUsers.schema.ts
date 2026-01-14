import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './objects/tblUsersInclude.schema';
import { tblUsersOrderByWithRelationInputObjectSchema as tblUsersOrderByWithRelationInputObjectSchema } from './objects/tblUsersOrderByWithRelationInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './objects/tblUsersWhereInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './objects/tblUsersWhereUniqueInput.schema';
import { TblUsersScalarFieldEnumSchema } from './enums/TblUsersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblUsersFindFirstSelectSchema: z.ZodType<Prisma.tblUsersSelect> = z.object({
    Login: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    CompanyPosition: z.boolean().optional(),
    Birthday: z.boolean().optional(),
    Status: z.boolean().optional(),
    Initials: z.boolean().optional(),
    Phone: z.boolean().optional(),
    MobilePhone: z.boolean().optional(),
    Email: z.boolean().optional(),
    Sex: z.boolean().optional(),
    Street: z.boolean().optional(),
    ZipCode: z.boolean().optional(),
    City: z.boolean().optional(),
    Country: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Nameday: z.boolean().optional(),
    PersonID: z.boolean().optional(),
    tblCustUsers: z.boolean().optional(),
    tblUserAccess: z.boolean().optional(),
    tblUserParams: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblUsersSelect>;

export const tblUsersFindFirstSelectZodSchema = z.object({
    Login: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    CompanyPosition: z.boolean().optional(),
    Birthday: z.boolean().optional(),
    Status: z.boolean().optional(),
    Initials: z.boolean().optional(),
    Phone: z.boolean().optional(),
    MobilePhone: z.boolean().optional(),
    Email: z.boolean().optional(),
    Sex: z.boolean().optional(),
    Street: z.boolean().optional(),
    ZipCode: z.boolean().optional(),
    City: z.boolean().optional(),
    Country: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Nameday: z.boolean().optional(),
    PersonID: z.boolean().optional(),
    tblCustUsers: z.boolean().optional(),
    tblUserAccess: z.boolean().optional(),
    tblUserParams: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblUsersFindFirstSchema: z.ZodType<Prisma.tblUsersFindFirstArgs> = z.object({ select: tblUsersFindFirstSelectSchema.optional(), include: z.lazy(() => tblUsersIncludeObjectSchema.optional()), orderBy: z.union([tblUsersOrderByWithRelationInputObjectSchema, tblUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUsersWhereInputObjectSchema.optional(), cursor: tblUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUsersScalarFieldEnumSchema, TblUsersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUsersFindFirstArgs>;

export const tblUsersFindFirstZodSchema = z.object({ select: tblUsersFindFirstSelectSchema.optional(), include: z.lazy(() => tblUsersIncludeObjectSchema.optional()), orderBy: z.union([tblUsersOrderByWithRelationInputObjectSchema, tblUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUsersWhereInputObjectSchema.optional(), cursor: tblUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblUsersScalarFieldEnumSchema, TblUsersScalarFieldEnumSchema.array()]).optional() }).strict();