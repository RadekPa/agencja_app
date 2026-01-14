import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalOrderByWithRelationInputObjectSchema as tblPubLocalOrderByWithRelationInputObjectSchema } from './objects/tblPubLocalOrderByWithRelationInput.schema';
import { tblPubLocalWhereInputObjectSchema as tblPubLocalWhereInputObjectSchema } from './objects/tblPubLocalWhereInput.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';
import { TblPubLocalScalarFieldEnumSchema } from './enums/TblPubLocalScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPubLocalFindFirstSelectSchema: z.ZodType<Prisma.tblPubLocalSelect> = z.object({
    PubLocalID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    LocalTitle: z.boolean().optional(),
    PubDate: z.boolean().optional(),
    LocalISBN: z.boolean().optional(),
    Printrun: z.boolean().optional(),
    LocalEdition: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPubLocalSelect>;

export const tblPubLocalFindFirstSelectZodSchema = z.object({
    PubLocalID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    LocalTitle: z.boolean().optional(),
    PubDate: z.boolean().optional(),
    LocalISBN: z.boolean().optional(),
    Printrun: z.boolean().optional(),
    LocalEdition: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict();

export const tblPubLocalFindFirstSchema: z.ZodType<Prisma.tblPubLocalFindFirstArgs> = z.object({ select: tblPubLocalFindFirstSelectSchema.optional(), include: z.lazy(() => tblPubLocalIncludeObjectSchema.optional()), orderBy: z.union([tblPubLocalOrderByWithRelationInputObjectSchema, tblPubLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubLocalWhereInputObjectSchema.optional(), cursor: tblPubLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPubLocalScalarFieldEnumSchema, TblPubLocalScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPubLocalFindFirstArgs>;

export const tblPubLocalFindFirstZodSchema = z.object({ select: tblPubLocalFindFirstSelectSchema.optional(), include: z.lazy(() => tblPubLocalIncludeObjectSchema.optional()), orderBy: z.union([tblPubLocalOrderByWithRelationInputObjectSchema, tblPubLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubLocalWhereInputObjectSchema.optional(), cursor: tblPubLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPubLocalScalarFieldEnumSchema, TblPubLocalScalarFieldEnumSchema.array()]).optional() }).strict();