import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersOrderByWithRelationInputObjectSchema as tblCustUsersOrderByWithRelationInputObjectSchema } from './objects/tblCustUsersOrderByWithRelationInput.schema';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './objects/tblCustUsersWhereInput.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';
import { TblCustUsersScalarFieldEnumSchema } from './enums/TblCustUsersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustUsersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblCustUsersSelect> = z.object({
    CustID: z.boolean().optional(),
    Login: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustUsersSelect>;

export const tblCustUsersFindFirstOrThrowSelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    Login: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblUsers: z.boolean().optional()
  }).strict();

export const tblCustUsersFindFirstOrThrowSchema: z.ZodType<Prisma.tblCustUsersFindFirstOrThrowArgs> = z.object({ select: tblCustUsersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblCustUsersIncludeObjectSchema.optional()), orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustUsersScalarFieldEnumSchema, TblCustUsersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustUsersFindFirstOrThrowArgs>;

export const tblCustUsersFindFirstOrThrowZodSchema = z.object({ select: tblCustUsersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblCustUsersIncludeObjectSchema.optional()), orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustUsersScalarFieldEnumSchema, TblCustUsersScalarFieldEnumSchema.array()]).optional() }).strict();