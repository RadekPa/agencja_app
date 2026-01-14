import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersOrderByWithRelationInputObjectSchema as tblCustUsersOrderByWithRelationInputObjectSchema } from './objects/tblCustUsersOrderByWithRelationInput.schema';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './objects/tblCustUsersWhereInput.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';
import { TblCustUsersScalarFieldEnumSchema } from './enums/TblCustUsersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustUsersFindManySelectSchema: z.ZodType<Prisma.tblCustUsersSelect> = z.object({
    CustID: z.boolean().optional(),
    Login: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustUsersSelect>;

export const tblCustUsersFindManySelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    Login: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict();

export const tblCustUsersFindManySchema: z.ZodType<Prisma.tblCustUsersFindManyArgs> = z.object({ select: tblCustUsersFindManySelectSchema.optional(), include: z.lazy(() => tblCustUsersIncludeObjectSchema.optional()), orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustUsersScalarFieldEnumSchema, TblCustUsersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustUsersFindManyArgs>;

export const tblCustUsersFindManyZodSchema = z.object({ select: tblCustUsersFindManySelectSchema.optional(), include: z.lazy(() => tblCustUsersIncludeObjectSchema.optional()), orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustUsersScalarFieldEnumSchema, TblCustUsersScalarFieldEnumSchema.array()]).optional() }).strict();