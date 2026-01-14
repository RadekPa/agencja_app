import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubOrderByWithRelationInputObjectSchema as tblCertPubOrderByWithRelationInputObjectSchema } from './objects/tblCertPubOrderByWithRelationInput.schema';
import { tblCertPubWhereInputObjectSchema as tblCertPubWhereInputObjectSchema } from './objects/tblCertPubWhereInput.schema';
import { tblCertPubWhereUniqueInputObjectSchema as tblCertPubWhereUniqueInputObjectSchema } from './objects/tblCertPubWhereUniqueInput.schema';
import { TblCertPubScalarFieldEnumSchema } from './enums/TblCertPubScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCertPubFindManySelectSchema: z.ZodType<Prisma.tblCertPubSelect> = z.object({
    ClientID: z.boolean().optional(),
    Year: z.boolean().optional(),
    PubID: z.boolean().optional(),
    DateSent: z.boolean().optional(),
    Original: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCertPubSelect>;

export const tblCertPubFindManySelectZodSchema = z.object({
    ClientID: z.boolean().optional(),
    Year: z.boolean().optional(),
    PubID: z.boolean().optional(),
    DateSent: z.boolean().optional(),
    Original: z.boolean().optional()
  }).strict();

export const tblCertPubFindManySchema: z.ZodType<Prisma.tblCertPubFindManyArgs> = z.object({ select: tblCertPubFindManySelectSchema.optional(),  orderBy: z.union([tblCertPubOrderByWithRelationInputObjectSchema, tblCertPubOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCertPubWhereInputObjectSchema.optional(), cursor: tblCertPubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCertPubScalarFieldEnumSchema, TblCertPubScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCertPubFindManyArgs>;

export const tblCertPubFindManyZodSchema = z.object({ select: tblCertPubFindManySelectSchema.optional(),  orderBy: z.union([tblCertPubOrderByWithRelationInputObjectSchema, tblCertPubOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCertPubWhereInputObjectSchema.optional(), cursor: tblCertPubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCertPubScalarFieldEnumSchema, TblCertPubScalarFieldEnumSchema.array()]).optional() }).strict();